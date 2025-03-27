// src/pages/WhyHow.js
import React from 'react';
import { motion } from 'framer-motion';
import './WhyHow.css';

const WhyHow = () => {
  return (
    <div className="whyhow-container">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why & How
      </motion.h1>

      <div className="sections-container">
        <motion.div 
          className="section why-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Why I Built This Website</h2>
          {/* Placeholder for pipe */}
          <div className="section-icon-placeholder">🟢</div>
          <p>
            This website serves as a personal showcase for my professional journey, side projects,
            and interests. I wanted to create a fun, interactive space that reflects both my 
            professional expertise and personal creativity.
          </p>
          <p>
            As someone who has spent over a decade helping companies with their digital transformation,
            I believe in practicing what I preach. This website demonstrates my commitment to
            staying current with technology trends while maintaining a sense of playfulness.
          </p>
          <p>
            Additionally, I wanted to create a platform where I could share my AI experiments
            and book recommendations with colleagues, potential employers, and friends.
          </p>
        </motion.div>

        <motion.div 
          className="section how-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>How I Built It</h2>
          {/* Placeholder for pipe */}
          <div className="section-icon-placeholder">🟢</div>
          <div className="tech-stack">
            <h3>Technology Stack</h3>
            <ul>
              <li>
                <strong>Frontend:</strong> React.js with Hooks for the user interface
              </li>
              <li>
                <strong>Animation:</strong> Framer Motion for interactive elements
              </li>
              <li>
                <strong>Styling:</strong> CSS with responsive design
              </li>
              <li>
                <strong>Backend:</strong> Strapi for content management
              </li>
              <li>
                <strong>Hosting:</strong> Netlify for the frontend, Heroku for the backend
              </li>
              <li>
                <strong>Version Control:</strong> Git/GitHub for code management
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="section cost-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>What It Cost</h2>
          {/* Placeholder for pipe */}
          <div className="section-icon-placeholder">🟢</div>
          <h3>Site Expenses</h3>
          
          <div className="cost-item">
            {/* Placeholder for coins */}
            <div className="coins-icon-placeholder">💰</div>
            <p><strong>Domain Name:</strong> $10/year</p>
          </div>
          
          <div className="cost-item">
            <div className="coins-icon-placeholder">💰</div>
            <p><strong>Netlify Hosting:</strong> $0 (Free Tier)</p>
          </div>
          
          <div className="cost-item">
            <div className="coins-icon-placeholder">💰</div>
            <p><strong>Heroku:</strong> $0 (Free Tier)</p>
          </div>
          
          <div className="cost-item">
            <div className="coins-icon-placeholder">💰</div>
            <p><strong>Strapi CMS:</strong> $0 (Open Source)</p>
          </div>
          
          <div className="cost-item">
            <div className="coins-icon-placeholder">💰</div>
            <p><strong>Total Annual Cost:</strong> $10</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyHow;