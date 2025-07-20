// client/src/components/Education.jsx
import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section-container">
            <div className="container mx-auto px-4 w-full max-w-4xl">
                <div className="section-header"><span className="section-title">/ education</span></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="card-bg p-6">
                        <h3 className="job-title">M.Sc. Data Science <span className="job-company">@ Chandigarh University</span></h3>
                        <div className="job-duration">2023 - 2025</div>
                        <ul className="job-description">
                            <li><b>Published Research:</b> My paper, <b>“Hybrid CNN-LSTM Architecture for Deepfake Detection,”</b> was accepted at the AITC-2025 conference. The work introduces a novel model achieving <b>96.3% accuracy</b> by combining CNNs for spatial analysis and LSTMs for temporal analysis.</li>
                            <li><b>Major Project:</b> Developed a soft voting ensemble model to predict student performance with 93% accuracy, combining DistilBERT, LSTM, and a Decision Tree to analyze multimodal data.</li>
                            <li><b>Core Coursework:</b> Machine Learning, Deep Learning, Big Data Analytics, Data Visualization, AI Ethics.</li>
                        </ul>
                    </div>
                    <div className="card-bg p-6">
                        <h3 className="job-title">BCA <span className="job-company">@ Christ University</span></h3>
                        <div className="job-duration">2020 - 2023</div>
                        <ul className="job-description">
                            <li><b>Core Focus:</b> Built a strong foundation in Algorithms, Data Structures, Web Development, and Database Management Systems.</li>
                            <li><b>Capstone Project:</b> Engineered a real-time music genre classifier in Python. The tool captured and processed live microphone audio using Librosa for feature extraction, delivering instant genre predictions via a trained machine learning model.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;