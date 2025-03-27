// src/pages/Library.js
import React, { useState, useRef } from 'react';
import './Library.css';

// Sample book data - you'll replace this with your actual book selections
const bookData = [
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    coverUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Shoe_dog_book_cover.jpg",
    recommendation: "More than a business memoir, this is a raw, honest journey of an entrepreneur. Phil Knight's story reveals that success isn't about perfection, but about persistence, building an incredible team, and being open to unexpected paths. The origin of Nike's name is just one example of how great things often emerge from unplanned moments."
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    recommendation: "The concept of 1% improvements revolutionized my approach to personal development. Instead of seeking massive changes, I now focus on tiny, consistent improvements that compound over time. This book provided practical strategies I use daily."
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420585954i/23692271.jpg",
    recommendation: "A fascinating perspective on human history that made me reconsider our collective story. Harari connects dots across biology, economics, and sociology to explain how we became the dominant species through our ability to create shared fictions."
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg",
    recommendation: "In our distraction-filled world, this book helped me establish better work habits and recognize the value of focused attention. Newport's practical strategies for deep concentration have significantly improved my productivity as a leader."
  },
  {
    id: 5,
    title: "Never Split the Difference",
    author: "Chris Voss",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463413829i/26156469.jpg",
    recommendation: "As someone who regularly negotiates with clients and partners, this book revolutionized my approach. Voss's techniques for tactical empathy and effective questioning have helped me achieve better outcomes in both business and personal negotiations."
  },
  {
    id: 6,
    title: "Influence",
    author: "Robert Cialdini",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391032531i/28815.jpg",
    recommendation: "This classic opened my eyes to the psychology of persuasion. Understanding the six principles of influence has made me both more effective in leadership and more aware of when these techniques are being used on me."
  },
  {
    id: 7,
    title: "The Black Swan",
    author: "Nassim Nicholas Taleb",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925471i/242472.jpg",
    recommendation: "Taleb's insights on unpredictability and random events have deeply influenced my approach to risk management. This book taught me to be humble about prediction and to build systems that are resilient to unforeseen events rather than trying to forecast them."
  },
  {
    id: 8,
    title: "Mindset",
    author: "Carol S. Dweck",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436227012i/40745.jpg",
    recommendation: "The concept of growth versus fixed mindsets transformed how I approach challenges and feedback. Dweck's research helped me develop more resilience and embrace difficulties as opportunities for growth rather than threats to my competence."
  },
  {
    id: 9,
    title: "The Lean Startup",
    author: "Eric Ries",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019.jpg",
    recommendation: "Ries's methodology for rapid experimentation and validated learning has been invaluable in my approach to projects. I've applied these principles to reduce waste and create more customer-centric solutions in my digital transformation work."
  },
  {
    id: 10,
    title: "Essentialism",
    author: "Greg McKeown",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403165375i/18077875.jpg",
    recommendation: "This book helped me focus on what truly matters by embracing the disciplined pursuit of less. McKeown's principles for eliminating non-essential activities have given me greater clarity and impact in both professional and personal endeavors."
  },
  {
    id: 11,
    title: "Range",
    author: "David Epstein",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550135818i/41795733.jpg",
    recommendation: "Epstein's argument for breadth of experience resonated deeply with my own career path across different roles and industries. This book affirmed the value of my diverse background and helped me leverage my range of experiences for creative problem-solving."
  },
  {
    id: 12,
    title: "Zero to One",
    author: "Peter Thiel",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630663027i/18050143.jpg",
    recommendation: "Thiel's contrarian thinking on innovation and competition challenged many of my assumptions about business. This book pushed me to think about creating truly unique value rather than just incrementally improving on existing solutions."
  },
  // Add more books to reach 20-25 total
];

const Library = () => {
  const [selectedBook, setSelectedBook] = useState(null);
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
  
  // Handle scroll interaction
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
  
  // Scroll to a specific position with animation
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
      <h1 className="library-title">stories that shaped me</h1>
      <p className="library-intro">
        books have been my silent mentors—guiding me through challenges, expanding my horizons, and challenging my perspectives. each book on this shelf is more than just pages and words; they're snapshots of insights that have transformed how I approach leadership, understand people, and navigate the complex world of business and life.
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
          {bookData.map((book) => (
            <div 
              key={book.id} 
              className="book-item"
              onClick={() => handleBookClick(book)}
            >
              <div className="book-cover-wrapper">
                <img 
                  src={book.coverUrl} 
                  alt={`${book.title} cover`} 
                  className="book-cover" 
                  loading="lazy"
                />
                <div className="book-reflection"></div>
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
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
      
      <div className="scroll-instructions">
        <p>click to read my thoughts, swipe to explore more books</p>
      </div>
      
      {selectedBook && (
        <div className="book-detail-overlay" onClick={closeDetail}>
          <div className="book-detail" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeDetail}>×</button>
            <div className="book-detail-content">
              <div className="book-detail-cover">
                <img 
                  src={selectedBook.coverUrl} 
                  alt={`${selectedBook.title} cover`}
                  className="book-detail-image" 
                />
              </div>
              <div className="book-detail-info">
                <h2 className="book-detail-title">{selectedBook.title}</h2>
                <h3 className="book-detail-author">by {selectedBook.author}</h3>
                <div className="book-recommendation">
                  <h4>Why I recommend this book:</h4>
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