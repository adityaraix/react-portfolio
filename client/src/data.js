// client/src/data.js
export const projects = [
  {
    title: "Bucher - Book Marketplace",
    desc: "A full-stack platform for buying and selling books with real-time chat.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.IO"],
    details: "Developed a <strong>full-stack MERN platform</strong> for buying and reselling books. Integrated <strong>Socket.IO</strong> for real-time chat and built a scalable RESTful API with Node.js and Express to manage users and listings.",
    link: "https://github.com/adityaraix"
  },
  {
    title: "Pneumonia Detection App",
    desc: "A desktop app detecting pneumonia from X-rays using a VGG16 CNN with 93% accuracy.",
    tech: ["Python", "Keras", "PyQt", "VGG16"],
    details: "Built a desktop app to classify chest X-rays. <strong>Fine-tuned a VGG16 CNN</strong> on 5,000+ images to achieve <strong>93% accuracy</strong>. Designed an intuitive PyQt GUI for easy image upload and instant prediction.",
    link: "https://github.com/adityaraix/Lung-Disease-Detection"
  },
  {
    title: "Premier League Prediction",
    desc: "A model predicting Premier League match outcomes with 70% accuracy.",
    tech: ["Python", "scikit-learn", "BeautifulSoup"],
    details: "Engineered a predictive model by scraping historical data for <strong>380+ matches</strong>. Performed feature engineering on team form and stats. Trained a scikit-learn model achieving <strong>70% accuracy</strong> on unseen data.",
    link: "https://github.com/adityaraix/Premier-League-prediction"
  },
  {
    title: "Student Performance Predictor",
    desc: "An ensemble model predicting student performance with 93% accuracy.",
    tech: ["DistilBERT", "LSTM", "Decision Tree"],
    details: "Developed a <strong>soft-voting ensemble</strong> combining DistilBERT (text), LSTM (sequences), and a Decision Tree (tabular data). This multi-modal approach achieved <strong>93% accuracy</strong> in predicting student performance levels.",
    link: "https://github.com/adityaraix/Student-performance-prediction"
  },
  {
    title: "Real-time Genre Classifier",
    desc: "A Python tool for classifying music genres from live audio streams.",
    tech: ["Python", "Librosa", "Machine Learning"],
    details: "Built a tool that captures <strong>live microphone audio</strong>, extracts MFCC features using <strong>Librosa</strong>, and applies a trained machine learning model to predict the music genre instantly.",
    link: "https://github.com/adityaraix"
  },
  {
    title: "Deepfake Detection Research",
    desc: "A published hybrid CNN-LSTM model for detecting deepfaked videos.",
    tech: ["CNN", "LSTM", "Deep Learning", "AITC-2025"],
    details: "Authored a research paper on a <strong>hybrid CNN-LSTM architecture</strong> for deepfake detection, accepted at AITC-2025. The model leverages CNNs for spatial analysis and LSTMs for temporal cues, achieving <strong>96.3% accuracy</strong>.",
    link: "https://github.com/adityaraix"
  }
];