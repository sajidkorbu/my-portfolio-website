import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Now.css';

// Previous updates data - add new entries here when updating
const previousUpdates = [
  {
    id: 'july-2025',
    date: 'july 2025',
    content: (
      <>
        <div className="now-section">
          <h3>currently listening to</h3>
          <div className="listening-subsection">
            <h4>podcasts (spotify)</h4>
            <ul>
              <li>DHH with Lex Friedman - tech philosophy and entrepreneurship</li>
              <li>Acquired new podcast on Google - deep dive into Google's history</li>
              <li>Dwarkesh with Stephen Kotkin - highly recommended, geopolitics and history</li>
            </ul>
          </div>

          <div className="listening-subsection">
            <h4>audiobooks (audible)</h4>
            <ul>
              <li>"Unstoppable Brain" by Kyra Robinet - neuroscience and performance</li>
            </ul>
          </div>
        </div>

        <div className="now-section">
          <h3>currently reading</h3>
          <ul>
            <li>"Animal Farm" by George Orwell - timeless political allegory</li>
            <li>"You Can Negotiate Anything" by Herb Cohen - mastering negotiation skills</li>
          </ul>
        </div>

        <div className="now-section">
          <h3>life happenings</h3>
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
      </>
    )
  }
];

const PreviousUpdate = ({ update }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="previous-update">
      <button
        className={`previous-update-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="toggle-icon">{isOpen ? '▾' : '▸'}</span>
        <span className="update-date">{update.date}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="previous-update-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="previous-update-inner">
              {update.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Now = () => (
  <div className="content-area">
    <div className="content-inner">
      <div className="now-header">
        <h1>now</h1>
        <p className="last-updated">last updated: january 2026</p>
      </div>

      <div className="now-content">
        <div className="now-section">
          <h2>currently listening to</h2>
          <div className="listening-subsection">
            <h3>podcasts</h3>
            <ul>
              <li><a href="https://www.dwarkesh.com/p/andrej-karpathy" target="_blank" rel="noopener noreferrer">Dwarkesh Patel with Andrej Karpathy</a> - deep dive into AI, neural networks, and the future of intelligence</li>
              <li><a href="https://www.acquired.fm/episodes/10-years-of-acquired-with-michael-lewis" target="_blank" rel="noopener noreferrer">Acquired</a> - their 10-year anniversary episode with Michael Lewis, reflecting on lessons learned</li>
              <li><a href="https://open.spotify.com/episode/36NPmEQVoeQNuCG3kSPWxi" target="_blank" rel="noopener noreferrer">Jim Murphy with Shane Parrish</a> - 7 principles of inner excellence to stay calm under fire</li>
            </ul>
          </div>
        </div>

        <div className="now-section">
          <h2>currently reading</h2>
          <ul>
            <li><a href="https://www.amazon.com/Inner-Excellence-Extraordinary-Performance-Possible/dp/1538777800" target="_blank" rel="noopener noreferrer">"Inner Excellence"</a> by Jim Murphy - finishing this one, inspired by the podcast. a guide to mental mastery and peak performance</li>
            <li><a href="https://www.goodreads.com/book/show/239472387-the-scaling-era" target="_blank" rel="noopener noreferrer">"The Scaling Era: An Oral History of AI"</a> by Dwarkesh Patel - fascinating collection of conversations about the AI revolution</li>
          </ul>
          <p>
            currently fascinated by two big questions: the <a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html" target="_blank" rel="noopener noreferrer">scaling hypothesis</a> -
            can we really keep making AI smarter just by making models bigger? and the <a href="https://newsletter.semianalysis.com/p/how-ai-labs-are-solving-the-power" target="_blank" rel="noopener noreferrer">energy side of AI</a> -
            watching how gigawatt-scale data centers are being built around the world, the race for power,
            and what this means for our energy infrastructure. it's wild to witness.
          </p>
        </div>

        <div className="now-section">
          <h2>life happenings</h2>
          <p>
            just redesigned this website with inspiration from threads.anshumani.com/about. shout out to <a href="https://x.com/baboonzero" target="_blank" rel="noopener noreferrer">Anshuman on X</a> for the washi paper aesthetic.
            i tried building it first with kimi 2.5 but things didn’t work, then switched to opus 4.5 which helped me figure out how the washi paper effect was implemented.
            that run exhausted its context window, so i continued with codex — which has been great for large‑context work like this.
          </p>
          <p>
            deep into AI learning - lots of reading, exploring, and hands-on experimentation.
            substack has become my go-to for staying updated on what's happening in tech and the world.
          </p>
          <p>
            quite happy to see people finally realizing how good claude is and how it keeps getting
            better and better. the magic is real.
          </p>
          <p>
            location: copenhagen, denmark
          </p>
        </div>
      </div>

      {previousUpdates.length > 0 && (
        <div className="previous-updates-section">
          <div className="previous-updates-header">
            <h2>previous updates</h2>
          </div>
          <div className="previous-updates-list">
            {previousUpdates.map((update) => (
              <PreviousUpdate key={update.id} update={update} />
            ))}
          </div>
        </div>
      )}

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
