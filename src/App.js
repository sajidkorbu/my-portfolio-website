// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import profileImage from './assets/profile-image-2.jpeg'; // Make sure this path is correct
import Library from './pages/Library'; // Import the new Library component
import './App.css';
import About from './pages/About';

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
      <div className="section">
        <h2>why i built this website</h2>
        <p>
          i've been fascinated with AI and have been tinkering with all sorts of apps. but real learning comes from building something yourself. so i thought, why not create something of my own?
        </p>
        <p>
          here's the thing - i'm not a coder. the last time i wrote code was 20 years ago in college, and i couldn't even get "hello world" to work properly. but that's what makes this interesting.
        </p>
        <p>
          this website is my playground for learning and experimenting. it's where i showcase my small projects and document my journey. there might not be anything groundbreaking here, but why does that matter? it's about challenging myself and making it public.
        </p>
        <p>
          if you happened to land here, i would love your feedback. message me on <a href="https://www.linkedin.com/in/sajidkorbu" target="_blank" rel="noopener noreferrer">linkedin</a> or <a href="mailto:sajidkorbu@gmail.com">email</a>.
        </p>
      </div>
      
      <div className="section">
        <h2>how i built it</h2>
        <p>domain name - bought from <a href="https://www.hostinger.com/?gad_source=1" target="_blank" rel="noopener noreferrer">hostinger</a></p>
        <p>webhosting - <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">netlify</a></p>
        <p>code repository - <a href="https://github.com" target="_blank" rel="noopener noreferrer">github</a></p>
        <p>content - i wrote it and then used multiple AI tools to refine it</p>
        
        <p>actual coding - well this is a long long story.</p>
        
        <p>attempt 1: i started off with <a href="https://bolt.new" target="_blank" rel="noopener noreferrer">bolt.new</a> because i had seen many videos of people building cool things on <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">youtube</a>. i bought the base subscription and started creating.. but soon i hit a roadblock. i was consuming tokens at a rapid speed and the output was uninspiring. the base model gives 10 million tokens and i spent 2 million without even getting the framework ready. i realized that it was a bad idea to continue so i shut it off. of course i have tokens left there and i will use it for other mini projects.</p>
        
        <p>attempt 2: i have a pro subscription to <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude</a> and i started creating a project. i have to say that claude is excellent.. but things got complicated when i kept hitting rate limit. i did not understand what was happening.. so i took a pause.</p>
        
        <p>attempt 3: i went to <a href="https://grok.x.ai" target="_blank" rel="noopener noreferrer">grok</a> this time and dumped my ideas. i asked it to create a PRD.. this is something fancy i have learned recently. it did an excellent job. i copied that output in <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">google drive</a> document and then converted to pdf. now i was wondering which tool to use to convert the pdf into working website. i went to youtube and started exploring.</p>
        
        <p>attempt 4: i came back to <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude</a> because i liked how it was responding. i added this pdf to its reference. it started working its magic. the only issue was that because i have not done this before i had to take a huge manual route. so claude gave me the code, which then i copied in files on my laptop in a folder. then it taught me to create some script so i could essentially see the output in those files in my localhost (too many things happening, this was way harder than i thought earlier). now i could do this: claude gave me code, i manually copied in files, checked localhost for output, gave feedback to claude and cycle repeated. this time i moved few steps forward. i bought the domain because i was serious about this. i again went to youtube for help with domains etc and found <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">netlify</a> useful. i setup another flow this time with <a href="https://github.com" target="_blank" rel="noopener noreferrer">github</a>. so now i could do the following: claude gave the code, i added modified code manually to my local files. then i pushed updates to github, from there netlify picked up and showed me the results on the website. this was way complicated but working setup but... it wasn't going to be this easy. claude kept hitting rate limit almost after every 3-4 prompts and then i had to wait 2-3 hours to restart. this was not helping me. i was becoming impatient. i realized that this is not the ideal way to do things.</p>
        
        <p>attempt 5: i went back to <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">youtube</a> to do some more research on how people are doing things. i could not find the answer i was looking for.. maybe because the right way was indeed the hard way and i wanted an easier solution. finally i thought maybe i can try <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor</a> because i had heard so much about it. so i bought a base subscription to cursor and started there. i imported all local files that i created with <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude</a> into cursor and started working again. this time i did not move anything to <a href="https://github.com" target="_blank" rel="noopener noreferrer">github</a> or <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">netlify</a>. i wanted to ensure that my output is as expected and tested everything in localhost setup. but the flow was perfect. i told cursor what i wanted to change and it did those changes and i could see in my local setup. i gave enormous feedback and it did its best. though this was not as easy as we see on youtube. i had to take baby steps and take probably 50+ screenshots to tell cursor exactly where i wanted those changes. i went page by page and line by line to provide feedback on changes expected. it took a few hours to make substantial progress. but what impressed me is that now the flow was beautiful. everything was in real time and without knowing any code all i had to do was explain in a prompt what i wanted and cursor tried to execute it. absolutely beautiful.</p>
      </div>
      
      <div className="section">
        <h2>some learnings</h2>
        <p>1. most valuable thing is proof of work. do not consume any content from people giving fluff about AI and other new tech. there is no replacement for proof of work. ignore anyone giving fluff in fancy settings but hasn't done any hands-on work. curate your content with high signal and ignore low signal content.</p>

        <p>2. whatever you see on <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">youtube</a> about people building websites and projects in few minutes is not exactly the real story. you need to spend many hours to understand how these platforms operate to get your right flow and further you need to build an instinct for prompting. AI can do a lot of things but you need to steer the AI output through your prompts. this is way harder than it looks like and the only way to really learn is to practice a lot and also make something in public so people can give feedback.</p>

        <p>3. you need to spend money. most useful tech in the world of AI comes at some cost. though it is not a lot of cost. i have thought about it this way - for me this is like MBA part 2. this is not spending but investing in my education and upskilling. so i literally keep aside a budget of 100$ each month, which seems too low if you compare it with some fancy degree or certification cost, and i spend that on tinkering with these ideas.</p>

        <p>4. be on <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>/twitter. do not waste time on <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</a>. it is a slow moving platform with a lot of fluff. X is where things happen in real time and you can find the smartest people. forget what musk is doing because that will not help your personal life. if you want to grow, be on X and see what the smartest crowd is up to and you will know where to invest time and energy in.</p>

        <p>5. you cannot escape the hard work. take for example the library section. while the first build was superfast because i just told AI the list of books i wanted there and it created the whole bookshelf, i had to invest a few more hours in curating and refining. for each book, i have written my personal recommendation, here AI's role was to spell check my writing and nothing else. some books had wrong tags and i had to correct them book by book. most books could not get the thumbnails right so that too needed fixing one book at a time. and this experience goes for each section. while i did not spend time in coding and saved a few hundred hours there, i did spend many hours curating, refining, fixing minor details. and that is in general what AI will change about everything. AI will become a tool to curate, refine, fix things but it will still be a tool, a mighty one though and the best one yet in human hands (or brains).</p>
      </div>
    </div>
  </div>
);

// Update projectsData with all your projects
const projectsData = [
  {
    id: 1,
    title: "visualize your life",
    description: "a simple tool to help you reflect on life during stressful times. see your life in weeks, and gain perspective.",
    tech: "javascript, netlify",
    url: "https://visualizelife.netlify.app"
  },
  {
    id: 2,
    title: "linkedin & x post analyzer",
    description: "this is not what i expected but taught me to work with API keys. a chrome extension that analyzes posts using AI-powered readability detection.",
    tech: "javascript, chrome extension, AI",
    url: "https://github.com/sajidkorbu/LinkedinXChromeExtenstion.git"
  },
  {
    id: 3,
    title: "90s 2d game",
    description: "my attempt at building a simple 2d game. reminds me of the games we used to play in the 90s.",
    tech: "javascript, netlify",
    url: "https://90s2dgame.netlify.app/"
  },
  {
    id: 4,
    title: "the art of prompt",
    description: "exploring the craft of prompt engineering and AI interaction. a deep dive into the techniques and strategies for effective AI communication.",
    tech: "AI, prompt engineering, replit",
    url: "https://theartofprompt.replit.app/"
  },
  {
    id: 5,
    title: "unagi - friends universe",
    description: "complete timeline of FRIENDS characters' life events with interactive filters, statistics, and behind-the-scenes trivia. could this BE any more nostalgic?",
    tech: "javascript, github pages, data visualization",
    url: "https://sajidkorbu.github.io/Unagi/"
  },
  {
    id: 6,
    title: "learn rag",
    description: "exploring retrieval-augmented generation through a hands-on playground. upload documents, ask questions, and see how AI combines search with generation to provide accurate answers.",
    tech: "langchain, openai, supabase, lovable",
    url: "https://learnrag.netlify.app/"
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
            target="_blank" 
            rel="noopener noreferrer"
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
      <div className="app-container">
        <div className="wave-decoration"></div>
        <nav className="sidebar">
  <div className="nav-links">
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
