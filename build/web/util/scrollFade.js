import { useViewportScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useMemo, useState } from 'react';

const ScrollFade = ({ yOffset = 500, children }) => {

    const [elementBottom, setElementBottom] = useState(0);
    const [elementTop, setElementTop] = useState(0);
    const [ isMobile, setMobile ] = useState( false ) ;
    const { scrollY } = useViewportScroll();
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;

        const checkMobile = () => {
          if( window.innerWidth <= 900 ) {
            setMobile( true );
          } else{
            setMobile( false );
          }
        }
    
        const setValues = () => {
          setElementTop(ref.current.offsetTop);
          setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
        };
    
        checkMobile();
        setValues();
        document.addEventListener("load", setValues);
        window.addEventListener("resize", () => {
            checkMobile()
            setValues();
        });
        
        return () => {
          document.removeEventListener("load", setValues);
          window.removeEventListener("resize", setValues);
        };
        
    }, [ref, yOffset]);

    const transformFinalValue = elementTop + yOffset;
  
    const opacityRange = useMemo(() => [0, 1], [ 0 ]);
  
    const yOpacityRange = [elementBottom, transformFinalValue - yOffset];
    const opacity = useTransform( scrollY, yOpacityRange, opacityRange, "anticipate" );
    
    return children( { style: { opacity: isMobile ? 1 : opacity }, ref: ref } )
}

export default ScrollFade;