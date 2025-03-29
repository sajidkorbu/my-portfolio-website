// src/pages/Library.js
import React, { useState, useRef, useEffect } from 'react';
import './Library.css';
import miracleMakersImage from '../assets/the-miracle-makers.jpg';
import innerGameImage from '../assets/the-inner-game-of-tennins.jpg';
import autobiographyImage from '../assets/Autobiography-of-a-Yogi.jpg';
import aheImage from '../assets/ahe-manohar-tari.jpg';
import duniyadariImage from '../assets/duniyadari.jpg';
import grindingImage from '../assets/grinding-it-out.jpg';
import nvidiaImage from '../assets/nvidia-way.jpg';
import rearviewImage from '../assets/rearview-mirror.jpg';
import reframeImage from '../assets/reframe-your-brain.jpg';
import senecaImage from '../assets/seneca.jpg';
import simplyFlyImage from '../assets/simply-fly.jpg';
import taoImage from '../assets/tao-of-charlie-munger.jpg';
import dhandoImage from '../assets/dhando-investor.jpg';

// Book data remains the same as in your original file
const bookData = [
{
    id: 1,
    title: "Shoe Dog",
    author: "Phil Knight",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1457284880i/27220736.jpg",
    recommendation: "all big companies start somewhere small, and this book is about that start. no great feat is achieved by a lone human - it takes a team. in nike's story, amazing people came together - some brought the name, some the logo, and most of it was luck driven by a passionate CEO."
  },
  {
    id: 2,
    title: "siddhartha",
    author: "hermann hesse",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1428715580i/52036.jpg",
    recommendation: "a book i will read many times to understand it deeply, a book i will grow old with, and hope one day i will find what siddhartha was looking for.."
  },
  {
    id: 3,
    title: "influence",
    author: "robert cialdini",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391026083i/28815.jpg",
    recommendation: "i realized late in life the power heuristics have over us, and you can understand that through this book. must read to understand how people operate."
  },
  {
    id: 4,
    title: "letter from a stoic (letter 13)",
    author: "seneca",
    coverUrl: senecaImage,
    recommendation: "fear has gripped me all my life. i find strength in this letter. i often read it and hope i don't have to read it again."
  },
  {
    id: 5,
    title: "the miracle makers",
    author: "bharat sundaresan",
    coverUrl: miracleMakersImage,
    recommendation: "a thrilling account of india's greatest cricket victory. this book takes you behind the scenes of the historic gabba test win, showing how a depleted team achieved the impossible through sheer resilience and belief."
  },
  {
    id: 6,
    title: "steve jobs",
    author: "walter isaacson",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511288482i/11084145.jpg",
    recommendation: "beyond the myth of jobs, isaacson reveals the complex personality behind apple's success. i was inspired by jobs' unwavering commitment to design excellence and his ability to envision products people didn't yet know they needed."
  },
  {
    id: 7,
    title: "the inner game of tennis",
    author: "w. timothy gallwey",
    coverUrl: innerGameImage,
    recommendation: "though ostensibly about tennis, this book transformed my approach to learning and performance. gallwey's insights about quieting self-criticism to access natural abilities apply beautifully to professional challenges."
  },
  {
    id: 8,
    title: "elon musk",
    author: "ashlee vance",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518291452i/25541028.jpg",
    recommendation: "vance's portrait of musk showcases the power of thinking at extreme scale. while i don't agree with all of musk's methods, his relentless drive to transform multiple industries simultaneously is undeniably inspiring."
  },
  {
    id: 9,
    title: "simply fly",
    author: "captain g.r. gopinath",
    coverUrl: simplyFlyImage,
    recommendation: "captain gopinath's journey creating india's first low-cost airline speaks to the entrepreneurial spirit. his ability to overcome regulatory and market challenges while democratizing air travel contains lessons for any innovator."
  },
  {
    id: 10,
    title: "rearview mirror",
    author: "raghu",
    coverUrl: rearviewImage,
    recommendation: "a reflective memoir that offers honest perspectives on career transitions and personal growth. raghu's storytelling helped me appreciate the value of every experience in shaping who we become."
  },
  {
    id: 11,
    title: "the nvidia way",
    author: "william pounds",
    coverUrl: nvidiaImage,
    recommendation: "this book offers valuable insights into how nvidia transformed itself repeatedly to stay at the forefront of technological innovation, demonstrating the importance of adaptability and vision."
  },
  {
    id: 12,
    title: "reframe your brain",
    author: "scott adams",
    coverUrl: reframeImage,
    recommendation: "adams' practical approach to reframing problems and managing energy rather than time has influenced how i structure my days and approach challenges."
  },
  {
    id: 13,
    title: "the dhandho investor",
    author: "mohnish pabrai",
    coverUrl: dhandoImage,
    recommendation: "pabrai's value-investing philosophy emphasizing low-risk, high-return opportunities has informed not just my financial decisions but also my approach to business investments and career choices."
  },
  {
    id: 14,
    title: "grinding it out",
    author: "ray kroc",
    coverUrl: grindingImage,
    recommendation: "kroc's journey building mcdonald's is a masterclass in standardization and scaling. his persistence and attention to operational details offers lessons for anyone building systems that can replicate success."
  },
  {
    id: 15,
    title: "the tao of charlie munger",
    author: "david clark",
    coverUrl: taoImage,
    recommendation: "munger's mental models and incisive thinking have dramatically improved my decision-making process. his emphasis on multidisciplinary learning continues to shape how i approach complex problems."
  },
  {
    id: 16,
    title: "autobiography of a yogi",
    author: "paramahansa yogananda",
    coverUrl: autobiographyImage,
    recommendation: "yogananda's spiritual journey opened my mind to eastern philosophical traditions and meditation practices that have brought greater balance and clarity to my life and work."
  },
  {
    id: 17,
    title: "duniyadari",
    author: "suhas shirvalkar",
    coverUrl: duniyadariImage,
    recommendation: "a masterful exploration of college life and friendships in pune. shirvalkar's storytelling captures the essence of youth, ambition, and the complexities of relationships in a changing india."
  },
  {
    id: 18,
    title: "ahe manohar tari",
    author: "sunita deshpande",
    coverUrl: aheImage,
    recommendation: "a beautiful memoir that paints an intimate portrait of life, literature, and relationships. deshpande's narrative weaves personal experiences with broader cultural insights, offering a unique perspective on marathi literary life."
  }
];

const Library = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [activeTab, setActiveTab] = useState('books');
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };
  
  const closeDetail = () => {
    setSelectedBook(null);
  };
  
  // Handle tab changes with animation
  const handleTabChange = (tab) => {
    // First, make the current content fade out
    const contentElement = document.querySelector('.tab-content.active');
    if (contentElement) {
      contentElement.classList.remove('active');
    }
    
    // Set the new active tab after a short delay
    setTimeout(() => {
      setActiveTab(tab);
      
      // Make the new content fade in
      setTimeout(() => {
        const newContentElement = document.querySelector('.tab-content');
        if (newContentElement) {
          newContentElement.classList.add('active');
        }
      }, 50);
    }, 300); // This delay should match the transition time in CSS
  };
  
  // Initialize the active class on first render
  useEffect(() => {
    const contentElement = document.querySelector('.tab-content');
    if (contentElement) {
      contentElement.classList.add('active');
    }
  }, []);
  
  // Scroll handling functions remain the same
  const handleMouseDown = (e) => {
    setIsScrolling(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };
  
  const handleMouseMove = (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleMouseUp = () => {
    setIsScrolling(false);
  };
  
  const handleMouseLeave = () => {
    setIsScrolling(false);
  };
  
  const scrollToPosition = (position) => {
    scrollContainerRef.current.scrollTo({
      left: position,
      behavior: 'smooth'
    });
  };
  
  const scrollLeft20Percent = () => {
    const container = scrollContainerRef.current;
    const newPosition = container.scrollLeft - (container.clientWidth * 0.8);
    scrollToPosition(newPosition);
  };
  
  const scrollRight20Percent = () => {
    const container = scrollContainerRef.current;
    const newPosition = container.scrollLeft + (container.clientWidth * 0.8);
    scrollToPosition(newPosition);
  };
  
  return (
    <div className="library-container">
      <h1 className="library-title">library</h1>
      
      <div className="library-tabs">
        <button 
          className={activeTab === 'books' ? 'active' : ''} 
          onClick={() => handleTabChange('books')}
        >
          books
        </button>
        <button 
          className={activeTab === 'extras' ? 'active' : ''} 
          onClick={() => handleTabChange('extras')}
        >
          more
        </button>
      </div>
      
      <div className={`tab-content ${activeTab === 'books' ? 'active' : ''}`}>
        {activeTab === 'books' && (
          <>
            <div className="library-intro">
              <h2 className="intro-heading">stories that shaped me</h2>
              <p>
                books have been my silent mentors—guiding me through challenges, expanding my horizons, and challenging my perspectives. each book on this shelf is more than just pages and words; they're snapshots of insights that have transformed how i approach leadership, understand people, and navigate the complex world of business and life.
              </p>
              <p className="library-subtext">
                i buy more books than i can read—not out of excess, but out of possibility. each unread book represents a future conversation, an unexplored idea, a perspective waiting to be discovered. in this journey of becoming a better reader, i've learned that the pursuit of knowledge is as valuable as the knowledge itself.
              </p>
            </div>
            
            <div className="horizontal-scroll-container">
              <button 
                className="scroll-button scroll-left" 
                onClick={scrollLeft20Percent}
                aria-label="Scroll left"
              >
                ‹
              </button>
              
              <div 
                className="books-row"
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                {bookData.map(book => (
                  <div 
                    key={book.id} 
                    className="book-item"
                    onClick={() => handleBookClick(book)}
                  >
                    <div className="book-cover">
                      <img 
                        src={book.coverUrl} 
                        alt={`${book.title} cover`}
                        loading="lazy"
                        onError={(e) => {
                          console.log(`Failed to load image for: ${book.title}`); // For debugging
                          e.target.onerror = null; // Prevent infinite loop
                          e.target.src = 'https://via.placeholder.com/160x240?text=Book+Cover'; // Fallback image
                        }}
                      />
                    </div>
                    <div className="book-info">
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className="scroll-button scroll-right" 
                onClick={scrollRight20Percent}
                aria-label="Scroll right"
              >
                ›
              </button>
              
              <div className="scroll-message">
                click to read my thoughts, scroll to see more
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'extras' && (
          <div className="extras-container">
            <div className="library-intro">
              <h2 className="intro-heading">beyond books</h2>
              <p>
                a collection of essays, articles, and threads that have shaped my thinking and perspective.
              </p>
            </div>
            <div className="reading-grid">
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
                <div className="reading-content">
                  <h3>i can think. i can wait. i can fast.</h3>
                  <p className="reading-author">by kunal mashruwala</p>
                  <p className="reading-excerpt">
                    "three virtues from siddhartha that are as relevant today as they were 2500 years ago."
                  </p>
                  <div className="reading-metadata">
                    <span className="reading-type">essay</span>
                    <span className="reading-time">3 min read</span>
                  </div>
                </div>
              </a>

              <a href="https://theamericanscholar.org/solitude-and-leadership/" target="_blank" rel="noopener noreferrer" className="reading-card">
                <div className="reading-content">
                  <h3>solitude and leadership</h3>
                  <p className="reading-author">by william deresiewicz</p>
                  <p className="reading-excerpt">
                    "true leadership requires the courage to think for yourself—a skill best developed in solitude."
                  </p>
                  <div className="reading-metadata">
                    <span className="reading-type">essay</span>
                    <span className="reading-time">25 min read</span>
                  </div>
                </div>
              </a>

              <a href="https://fs.blog/mental-models/" target="_blank" rel="noopener noreferrer" className="reading-card">
                <div className="reading-content">
                  <h3>mental models</h3>
                  <p className="reading-author">by shane parrish</p>
                  <p className="reading-excerpt">
                    "a latticework of mental models is the best way to make better decisions and understand reality."
                  </p>
                  <div className="reading-metadata">
                    <span className="reading-type">guide</span>
                    <span className="reading-time">20 min read</span>
                  </div>
                </div>
              </a>

              <a href="https://en.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_13" target="_blank" rel="noopener noreferrer" className="reading-card">
                <div className="reading-content">
                  <h3>on groundless fears</h3>
                  <p className="reading-author">by seneca</p>
                  <p className="reading-excerpt">
                    "we suffer more in imagination than in reality—a timeless reminder to focus on what's real."
                  </p>
                  <div className="reading-metadata">
                    <span className="reading-type">letter</span>
                    <span className="reading-time">10 min read</span>
                  </div>
                </div>
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
      
      {selectedBook && (
        <div className="book-detail-overlay">
          <div className="book-detail">
            <button className="close-button" onClick={closeDetail}>×</button>
            <div className="book-detail-content">
              <div className="book-detail-cover">
                <img src={selectedBook.coverUrl} alt={`${selectedBook.title} by ${selectedBook.author}`} />
              </div>
              <div className="book-detail-info">
                <h2>{selectedBook.title}</h2>
                <h3>by {selectedBook.author}</h3>
                <div className="book-recommendation">
                  <h4>why i recommend it:</h4>
                  <p>{selectedBook.recommendation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;