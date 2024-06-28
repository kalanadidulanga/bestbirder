import React, { useState, useEffect } from 'react';
import { GoMoveToTop } from "react-icons/go";
import './component.css'

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 100); // Show button after 100px scroll
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll
    };

    return (
        // <div className=''>
            <button
                className={`scroll-to-top-btn scrool_button ${isVisible ? 'visible' : ''} fixed  right-5 bg-white pb-5 pt-3 shadow-lg px-2 rounded-t-full z-50`}
                onClick={handleScrollToTop}
            >
                {/* Button content (e.g., arrow icon) */}
                <GoMoveToTop className=' text-emerald-500' size={25} />
            </button>
        // </div>

    );
};

export default GoToTop;