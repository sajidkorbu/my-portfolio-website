// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile-image.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="content-area">
      <div className="content-inner">
        <div className="section">
          <p>"i know something about many things but not everything about anything"</p>
        </div>

        <div className="section">
          <p>location: copenhagen, denmark</p>
          <p>email: sajidkorbu@gmail.com</p>
          <p>linkedin: <a href="https://www.linkedin.com/in/sajidkorbu" target="_blank" rel="noopener noreferrer">@sajidkorbu</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;