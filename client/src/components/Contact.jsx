// client/src/components/Contact.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ submitting: false, message: '' });

    useEffect(() => {
        if (status.message) {
            const timer = setTimeout(() => {
                setStatus({ ...status, message: '' });
            }, 7000); 
            return () => clearTimeout(timer);
        }
    }, [status.message]);

    // THIS FUNCTION WAS MISSING. IT IS NOW ADDED BACK.
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, message: '' });
        try {
            const res = await axios.post('http://localhost:5000/api/send-email', formData);
            setStatus({ submitting: false, message: res.data.msg });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            const errorMsg = error.response?.data?.msg || 'An error occurred. Please try again.';
            setStatus({ submitting: false, message: errorMsg });
        }
    };

    return (
        <section id="contact" className="section-container">
            {status.message && (
                <div className={`toast-notification ${!status.message.includes('successfully') ? 'error' : ''}`}>
                    {status.message}
                </div>
            )}
            
            <div className="container mx-auto px-4 max-w-2xl text-center">
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--light-slate)' }}>Get In Touch</h2>
                <p className="text-lg mb-8">My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll do my best to get back to you!</p>
                <form onSubmit={handleSubmit} className="contact-form text-left max-w-lg mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div><label htmlFor="name">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required /></div>
                        <div><label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required /></div>
                    </div>
                    <div className="mb-6"><label htmlFor="subject">Subject</label><input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject of your message" /></div>
                    <div className="mb-8"><label htmlFor="message">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Your message..." required></textarea></div>
                    <div><button type="submit" className="contact-button" disabled={status.submitting}>{status.submitting ? 'Sending...' : 'Send Message'}</button></div>
                </form>
                <div className="mt-12 flex justify-center space-x-6 text-3xl">
                    <a href="https://linkedin.com/in/adityaraix/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/adityaraix" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="mailto:adityarai.rai21@gmail.com" className="text-gray-500 hover:text-white transition-colors duration-300" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;