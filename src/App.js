// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import profileImage from './assets/profile-image-2.jpeg'; // Make sure this path is correct
import Library from './pages/Library'; // Import the new Library component
import Now from './pages/Now'; // Import the Now component
import './App.css';
import About from './pages/About';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page components
const Home = () => (
  <div className="content-area">
    <div className="content-inner">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={profileImage} alt="Sajid Korbu - Anime style portrait" className="profile-image" />
        </div>
        <div className="profile-intro">
          <h1>sajid korbu</h1>
          <div className="intro">
            <p>
              from india, now in copenhagen. live with my wife and two kids. spend my days working with enterprise clients, and evenings tinkering with random ideas.
            </p>
            <p>
              "i know something about many things but not everything about anything"
            </p>
            <p>
              location: copenhagen, denmark
            </p>
            <p>
              email: <a href="mailto:sajidkorbu@gmail.com">sajidkorbu@gmail.com</a>
            </p>
            <p>
              linkedin: <a href="https://www.linkedin.com/in/sajidkorbu" target="_blank" rel="noopener noreferrer">@sajidkorbu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WhyHow = () => (
  <div className="content-area">
    <div className="content-inner">
      <h1>why and how</h1>
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h2>building in the age of ai</h2>
          <p>a non-coder's journey from idea to reality</p>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <div className="section-header">
          <h2>why i built this</h2>
          <div className="section-line"></div>
        </div>
        <div className="why-cards">
          <div className="why-card">
            <div className="card-icon">🤖</div>
            <h3>ai fascination</h3>
            <p>i've been fascinated with AI and have been tinkering with all sorts of apps. but real learning comes from building something yourself.</p>
          </div>
          <div className="why-card">
            <div className="card-icon">🔧</div>
            <h3>learning playground</h3>
            <p>this website is my playground for learning and experimenting. it's where i showcase my small projects and document my journey.</p>
          </div>
          <div className="why-card">
            <div className="card-icon">💭</div>
            <h3>challenge accepted</h3>
            <p>here's the thing - i'm not a coder. the last time i wrote code was 20 years ago in college, and i couldn't even get "hello world" to work properly.</p>
          </div>
        </div>
        <div className="cta-section">
          <p>if you happened to land here, i would love your feedback. message me on <a href="https://www.linkedin.com/in/sajidkorbu" target="_blank" rel="noopener noreferrer">linkedin</a> or <a href="mailto:sajidkorbu@gmail.com">email</a>.</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="tech-stack-section">
        <div className="section-header">
          <h2>tech stack</h2>
          <div className="section-line"></div>
        </div>
        <div className="tech-grid">
          <div className="tech-item">
            <div className="tech-icon">🌐</div>
            <h4>domain</h4>
            <p><a href="https://www.hostinger.com/?gad_source=1" target="_blank" rel="noopener noreferrer">hostinger</a></p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🚀</div>
            <h4>hosting</h4>
            <p><a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">netlify</a></p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">💻</div>
            <h4>code</h4>
            <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">github</a></p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">✨</div>
            <h4>content</h4>
            <p>written by me, refined by AI</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🤖</div>
            <h4>development</h4>
            <p><a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor</a> + <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer">claude code</a></p>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="journey-section">
        <div className="section-header">
          <h2>the building journey</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-number">1</div>
            </div>
            <div className="timeline-content">
              <h3>bolt.new experiment</h3>
              <div className="timeline-tag failed">failed</div>
              <p>started with <a href="https://bolt.new" target="_blank" rel="noopener noreferrer">bolt.new</a> after seeing youtube videos. bought subscription but hit roadblock quickly. consumed 2 million tokens without getting framework ready. output was uninspiring.</p>
              <div className="timeline-lesson">💡 lesson: not all viral tools work for everyone</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-number">2</div>
            </div>
            <div className="timeline-content">
              <h3>claude attempt</h3>
              <div className="timeline-tag paused">paused</div>
              <p>switched to <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude</a> with pro subscription. claude is excellent but kept hitting rate limits. didn't understand what was happening, so took a pause.</p>
              <div className="timeline-lesson">💡 lesson: even great tools have limitations</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-number">3</div>
            </div>
            <div className="timeline-content">
              <h3>grok planning</h3>
              <div className="timeline-tag planning">planning</div>
              <p>used <a href="https://grok.x.ai" target="_blank" rel="noopener noreferrer">grok</a> to create a PRD (product requirements document). it did an excellent job. converted to pdf and started exploring tools to convert pdf to working website.</p>
              <div className="timeline-lesson">💡 lesson: proper planning makes a difference</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-number">4</div>
            </div>
            <div className="timeline-content">
              <h3>claude + manual workflow</h3>
              <div className="timeline-tag complex">complex</div>
              <p>back to <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude</a> with pdf reference. manual workflow: claude → code → local files → localhost → feedback → repeat. set up <a href="https://github.com" target="_blank" rel="noopener noreferrer">github</a> + <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">netlify</a> pipeline. bought domain. rate limits made me impatient.</p>
              <div className="timeline-lesson">💡 lesson: complex workflows slow down progress</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-number">5</div>
            </div>
            <div className="timeline-content">
              <h3>cursor breakthrough</h3>
              <div className="timeline-tag success">success</div>
              <p>discovered <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor</a> and bought subscription. imported claude files. perfect flow: tell cursor what to change → it changes → see in localhost → give feedback → repeat. took 50+ screenshots for precise feedback but flow was beautiful.</p>
              <div className="timeline-lesson">💡 lesson: the right tool makes all the difference</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-number">6</div>
            </div>
            <div className="timeline-content">
              <h3>claude code evolution</h3>
              <div className="timeline-tag current">current</div>
              <p>now using <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer">claude code</a> for the ultimate workflow. claude code → local environment testing → github → netlify deployment. seamless integration with real-time feedback and the power of AI-assisted development.</p>
              <div className="timeline-lesson">💡 lesson: evolution never stops, better tools keep emerging</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Learnings */}
      <div className="learnings-section">
        <div className="section-header">
          <h2>key learnings</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="learnings-grid">
          <div className="learning-card">
            <div className="learning-number">01</div>
            <h3>proof of work matters</h3>
            <p>ignore fluff content. curate high signal content from people who actually build and ship things. there's no replacement for hands-on work.</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-number">02</div>
            <h3>youtube isn't reality</h3>
            <p>those "build in minutes" videos aren't the real story. you need hours to understand platforms and develop prompting instincts. practice is everything.</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-number">03</div>
            <h3>invest in tools</h3>
            <p>useful AI tech costs money, but it's an investment in education. i budget $100/month for tinkering - way cheaper than any degree or certification.</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-number">04</div>
            <h3>be where it happens</h3>
            <p>be on <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>/twitter, not <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</a>. X is where real-time innovation happens. find the smartest people and learn from them.</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-number">05</div>
            <h3>hard work remains</h3>
            <p>AI saves coding time but you still need to curate, refine, fix details. for the library section, i wrote personal recommendations and fixed thumbnails book by book. AI is a tool, not magic.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Update projectsData with all your projects
const projectsData = [
  {
    id: 1,
    title: "compound interest calculator",
    description: "explore the power of compound interest with this interactive calculator. input your principal, interest rate, and time to see how your money grows.",
    tech: "html, css, javascript",
    url: "/compoundinterest"
  },
  {
    id: 2,
    title: "principles webpage",
    description: "a collection of timeless principles and insights for better living. wisdom distilled into actionable thoughts.",
    tech: "html, css, javascript",
    url: "/principles"
  },
  {
    id: 3,
    title: "currency exchange visualizer",
    description: "visualize currency exchange rates and trends. built to understand how different currencies perform against each other.",
    tech: "python, flask",
    url: "/currency"
  },
  {
    id: 4,
    title: "learn rag",
    description: "exploring retrieval-augmented generation through a hands-on playground. upload documents, ask questions, and see how AI combines search with generation to provide accurate answers.",
    tech: "langchain, openai, supabase, lovable",
    url: "https://learnrag.netlify.app/"
  },
  {
    id: 5,
    title: "the art of prompt",
    description: "exploring the craft of prompt engineering and AI interaction. a deep dive into the techniques and strategies for effective AI communication.",
    tech: "AI, prompt engineering, replit",
    url: "https://theartofprompt.replit.app/"
  },
  {
    id: 6,
    title: "visualize your life",
    description: "a simple tool to help you reflect on life during stressful times. see your life in weeks, and gain perspective.",
    tech: "javascript, netlify",
    url: "https://visualizelife.netlify.app"
  },
  {
    id: 7,
    title: "unagi - friends universe",
    description: "complete timeline of FRIENDS characters' life events with interactive filters, statistics, and behind-the-scenes trivia. could this BE any more nostalgic?",
    tech: "javascript, github pages, data visualization",
    url: "https://sajidkorbu.github.io/Unagi/"
  },
  {
    id: 8,
    title: "90s 2d game",
    description: "my attempt at building a simple 2d game. reminds me of the games we used to play in the 90s.",
    tech: "javascript, netlify",
    url: "https://90s2dgame.netlify.app/"
  },
  {
    id: 9,
    title: "linkedin & x post analyzer",
    description: "this is not what i expected but taught me to work with API keys. a chrome extension that analyzes posts using AI-powered readability detection.",
    tech: "javascript, chrome extension, AI",
    url: "https://github.com/sajidkorbu/LinkedinXChromeExtenstion.git"
  }
];

const TinyExperiments = () => (
  <div className="content-area">
    <div className="content-inner">
      <h1>tiny experiments</h1>
      <div>
        <p>here are some of my AI experiments and projects. each represents an attempt at trying something fun, some work some don't.</p>
        <p>but i learn.</p>
      </div>
      
      <div className="experiments-grid">
        {projectsData.map(project => (
          <a 
            key={project.id} 
            href={project.url} 
            target={project.url.startsWith('http') ? "_blank" : "_self"}
            rel={project.url.startsWith('http') ? "noopener noreferrer" : undefined}
            className="experiment-card"
          >
            <div className="experiment-content">
              <h2>{project.title}</h2>
              <p className="experiment-description">{project.description}</p>
              <p className="tech">tech: {project.tech}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <div className="wave-decoration"></div>
        <nav className="sidebar">
  <div className="nav-links">
    <NavLink to="/now" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>now</NavLink>
    <NavLink to="/home" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>home</NavLink>
    <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} end>why and how</NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>about</NavLink>
    <NavLink to="/tiny-experiments" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>tiny experiments</NavLink>
    <NavLink to="/library" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>library</NavLink>
  </div>
</nav>
        <main className="main-content">
        <Routes>
  		<Route path="/" element={<WhyHow />} />
  		<Route path="/home" element={<Home />} />
  		<Route path="/why-how" element={<WhyHow />} />
  		<Route path="/about" element={<About />} />
  		<Route path="/tiny-experiments" element={<TinyExperiments />} />
  		<Route path="/library" element={<Library />} />
  		<Route path="/now" element={<Now />} />
	</Routes>
        <div className="watermark">
          thought by sajid, made by AI / march 2025
        </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
