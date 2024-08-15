import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookPage.css';
import Button from '@mui/material/Button'; // Add relevant styles

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

  const handleButton = (bookTitle) => {
    const existingBooks = JSON.parse(localStorage.getItem('bookTitles')) || [];
    const updatedBooks = [...existingBooks, bookTitle];
    localStorage.setItem('bookTitles', JSON.stringify(updatedBooks));
    alert(`${bookTitle} has been added to your profile!`);
  };


  return (
    <div className="search-book-details-page">
      <div className="search-book-header">
        <button onClick={() => navigate('/Home')} className="search-back-button">Back</button>
        <div className="search-logo-title-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small/old-book-watercolor-illustration-png.png"
            alt="Logo"
            className="search-logoo"
          />
          <h1 className="search-titlee">NovelNook</h1>
        </div>
      </div>
      <div className="search-book-card">
        <div className="search-book-info">
          <img src={selectedBook.volumeInfo.imageLinks?.thumbnail} alt={selectedBook.volumeInfo.title} className="search-book-image" />
          <div className="search-book-details">
            <h3>{selectedBook.volumeInfo.title}</h3>
            <h4>Authors: {selectedBook.volumeInfo.authors?.join(', ') || 'N/A'}</h4>
            <h4>Published Date: {selectedBook.volumeInfo.publishedDate || 'N/A'}</h4>
            <h4>Description:</h4>
            <p>{selectedBook.volumeInfo.description || 'No description available.'}</p>
            <h5>Average Rating: {selectedBook.volumeInfo.averageRating || 'N/A'}</h5>
            <h5>Categories: {selectedBook.volumeInfo.categories?.join(', ') || 'N/A'}</h5>
            <Button
  onClick={() => handleButton(selectedBook.title)}
  style={{ backgroundColor: '#4682B4', color: 'white' }}
  className="search-add-to-profile-button"
>
  Add Book to Profile
</Button>

          </div>
        </div>
        </div>
        </div>
      );
    };
    
    export default BookPage;
    
   