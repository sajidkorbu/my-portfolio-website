// src/pages/Library.js
import React, { useState, useRef, useEffect } from 'react';
import './Library.css';

// Book data remains the same as in your original file
const bookData = [
{
    id: 1,
    title: "shoe dog",
    author: "phil knight",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1457284880i/27220736.jpg",
    recommendation: "an inspiring memoir about perseverance and passion. knight's journey building nike taught me that success often comes through countless small steps and persistent vision rather than overnight success."
  },
  {
    id: 2,
    title: "siddhartha",
    author: "hermann hesse",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1428715580i/52036.jpg",
    recommendation: "this beautiful philosophical novel resonated with my own journey of self-discovery. hesse's portrayal of siddhartha's path reminds me that wisdom comes from direct experience and that each person must find their own way."
  },
  {
    id: 3,
    title: "influence",
    author: "robert cialdini",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391032531i/28815.jpg",
    recommendation: "cialdini's principles of persuasion have been invaluable in my business relationships. understanding these psychological triggers has made me both more effective in communication and more aware of when these techniques are being used."
  },
  {
    id: 4,
    title: "letter from a stoic (letter 13)",
    author: "seneca",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1421619054i/97411.jpg",
    recommendation: "seneca's timeless wisdom on anxiety and resilience continues to guide me during challenging times. his advice to prepare for difficulties while enjoying the present moment has been a cornerstone of my personal philosophy."
  },
  {
    id: 5,
    title: "the miracle makers",
    author: "p.k. mohapatra & harish sachdev",
    coverUrl: "https://m.media-amazon.com/images/I/51tgel-49VL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    recommendation: "this account of business transformation offers practical insights on leadership and change management that I've applied throughout my career in digital transformation."
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
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403202090i/905.jpg",
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
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328868445i/9566355.jpg",
    recommendation: "captain gopinath's journey creating india's first low-cost airline speaks to the entrepreneurial spirit. his ability to overcome regulatory and market challenges while democratizing air travel contains lessons for any innovator."
  },
  {
    id: 10,
    title: "rearview mirror",
    author: "raghu",
    coverUrl: "https://m.media-amazon.com/images/I/41Cw8yVEXmL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    recommendation: "a reflective memoir that offers honest perspectives on career transitions and personal growth. raghu's storytelling helped me appreciate the value of every experience in shaping who we become."
  },
  {
    id: 11,
    title: "the nvidia way",
    author: "william pounds",
    coverUrl: "https://m.media-amazon.com/images/I/51oeS7maP4L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    recommendation: "this book offers valuable insights into how nvidia transformed itself repeatedly to stay at the forefront of technological innovation, demonstrating the importance of adaptability and vision."
  },
  {
    id: 12,
    title: "reframe your brain",
    author: "scott adams",
    coverUrl: "https://m.media-amazon.com/images/I/51Q8LAVA7AL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    recommendation: "adams' practical approach to reframing problems and managing energy rather than time has influenced how i structure my days and approach challenges."
  },
  {
    id: 13,
    title: "the dhandho investor",
    author: "mohnish pabrai",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320433767i/1263081.jpg",
    recommendation: "pabrai's value-investing philosophy emphasizing low-risk, high-return opportunities has informed not just my financial decisions but also my approach to business investments and career choices."
  },
  {
    id: 14,
    title: "grinding it out",
    author: "ray kroc",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1457593572i/201026.jpg",
    recommendation: "kroc's journey building mcdonald's is a masterclass in standardization and scaling. his persistence and attention to operational details offers lessons for anyone building systems that can replicate success."
  },
  {
    id: 15,
    title: "the tao of charlie munger",
    author: "david clark",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477907770i/29939363.jpg",
    recommendation: "munger's mental models and incisive thinking have dramatically improved my decision-making process. his emphasis on multidisciplinary learning continues to shape how i approach complex problems."
  },
  {
    id: 16,
    title: "autobiography of a yogi",
    author: "paramahansa yogananda",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347984664i/639864.jpg",
    recommendation: "yogananda's spiritual journey opened my mind to eastern philosophical traditions and meditation practices that have brought greater balance and clarity to my life and work."
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
          extra reading
        </button>
      </div>
      
      <div className={`tab-content ${activeTab === 'books' ? 'active' : ''}`}>
        {activeTab === 'books' && (
          <>
            <p className="library-intro">
              books have been essential to my personal and professional growth. here's a curated collection of reads that 
              have shaped my thinking on leadership, psychology, business, and life.
            </p>
            
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
                      <img src={book.coverUrl} alt={`${book.title} by ${book.author}`} />
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
            </div>
          </>
        )}
        
        {activeTab === 'extras' && (
          <div className="extras-container">
            <p className="library-intro">
              beyond books, these articles, essays, and resources have influenced my thinking and approach to business and life.
            </p>
            <div className="extras-grid">
              {/* You can add your extra reading content here */}
              <p className="placeholder">Extra reading content will be displayed here.</p>
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