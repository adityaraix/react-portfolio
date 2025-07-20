// client/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark-navy text-slate">
            <div className="container mx-auto">
                <div>Built & Designed by Aditya Rai.</div>
                <div>All rights reserved. © {currentYear}</div>
            </div>
        </footer>
    );
};

export default Footer;