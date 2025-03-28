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
              <p className="experiment-description">
                a simple tool to help you reflect on life during stressful times. see your life in weeks, and gain perspective.
              </p>
              <div className="experiment-tech">
                <span className="tech-tag">javascript</span>
                <span className="tech-tag">netlify</span>
              </div>
              <div className="experiment-links">
                <a href="https://visualizelife.netlify.app" target="_blank" rel="noopener noreferrer">
                  view project
                </a>
              </div>
            </div>
          </div>

          <div className="experiment-card">
            <div className="experiment-content">
              <h2>your next project</h2>
              <p className="experiment-description">
                brief description of what this project does and why you built it
              </p>
              <div className="experiment-tech">
                <span className="tech-tag">tech used</span>
                <span className="tech-tag">another tech</span>
              </div>
              <div className="experiment-links">
                <a href="project-url" target="_blank" rel="noopener noreferrer">
                  view project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinyExperiments; 