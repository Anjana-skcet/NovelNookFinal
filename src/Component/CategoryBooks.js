import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Import the service
import './CategoryBooks.css';
import services from '../Services/addservices'

const CategoryBooks = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await services.fetchBooksByCategory(category);
        setBooks(booksData);
      } catch (error) {
        setError('Failed to load books.');
      }
    };

    fetchBooks();
  }, [category]);

  const handleBookClick = (bookId) => {
    navigate(`/genre/${category}/book/${bookId}`);
  };

  return (
    <>
      <div className="category-prof-headerr">
        
        <div className="category-prof-logo-title-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small/old-book-watercolor-illustration-png.png"
            alt="Logo"
            className="category-prof-logoo"
          />
          <h1 className="category-prof-titlee">NovelNook</h1>
        </div>
      </div>
      <div className="category-all">
      <div className="category-books-container">
        <h2>{category} Books</h2>
        {error && <p>{error}</p>}
        {books.length > 0 ? (
          <div className="category-books-grid">
            {books.map((book) => (
              <div 
                className="category-book-card" 
                key={book.bookno} 
                onClick={() => handleBookClick(book.bookno)} 
              >
                <img src={book.img} alt={book.title} className="category-book-image" />
                <div className="category-book-title">{book.title}</div>
                <div className="category-book-author">{book.author}</div>
              </div>
            ))}
          </div>
        ) : (
          <p>No books available in this category.</p>
        )}
      </div>
      </div>
    </>
  );
};

export default CategoryBooks;
