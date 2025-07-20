// client/src/components/About.jsx
import React from 'react';

// This line imports your local image
import profilePhoto from '../assets/DSC_4188.JPG';

const About = () => {
    return (
        <section id="about" className="section-container">
            <div className="container mx-auto px-4 about-content-wrapper">
                <div className="section-header"><span className="section-title">/ about me</span></div>
                <div className="flex flex-col md:flex-row gap-8 items-start w-full">
                    <div className="md:w-3/5 text-lg leading-relaxed">
                        <p className="mb-4">Hello! I'm Aditya Rai, a software engineer passionate about transforming complex data into usable, high-impact products. I combine expertise in machine learning, modern web technologies, and thoughtful design to build solutions that help businesses grow.</p>
                        <p className="mb-4">Here are some technologies I've been working with recently:</p>
                        <ul className="tech-stack grid grid-cols-2 gap-2">
                            <li>Python</li><li>JavaScript (ES6+)</li><li>React.js & Node.js</li><li>TensorFlow & Keras</li>
                            <li>scikit-learn</li><li>PostgreSQL & MongoDB</li><li>HTML & CSS</li><li>Git, GitHub & Docker</li>
                        </ul>
                        <p className="mt-4">Outside of work, I enjoy fitness, contributing to open-source projects, martial arts, and reading. I'm always eager to learn new things and connect with fellow enthusiasts.</p>
                    </div>
                    <div className="md:w-2/5 flex justify-center md:justify-end">
                        <div className="about-image w-full max-w-xs md:max-w-none">
                            {/* This line now uses your imported image */}
                            <img src={profilePhoto} alt="Aditya Rai" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;