// client/src/components/Experience.jsx
import React, { useState } from 'react';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('unified-mentor');

    return (
        <section id="experience" className="section-container">
            <div className="container mx-auto px-4">
                <div className="section-header"><span className="section-title">/ experience</span></div>
                <div className="experience-tabs-wrapper">
                    <div className="flex flex-col md:flex-row gap-0 md:gap-8 min-h-[300px] w-full max-w-4xl mx-auto">
                        <div className="md:w-1/4 flex flex-row md:flex-col experience-tabs overflow-x-auto md:overflow-x-hidden">
                            <button onClick={() => setActiveTab('unified-mentor')} className={`experience-tab-button ${activeTab === 'unified-mentor' ? 'active' : ''}`}>Unified Mentor</button>
                        </div>
                        <div className="md:w-3/4 p-1 md:p-4">
                            {activeTab === 'unified-mentor' && (
                                <div id="unified-mentor" className="tab-content active-content">
                                    <h3 className="job-title">Data Science Intern <span className="job-company">@ Unified Mentor</span></h3>
                                    <div className="job-duration">JULY – NOVEMBER 2024</div>
                                    <ul className="job-description">
                                        <li>Cleaned and preprocessed student interaction data, improving dataset quality for model training.</li>
                                        <li>Retrained and fine-tuned existing recommendation models, improving the personalization of learning resources for over 1,000 active users.</li>
                                        <li>Assisted in maintaining and optimizing data pipelines to ensure the timely delivery of personalized study materials.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;