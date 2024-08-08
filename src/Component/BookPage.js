import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookPage.css'; // Add relevant styles

const BookPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedBook = location.state?.selectedBook;

  // Mock reviews data
  const reviews = [
    { id: 1, user: 'Alice', comment: 'A fantastic read!', rating: 5 },
    { id: 2, user: 'Bob', comment: 'Really enjoyed the storyline.', rating: 4 },
    { id: 3, user: 'Charlie', comment: 'Not my cup of tea.', rating: 2 },
  ];

  if (!selectedBook) {
    return <div>No book details available.</div>;
  }

  return (
    <div className="book-details-page">
      <div className="book-header">
        <button onClick={() => navigate('/Home')} className="back-button">Back</button>
        <div className="logo-title-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small/old-book-watercolor-illustration-png.png"
            alt="Logo"
            className="logoo"
          />
          <h1 className="titlee">NovelNook</h1>
        </div>
      </div>
      <div className="book-card">
        <div className="book-info">
          <img src={selectedBook.volumeInfo.imageLinks?.thumbnail} alt={selectedBook.volumeInfo.title} className="book-image" />
          <div className="book-details">
            <h2>{selectedBook.volumeInfo.title}</h2>
            <h3>Authors: {selectedBook.volumeInfo.authors?.join(', ') || 'N/A'}</h3>
            <h3>Published Date: {selectedBook.volumeInfo.publishedDate || 'N/A'}</h3>
            <h3>Description:</h3>
            <p>{selectedBook.volumeInfo.description || 'No description available.'}</p>
            <h3>Average Rating: {selectedBook.volumeInfo.averageRating || 'N/A'}</h3>
            <h3>Categories: {selectedBook.volumeInfo.categories?.join(', ') || 'N/A'}</h3>
          </div>
        </div>
        <div className="reviews-section">
          <h2>User Reviews</h2>
          {reviews.length > 0 ? (
            <ul className="reviews-list">
              {reviews.map(review => (
                <li key={review.id} className="review-item">
                  <h4>{review.user}</h4>
                  <p>Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
