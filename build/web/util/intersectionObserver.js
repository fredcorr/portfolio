import { useRef, useEffect, useState } from 'react';
import { useIntersection } from 'react-use';

const IntersectionObserver = ({ threshold, children, reset = false }) => {

    const ref = useRef();
    const intersection = useIntersection( ref, { threshold: threshold })
    const [inView, setInView] = useState(false);

    useEffect(() => {
      
      const inViewNow = intersection && intersection.intersectionRatio > 0;

      if (inViewNow) {
        return setInView(inViewNow);
      } else if (reset) {
        return setInView(false);
      }
        
    }, [ intersection, reset]);

    return  children( { ref: ref, inView: inView } )
}

export default IntersectionObserver;