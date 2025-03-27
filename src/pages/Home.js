// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Remove image import that's causing errors
// import profileImage from '../assets/profile-placeholder.jpg';
import './Home.css';

const Home = () => {
  // Animation variants for the buttons
  const coinAnimation = {
    hover: { 
      rotate: 360,
      scale: 1.1,
      transition: { duration: 0.5 }
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Replace img with a div placeholder */}
          <div className="profile-image-placeholder">SK</div>
        </motion.div>
        
        <motion.div 
          className="intro-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Sajid Korbu</h1>
          <h2>Growth and Transformation Leader</h2>
          <p className="summary">
            I come with over 18 years of work experience in IT industry,
            with 10+ years in Europe. I have strong experience in Sales,
            Account and Relationship Management, and CXO connects. I help
            leading Travel and Transportation companies in their Digital
            Transformation journeys.
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        className="contact-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p><strong>Location:</strong> Copenhagen, Denmark</p>
        <p><strong>Email:</strong> <a href="mailto:sajidkorbu@gmail.com">sajidkorbu@gmail.com</a></p>
        <p><strong>Phone:</strong> +45 21 33 39 03</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sajidkorbu" target="_blank" rel="noopener noreferrer">@sajidkorbu</a></p>
      </motion.div>
      
      <div className="navigation-buttons">
        <motion.div 
          variants={coinAnimation}
          whileHover="hover"
          whileTap="tap"
          className="nav-button"
        >
          <Link to="/profile">My Profile</Link>
        </motion.div>
        
        <motion.div 
          variants={coinAnimation}
          whileHover="hover"
          whileTap="tap"
          className="nav-button"
        >
          <Link to="/why-how">Why & How</Link>
        </motion.div>
        
        <motion.div 
          variants={coinAnimation}
          whileHover="hover"
          whileTap="tap"
          className="nav-button"
        >
          <Link to="/side-projects">Side Projects</Link>
        </motion.div>
        
        <motion.div 
          variants={coinAnimation}
          whileHover="hover"
          whileTap="tap"
          className="nav-button"
        >
          <Link to="/library">Library</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;