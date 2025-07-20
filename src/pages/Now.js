import React from 'react';
import './Now.css';

const Now = () => (
  <div className="content-area">
    <div className="content-inner">
      <div className="now-header">
        <h1>now</h1>
        <p className="last-updated">last updated: july 20, 2025</p>
      </div>
      
      <div className="now-content">
        <div className="now-section">
          <h2>🎧 currently listening to</h2>
          <div className="listening-subsection">
            <h3>podcasts (spotify)</h3>
            <ul>
              <li>DHH with Lex Friedman - tech philosophy and entrepreneurship</li>
              <li>Acquired new podcast on Google - deep dive into Google's history</li>
              <li>Dwarkesh with Stephen Kotkin - highly recommended, geopolitics and history</li>
            </ul>
          </div>
          
          <div className="listening-subsection">
            <h3>audiobooks (audible)</h3>
            <ul>
              <li>"Unstoppable Brain" by Kyra Robinet - neuroscience and performance</li>
            </ul>
          </div>
        </div>

        <div className="now-section">
          <h2>📖 currently reading</h2>
          <ul>
            <li>"Animal Farm" by George Orwell - timeless political allegory</li>
            <li>"You Can Negotiate Anything" by Herb Cohen - mastering negotiation skills</li>
          </ul>
        </div>

        <div className="now-section">
          <h2>🌍 life happenings</h2>
          <p>
            learning AI by doing hands-on work, building small projects and experimenting with new tools. 
            currently enjoying exploring dia browser and claude code for development workflows.
          </p>
          <p>
            following experts on substack as my main source of learning - finding it much better than 
            traditional tech blogs for cutting-edge insights.
          </p>
          <p>
            location: copenhagen, denmark
          </p>
        </div>
      </div>

      <div className="now-footer">
        <p>
          this is my <a href="https://sive.rs/now" target="_blank" rel="noopener noreferrer">now page</a> - 
          what i'd tell a friend i hadn't seen in a year.
        </p>
        <p>
          inspired by <a href="https://sive.rs/now" target="_blank" rel="noopener noreferrer">derek sivers</a>.
        </p>
      </div>
    </div>
  </div>
);

export default Now;