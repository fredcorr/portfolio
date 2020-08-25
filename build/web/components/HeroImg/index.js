import { motion, useViewportScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useMemo, useState } from 'react';

const HeroImg = ({
    yOffset = 500,
    hero_img,
    variants,
    initial,
    animate,
    title,
    exit
}) => {

    const [elementBottom, setElementBottom] = useState(0);
    const [elementTop, setElementTop] = useState(0);
    const { scrollY } = useViewportScroll();
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;
    
        const setValues = () => {
          setElementTop(ref.current.offsetTop);
          setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
        };
    
        setValues();
        document.addEventListener("load", setValues);
        window.addEventListener("resize", setValues);
    
        return () => {
          document.removeEventListener("load", setValues);
          window.removeEventListener("resize", setValues);
        };
        
    }, [ref, yOffset]);

    const transformFinalValue = elementTop + yOffset;
  
    const opacityRange = useMemo(() => [0, 1], [ 0 ]);
  
    const yOpacityRange = [elementBottom, transformFinalValue - yOffset];
    const opacity = useTransform( scrollY, yOpacityRange, opacityRange, "anticipate" );
    
    return <motion.img
        style={{ opacity: opacity }}
        initial={ initial }
        animate={ animate }
        variants={variants}
        src={ hero_img } 
        alt={ title } 
        exit={ exit }
        ref={ ref }
        />
}

export default HeroImg;