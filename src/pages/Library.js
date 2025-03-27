// src/pages/Library.js
import React, { useState, useRef } from 'react';
import './Library.css';

// ... (bookData remains the same - no changes here) ...

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

  // Handle scroll interaction (remains the same)
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

  // Scroll to a specific position with animation (remains the same)
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

      {/* Tab Container */}
      <div className="library-tab-container">
        <button
          className={`library-tab-button ${activeTab === 'books' ? 'active' : ''}`}
          onClick={() => setActiveTab('books')}
        >
          books
        </button>
        <button
          className={`library-tab-button ${activeTab === 'extras' ? 'active' : ''}`}
          onClick={() => setActiveTab('extras')}
        >
          extra reading
        </button>
      </div>

      {/* rest of the code is the same */}
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
            <p>click and drag to explore more books, or use the arrow buttons</p>
          </div>
        </>
      )}

      {activeTab === 'extras' && (
        <div className="extras-container">
          <p className="library-intro">
            beyond books, here are some essays, articles, and other pieces that have influenced my thinking.
          </p>
          <p className="coming-soon">coming soon...</p>
        </div>
      )}

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
                  <h4>why i recommend this book:</h4>
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
