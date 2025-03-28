import React from 'react';
import './Bookshelf.css';

const books = [
  {
    id: 1,
    title: "Shoe Dog",
    author: "Phil Knight",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1457284880i/27220736.jpg",
    color: "#2c3e50"
  },
  {
    id: 2,
    title: "Siddhartha",
    author: "Hermann Hesse",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1428715580i/52036.jpg",
    color: "#8e44ad"
  },
  {
    id: 3,
    title: "Influence",
    author: "Robert Cialdini",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391026083i/28815.jpg",
    color: "#c0392b"
  },
  {
    id: 4,
    title: "Letter from a Stoic",
    author: "Seneca",
    color: "#d35400"
  },
  {
    id: 5,
    title: "The Miracle Makers",
    author: "P.K. Mohapatra",
    color: "#16a085"
  }
];

const Bookshelf = () => {
  return (
    <section className="bookshelf-container">
      <h2>Books I Recommend</h2>
      <div className="bookshelf">
        {books.map((book) => (
          <div 
            key={book.id} 
            className="book"
            style={{'--book-color': book.color}}
          >
            {book.cover ? (
              <div className="book-with-cover">
                <img src={book.cover} alt={book.title} className="book-cover" />
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
              </div>
            ) : (
              <div className="book-spine">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bookshelf; 