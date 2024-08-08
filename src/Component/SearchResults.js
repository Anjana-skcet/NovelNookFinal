import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchResults.css'; // Add relevant styles

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchResults = location.state?.searchResults || [];
  
  const handleBookClick = (book) => {
    navigate('/book-details', { state: { selectedBook: book } });
  };

  return (
    <div className="search-results-page">
      <div className="headerr">
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
      <div className="search-results-container">
        <div className="search-results-list">
          {searchResults.length > 0 ? (
            searchResults.map((book) => (
              <div key={book.id} className="search-result-item" onClick={() => handleBookClick(book)}>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="search-result-image" />
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors.join(', ')}</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;