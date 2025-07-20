// client/src/components/Hero.jsx
import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-container">
            <div className="max-w-4xl mx-auto z-10 text-center">
                <p className="text-xl md:text-2xl font-light mb-4 text-gray-400">Hi, I'm</p>
                <h1 className="intro-title">Aditya<span className="intro-name"> Rai</span>.<span className="Cursor">|</span></h1>
                <div className="intro-subtitle">I build data-driven solutions.</div>
                <div className="intro-desc">
                    I'm a software engineer and designer specializing in AI models, full-stack web applications, and data visualizations that deliver real-world value.
                </div>
                <a href="mailto:adityarai.rai21@gmail.com" className="intro-contact"><i className="fas fa-envelope mr-2"></i> Say hi!</a>
            </div>
        </section>
    );
};

export default Hero;