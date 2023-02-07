import React, { useEffect, useState, useRef } from 'react';
import './productShowcase.css'
const ProductShowcase = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);
    const toggleAnimation = (e) => {
        if(e[0]?.isIntersecting)
        setShowAnimation(true);
    };
    const options = {
        root:null,
        rootMargin:"0px",
        threshold:0.5,
    };
    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation,options);
        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);
            }
        }
        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    });

    return (
        <div className="dark-bg">
        <div className={`product-showcase ${showAnimation ? 'scale-up-bottom':''}`} ref={ref}>
           {showAnimation && (
           <div className="showcase-wrapper">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" className='showcase-ui showcase-mockup-1' alt="Mobile" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" className='showcase-ui showcase-mockup-2' alt="Mobile" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" className='showcase-ui showcase-mockup-3' alt="Mobile" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" className='showcase-ui showcase-mockup-4' alt="Mobile" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" className='showcase-ui showcase-mockup-5' alt="Mobile" />
            </div>
          )}
        </div>
        </div>
    )
}
export default ProductShowcase;