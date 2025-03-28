const Library = () => {
  // ... other states and functions ...

  return (
    <div className="content-area">
      <div className="content-inner">
        <h1 className="page-title">library</h1>
        
        <div className="library-container">
          <div className="library-tabs">
            <button className={activeTab === 'books' ? 'active' : ''} onClick={() => handleTabChange('books')}>
              books
            </button>
            <button className={activeTab === 'extras' ? 'active' : ''} onClick={() => handleTabChange('extras')}>
              more
            </button>
          </div>

          {activeTab === 'extras' && (
            <div className="extras-container">
              <div className="library-intro">
                <h2 className="intro-heading">beyond books</h2>
                <p>
                  a collection of essays, articles, and threads that have shaped my thinking and perspective.
                </p>
              </div>
              
              <div className="reading-grid">
                {/* First row of cards */}
                <a href="https://www.highagency.com" target="_blank" rel="noopener noreferrer" className="reading-card">
                  <div className="reading-content">
                    <h3>high agency</h3>
                    <p className="reading-author">by george mack</p>
                    <p className="reading-excerpt">
                      "the ability to think clearly, bias to action, and disagreeability—rarely found together, yet essential for solving impossible problems."
                    </p>
                    <div className="reading-metadata">
                      <span className="reading-type">essay</span>
                      <span className="reading-time">30 min read</span>
                    </div>
                  </div>
                </a>

                <a href="https://www.mashcap.com/post/think-wait-fast" target="_blank" rel="noopener noreferrer" className="reading-card">
                  {/* ... existing i can think card ... */}
                </a>

                <a href="https://theamericanscholar.org/solitude-and-leadership/" target="_blank" rel="noopener noreferrer" className="reading-card">
                  {/* ... existing solitude and leadership card ... */}
                </a>

                {/* Second row of cards */}
                <a href="https://fs.blog/mental-models/" target="_blank" rel="noopener noreferrer" className="reading-card">
                  {/* ... existing mental models card ... */}
                </a>

                <a href="https://en.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_13" target="_blank" rel="noopener noreferrer" className="reading-card">
                  {/* ... existing on groundless fears card ... */}
                </a>

                <a href="https://modelthinkers.com/mental-model/surface-area-of-luck" target="_blank" rel="noopener noreferrer" className="reading-card">
                  <div className="reading-content">
                    <h3>surface area of luck</h3>
                    <p className="reading-author">by modelthinkers</p>
                    <p className="reading-excerpt">
                      "luck = (passionate) doing x (effective) telling — a framework for increasing your chances of success."
                    </p>
                    <div className="reading-metadata">
                      <span className="reading-type">guide</span>
                      <span className="reading-time">15 min read</span>
                    </div>
                  </div>
                </a>

                <a href="https://www.benkuhn.net/outliers/" target="_blank" rel="noopener noreferrer" className="reading-card">
                  <div className="reading-content">
                    <h3>searching for outliers</h3>
                    <p className="reading-author">by ben kuhn</p>
                    <p className="reading-excerpt">
                      "most important things in life are heavy-tailed - the key is knowing how to search for the outliers."
                    </p>
                    <div className="reading-metadata">
                      <span className="reading-type">essay</span>
                      <span className="reading-time">20 min read</span>
                    </div>
                  </div>
                </a>

                <a href="https://substack.com/@gurwinder/p-153989710" target="_blank" rel="noopener noreferrer" className="reading-card">
                  <div className="reading-content">
                    <h3>the curse of ambition</h3>
                    <p className="reading-author">by gurwinder</p>
                    <p className="reading-excerpt">
                      "the curse of ambition is that each achievement only sets the baseline for the next, in an endless cycle of dissatisfaction."
                    </p>
                    <div className="reading-metadata">
                      <span className="reading-type">essay</span>
                      <span className="reading-time">12 min read</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library; 