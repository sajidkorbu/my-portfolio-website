// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile-image.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="content-area">
      <div className="content-inner">
        <div className="centered-profile">
          <div className="profile-image-container">
            <img src={profileImage} alt="Sajid Korbu" className="profile-image" />
          </div>
          <h1>sajid korbu</h1>
          <h2>curious learner, father of two</h2>
        </div>
        
        <div className="intro">
          <p>
            i explore the intersections of technology, business, and human experience. with over 18 years in IT 
            and a decade in europe, i've helped companies navigate their digital transformation journeys while 
            constantly learning and evolving myself.
          </p>
          <p>
            when i'm not immersed in work, you'll find me reading widely across disciplines, training for my 
            next running event, or spending time with my children discovering the world through their eyes. 
            i believe in continuous growth through curiosity and meaningful connections.
          </p>
        </div>
        
        <div className="contact-info">
          <p><strong>location:</strong> copenhagen, denmark</p>
          <p><strong>email:</strong> <a href="mailto:sajidkorbu@gmail.com">sajidkorbu@gmail.com</a></p>
          <p><strong>linkedin:</strong> <a href="https://www.linkedin.com/in/sajidkorbu" target="_blank" rel="noopener noreferrer">@sajidkorbu</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;