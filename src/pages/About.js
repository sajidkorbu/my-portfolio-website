const About = () => {
  return (
    <div className="content-area">
      <div className="content-inner">
        <div className="about-header">
          <h1>about</h1>
          <div className="consultant-badge">
            <div className="badge-icon">🤖</div>
            <span>AI transformation consultant</span>
          </div>
        </div>
        
        {/* Professional Summary - Hero Style */}
        <div className="summary-hero">
          <div className="summary-content">
            <h2>professional summary</h2>
            <p>over 18 years of experience in IT industry with 10+ years in europe. specialized in sales, account management, and CXO relationships. deep expertise in digital transformation for travel and transportation companies. proven ability to translate AI capabilities into measurable business value, helping organizations navigate the intersection of human potential and artificial intelligence. highly motivated with a desire for personal impact, adaptable, quick learner and passionate about solving business problems.</p>
          </div>
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">years experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">€50M+</div>
              <div className="stat-label">portfolio managed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">300+</div>
              <div className="stat-label">professionals led</div>
            </div>
          </div>
        </div>

        {/* Professional Journey - Timeline Style */}
        <div className="journey-container">
          <div className="section-header">
            <h2>professional journey</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="career-timeline">
            <div className="career-item">
              <div className="career-marker">
                <div className="marker-dot current"></div>
                <div className="marker-line"></div>
              </div>
              <div className="career-content">
                <h3>client partner, <a href="https://www.tcs.com" target="_blank" rel="noopener noreferrer">TCS</a> denmark</h3>
                <p className="period">2021 - present</p>
                <ul>
                  <li>responsible for a large public railway account in denmark</li>
                  <li>manage portfolio of EUR 14Mn+ with 150+ FTEs</li>
                  <li>drive digital transformation programs across cloud, security, and SAP</li>
                  <li>lead CXO relationship management and growth consulting</li>
                  <li>work on large deals across europe</li>
                </ul>
              </div>
            </div>
            
            <div className="career-item">
              <div className="career-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="career-content">
                <h3>client partner, <a href="https://www.tcs.com" target="_blank" rel="noopener noreferrer">TCS</a> switzerland</h3>
                <p className="period">2017 - 2020</p>
                <ul>
                  <li>managed two strategic accounts in aviation services sector</li>
                  <li>delivered EUR 12Mn+ annual revenue with 150+ FTEs</li>
                  <li>led transformation programs in infrastructure, workplace solutions, and security</li>
                  <li>drove CXO relationships and transformation consulting</li>
                  <li>handled additional responsibility for european deals</li>
                </ul>
              </div>
            </div>
            
            <div className="career-item">
              <div className="career-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="career-content">
                <h3>engagement manager, <a href="https://www.tcs.com" target="_blank" rel="noopener noreferrer">TCS</a> sweden</h3>
                <p className="period">2014 - 2017</p>
                <ul>
                  <li>managed delivery excellence for large-scale programs</li>
                  <li>led contract renewals worth EUR 35Mn+</li>
                  <li>managed team of 350+ professionals</li>
                  <li>handled relationships with 3 major sub-contractors</li>
                </ul>
              </div>
            </div>

            <div className="career-item">
              <div className="career-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="career-content">
                <h3>regional manager, <a href="https://www.tcs.com" target="_blank" rel="noopener noreferrer">TCS</a> india</h3>
                <p className="period">2011 - 2014</p>
                <ul>
                  <li>headed western india for TCS's education product business</li>
                  <li>managed $400K annual business with 15-member team</li>
                  <li>handled 10+ clients across 4 states</li>
                </ul>
              </div>
            </div>

            <div className="career-item">
              <div className="career-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="career-content">
                <h3>team lead, <a href="https://www.infosys.com" target="_blank" rel="noopener noreferrer">infosys</a> technologies</h3>
                <p className="period">2005 - 2010</p>
                <ul>
                  <li>led network operations centre for british telecom</li>
                  <li>managed 20-member team working with ISPs across SE asia</li>
                  <li>ensured 24x7 service assurance for global MPLS network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership & Recognition - Card Style */}
        <div className="recognition-section">
          <div className="section-header">
            <h2>leadership & recognition</h2>
            <div className="section-line"></div>
          </div>
          <div className="recognition-grid">
            <div className="recognition-card">
              <div className="recognition-icon">🎓</div>
              <h3>growth & transformational leadership program</h3>
              <p className="period">2022</p>
              <p>exclusive program by <a href="https://www.tcs.com" target="_blank" rel="noopener noreferrer">TCS</a> and fisher college of business (ohio state university)</p>
            </div>
            
            <div className="recognition-card">
              <div className="recognition-icon">🌟</div>
              <h3><a href="https://www.tcs.com" target="_blank" rel="noopener noreferrer">TCS</a> ambassador corps</h3>
              <p className="period">2016</p>
              <p>selected for elite global sales development program for top performers</p>
            </div>
          </div>
        </div>

        {/* Investor Section - Highlight Box */}
        <div className="investor-highlight">
          <div className="highlight-icon">💰</div>
          <div className="highlight-content">
            <h2>investor</h2>
            <p>lately, my interest in startups and VC led me to amazing conversations with many founders, mostly in the indian startup space. i ended up angel investing in one amazing startup called <a href="https://www.socly.io" target="_blank" rel="noopener noreferrer">socly.io</a>. i hope to continue on this journey.</p>
          </div>
        </div>

        {/* Education & Skills Grid */}
        <div className="education-skills-grid">
          <div className="education-section">
            <div className="section-header">
              <h2>education</h2>
              <div className="section-line"></div>
            </div>
            <div className="education-items">
              <div className="education-card">
                <div className="education-icon">📚</div>
                <h3>MBA in marketing and strategy</h3>
                <p><a href="https://www.greatlakes.edu.in/" target="_blank" rel="noopener noreferrer">great lakes institute of management</a></p>
                <p className="period">2010 - 2011</p>
              </div>
              <div className="education-card">
                <div className="education-icon">⚡</div>
                <h3>B.E. in electronics engineering</h3>
                <p><a href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">walchand college of engineering</a></p>
                <p className="period">2001 - 2005</p>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <div className="section-header">
              <h2>core competencies</h2>
              <div className="section-line"></div>
            </div>
            <div className="skills-grid">
              <div className="skill-tag">digital transformation</div>
              <div className="skill-tag">strategic account management</div>
              <div className="skill-tag">business development</div>
              <div className="skill-tag">stakeholder management</div>
              <div className="skill-tag">program management</div>
              <div className="skill-tag">team leadership</div>
              <div className="skill-tag">business communication</div>
              <div className="skill-tag">analytical thinking</div>
            </div>
          </div>
        </div>

        {/* Interests & Learning - Modern Card */}
        <div className="learning-section">
          <div className="section-header">
            <h2>interests & continuous learning</h2>
            <div className="section-line"></div>
          </div>
          <div className="learning-content">
            <div className="learning-item">
              <div className="learning-icon">🔬</div>
              <p>always exploring new frontiers - learned crypto and invested early, maintain subscriptions to all major AI chat applications and use them rigorously, currently testing cutting-edge tools like <a href="https://www.diabrowser.com/" target="_blank" rel="noopener noreferrer">dia browser</a>. staying ahead of the curve is not just curiosity, it's necessity.</p>
            </div>
            
            <div className="learning-item">
              <div className="learning-icon">🧠</div>
              <p>currently exploring technology trends and human psychology (reading "influence" by robert cialdini).</p>
            </div>
            
            <div className="learning-item">
              <div className="learning-icon">🏃</div>
              <p>passionate about world economics and running - completed my second <a href="https://www.lidingoloppet.se/en/" target="_blank" rel="noopener noreferrer">lidingolöppet</a> 15K and now training for my third attempt.</p>
            </div>
            
            <div className="learning-item">
              <div className="learning-icon">📖</div>
              <p>completed <a href="https://www.maven.com/" target="_blank" rel="noopener noreferrer">maven AI for product managers</a> course. currently enrolled in multiple courses, not sure if i will finish them, but still i will end up challenging myself - <a href="https://cs50.harvard.edu/" target="_blank" rel="noopener noreferrer">harvard's CS50</a>, <a href="https://www.boot.dev/" target="_blank" rel="noopener noreferrer">boot.dev</a> python.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 