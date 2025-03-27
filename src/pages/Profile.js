// src/pages/Profile.js
import React from 'react';
import { motion } from 'framer-motion';
// Remove image imports that are causing errors
// import marioRunning from '../assets/mario-running.gif';
// import starIcon from '../assets/star-icon.png';
// import bookIcon from '../assets/book-icon.png';
// import runIcon from '../assets/run-icon.png';
import './Profile.css';

const Profile = () => {
  const jobs = [
    {
      title: 'Client Partner',
      company: 'TCS Denmark',
      period: 'Jan 2021 - Present',
      description: [
        'Responsible for a large public railway account in Denmark',
        'Account size 150+ FTEs, EUR 14Mn+ annual revenue',
        'CXO relationship management, consulting on growth and transformations',
        'Led large transformation programs in Digital, Cloud, Security, and SAP',
        'Additional responsibility of working on large deals across Europe'
      ]
    },
    {
      title: 'Client Partner',
      company: 'TCS Switzerland',
      period: 'Apr 2017 - Dec 2020',
      description: [
        'Responsible for two accounts, a large ground handler and an airline caterer',
        'Account size 150+ FTEs, EUR 12Mn+ annual revenue',
        'CXO relationship management, consulting on growth and transformations',
        'Led large transformation programs in Infra, Workplace, Security and Digital',
        'Additional responsibility of working on large deals across Europe'
      ]
    },
    {
      title: 'Engagement Manager',
      company: 'TCS Sweden',
      period: 'Sept 2014 - Apr 2017',
      description: [
        'Reporting into Client Partner',
        'Account size 350+ FTEs, EUR 32Mn+ annual revenue',
        'Led contract renewals for large programs worth over EUR 35Mn',
        'Responsible for relationship with 3 large sub-contractors'
      ]
    },
    {
      title: 'Regional Manager',
      company: 'TCS India',
      period: 'Sept 2011 - Aug 2014',
      description: [
        'Regional Head (Western India) for TCS\'s product business for the Education industry',
        'Annual business of $400K, led a team of 15 associates',
        'Managed 10+ clients across 4 states in India'
      ]
    },
    {
      title: 'Marketing Manager',
      company: 'ICICI Bank',
      period: 'Jun 2011 - Sept 2011',
      description: [
        'Sales and Marketing, focused on automobile industry',
        'Worked on increasing Current and Saving account business for ICICI'
      ]
    },
    {
      title: 'Team Lead',
      company: 'Infosys Technologies',
      period: 'Oct 2005 - Apr 2010',
      description: [
        'Team lead for Network Operations Centre managed by Infosys for British Telecom',
        'Led a 20 member team, worked with ISPs across SE Asia',
        'Responsible for ensuring 24x7 Service Assurance of global MPLS network'
      ]
    }
  ];

  const education = [
    {
      degree: 'MBA in Marketing and Strategy',
      institution: 'Great Lakes Institute of Management',
      period: 'Apr 2010 - Mar 2011',
      description: 'Learnt the ropes of management and developed interest in Sales and Entrepreneurship'
    },
    {
      degree: 'Bachelors in Electronics Engineering',
      institution: 'Walchand College of Engineering',
      period: 'Sept 2001 - Apr 2005',
      description: 'First division, Led 2 Student clubs'
    }
  ];

  const skills = [
    'Business Communication',
    'Creativity/Innovation',
    'Analytical Thinking',
    'Focused Listening',
    'People Management',
    'Taking Initiatives'
  ];

  const interests = [
    {
      name: 'Reading & Learning',
      description: 'Technology trends, human psychology (currently reading Influence by Robert Cialdini), world economics'
    },
    {
      name: 'Running',
      description: 'I am preparing for my second Lidingolöppet 15K'
    }
  ];

  return (
    <div className="profile-container">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Professional Journey
      </motion.h1>
      
      <div className="career-timeline">
        {jobs.map((job, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p className="period">{job.period}</p>
              <ul>
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {index < jobs.length - 1 && (
              <div className="connector">
                {/* Replace image with text */}
                <div className="mario-placeholder">→</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="education-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p className="period">{edu.period}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </motion.div>
      
      <motion.div 
        className="skills-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
            >
              {/* Replace star icon with ★ symbol */}
              <div className="star-icon-placeholder">★</div>
              <p>{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="interests-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h2>Interests</h2>
        <div className="interests-container">
          {interests.map((interest, index) => (
            <div key={index} className="interest-item">
              {/* Use text instead of icons */}
              <div className="interest-icon-placeholder">
                {interest.name === 'Reading & Learning' ? '📚' : '🏃'}
              </div>
              <h3>{interest.name}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;