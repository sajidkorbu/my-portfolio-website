// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import profileImage from './assets/profile-image.jpg'; // Make sure this path is correct
import Library from './pages/Library'; // Import the new Library component
import './App.css';

// Page components
const Home = () => (
  <div className="content-area">
    <div className="content-inner">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={profileImage} alt="Sajid Korbu" className="profile-image" />
        </div>
        <div className="profile-intro">
          <h1>Sajid Korbu</h1>
          <h2>Growth and Transformation Leader</h2>
        </div>
      </div>
      
      <div className="intro">
        <p>
          I come with over 18 years of work experience in IT industry,
          with 10+ years in Europe. I have strong experience in Sales,
          Account and Relationship Management, and CXO connects.
        </p>
        <p>
          For the last 10+ years, I have worked with the world's leading 
          Travel and Transportation companies, helping them in their Digital
          Transformation journeys.
        </p>
      </div>
      
      <div className="contact-info">
        <p><strong>Location:</strong> Copenhagen, Denmark</p>
        <p><strong>Email:</strong> <a href="mailto:sajidkorbu@gmail.com">sajidkorbu@gmail.com</a></p>
        <p><strong>Phone:</strong> +45 21 33 39 03</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sajidkorbu" target="_blank" rel="noopener noreferrer">@sajidkorbu</a></p>
      </div>
    </div>
  </div>
);

const WhyHow = () => (
  <div className="content-area">
    <div className="content-inner">
      <h1>why and how</h1>
      <div className="section">
        <h2>Why I Built This Website</h2>
        <p>This website serves as a personal showcase for my professional journey, side projects, and interests. I wanted to create a simple, clean space that reflects my professional expertise and personal interests.</p>
      </div>
      
      <div className="section">
        <h2>How I Built It</h2>
        <p><strong>Technology:</strong> React.js, CSS, Strapi for content management</p>
        <p><strong>Hosting:</strong> Netlify (frontend), Heroku (backend)</p>
        <p><strong>Cost:</strong> Domain $10/year, Hosting $0 (free tier)</p>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="content-area">
    <div className="content-inner">
      <h1>about</h1>
      
      <div className="profile-section">
        <h2>Professional Experience</h2>
        <div className="job">
          <h3>Client Partner, TCS Denmark</h3>
          <p className="period">Jan 2021 - Present</p>
          <ul>
            <li>Responsible for a large public railway account in Denmark</li>
            <li>Account size 150+ FTEs, EUR 14Mn+ annual revenue</li>
            <li>CXO relationship management, consulting on growth and transformations</li>
            <li>Led large transformation programs in Digital, Cloud, Security, and SAP</li>
          </ul>
        </div>
        
        <div className="job">
          <h3>Client Partner, TCS Switzerland</h3>
          <p className="period">Apr 2017 - Dec 2020</p>
          <ul>
            <li>Responsible for two accounts, a large ground handler and an airline caterer</li>
            <li>Account size 150+ FTEs, EUR 12Mn+ annual revenue</li>
            <li>Led large transformation programs in Infra, Workplace, Security and Digital</li>
          </ul>
        </div>
        
        <div className="job">
          <h3>Engagement Manager, TCS Sweden</h3>
          <p className="period">Sept 2014 - Apr 2017</p>
          <ul>
            <li>Account size 350+ FTEs, EUR 32Mn+ annual revenue</li>
            <li>Led contract renewals for large programs worth over EUR 35Mn</li>
          </ul>
        </div>
      </div>
      
      <div className="profile-section">
        <h2>Education</h2>
        <div className="education">
          <h3>MBA in Marketing and Strategy</h3>
          <p>Great Lakes Institute of Management, 2010-2011</p>
        </div>
        <div className="education">
          <h3>Bachelors in Electronics Engineering</h3>
          <p>Walchand College of Engineering, 2001-2005</p>
        </div>
      </div>
      
      <div className="profile-section">
        <h2>Skills & Interests</h2>
        <p><strong>Skills:</strong> Business Communication, Creativity/Innovation, Analytical Thinking, People Management</p>
        <p><strong>Interests:</strong> Reading (Tech trends, psychology), Running (training for Lidingolöppet 15K)</p>
      </div>
    </div>
  </div>
);

// Sample data for projects
const projectsData = [
  {
    id: 1,
    title: "AI Image Generator",
    description: "A machine learning model that generates images based on text descriptions.",
    tech: "Python, TensorFlow, React"
  },
  {
    id: 2,
    title: "Sentiment Analysis Tool",
    description: "Analyzes customer feedback to determine sentiment and key insights.",
    tech: "Python, NLTK, Flask"
  },
  {
    id: 3,
    title: "Predictive Maintenance Model",
    description: "Predicts equipment failures before they occur to reduce downtime.",
    tech: "Python, Scikit-learn, Pandas"
  }
];

const TinyExperiments = () => (
  <div className="content-area">
    <div className="content-inner">
      <h1>tiny experiments</h1>
      <p>Here are some of my AI experiments and projects. Each represents a different area of exploration in machine learning and artificial intelligence.</p>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-tech"><strong>Tech:</strong> {project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="wave-decoration"></div>
        <nav className="sidebar">
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} end>home</NavLink>
            <NavLink to="/why-how" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>why and how</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>about</NavLink>
            <NavLink to="/tiny-experiments" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>tiny experiments</NavLink>
            <NavLink to="/library" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>library</NavLink>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-how" element={<WhyHow />} />
            <Route path="/about" element={<About />} />
            <Route path="/tiny-experiments" element={<TinyExperiments />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;