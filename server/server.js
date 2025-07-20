// server/server.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow requests from any origin for now
app.use(express.json());

// API Endpoint to handle form submission
app.post('/api/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please fill out all required fields.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'adityarai.rai21@gmail.com', // Your receiving email
        subject: `New Portfolio Contact: ${subject || 'No Subject'}`,
        html: `
            <h3>New Message from Portfolio Contact Form</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ msg: 'Failed to send email.' });
        }
        res.status(200).json({ msg: 'Email sent successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});