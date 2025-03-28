const TinyExperiments = () => {
  return (
    <div className="content-area">
      <div className="content-inner">
        <h1>tiny experiments</h1>
        
        <p>here are some of my AI experiments and projects. each represents an attempt at trying something fun, some work some don't. but i learn.</p>

        <div className="experiments-grid">
          <div className="experiment-card">
            <div className="experiment-content">
              <h2>visualize your life</h2>
              <p className="experiment-description">whenever you feel stressed, take a moment to reflect on how far you've come and how much more lies ahead. relax and appreciate the journey.</p>
              <div className="experiment-tech">
                <span className="tech-tag">javascript</span>
                <span className="tech-tag">netlify</span>
              </div>
              <div className="experiment-links">
                <a href="https://visualizelife.netlify.app" target="_blank" rel="noopener noreferrer">view project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinyExperiments; 