import React, { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        // Load the Google Translate script
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.onload = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en', // Set default language
                autoDisplay: false, // Show translation dropdown only when clicked
            }, 'google_translate_element');
        };
        document.body.appendChild(script);
    }, []);

    return <div id='google_translate_element'></div>;
};

export default GoogleTranslate;