// Home.js
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import services from '../Services/addservices'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [bestBooks, setBestBooks] = useState([]);
  const [recentBooks, setRecentBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const bestBooksData = await services.fetchBestBooks();
        console.log('Best Books:', bestBooksData);  // Debugging
        setBestBooks(bestBooksData);
        
        const recentBooksData = await services.fetchRecentBooks();
        console.log('Recent Books:', recentBooksData);  // Debugging
        setRecentBooks(recentBooksData);
      } catch (error) {
        console.error('Failed to fetch books', error);
      }
    };
    
    fetchBooks();
  }, []);

  const handleSearch = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyDKps-WWTDkOaHYuTNgewaegNEQblWSb60`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data.items);
        navigate('/search-results', { state: { searchResults: data.items } });
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      }
    }
  };

  const handleGenreClick = () => {
    navigate('/genre');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleBookClick = (bookId, type) => {
    console.log('Navigating to:', type, bookId);  // Debugging
    if (type === 'best') {
      navigate(`/best/${bookId}`);
    } else if (type === 'recent') {
      navigate(`/recent/${bookId}`);
    }
  };

  return (
    <div className="hhome-container">
      <div className="hheader">
        <div className="hlogo-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small/old-book-watercolor-illustration-png.png"
            alt="Avatar"
            className="havatar"
          />
          <h1 className="htitle">NovelNook</h1>
        </div>
        <div className="hsearch-container">
          <input
            type="text"
            id="search"
            className="hsearch-input"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <Button variant="text" className="hgenre-button" onClick={handleGenreClick}>Genre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
        <Dropdown alignRight>
          <Dropdown.Toggle as={FaUserCircle} className="huser-icon" />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="himage-container">
        <img
          src="https://media.istockphoto.com/id/1339845062/photo/reading-room-or-library-interior-with-leather-armchair-bookshelf-and-floor-lamp.jpg?s=612x612&w=0&k=20&c=2ghOW2DCvb49Up3D0eFeVzv1kbSMjUq-_psohUYeZB0="
          alt="Bookshelf"
          className="hbookshelf-image"
        />
        <div className="hquote">A book is a dream that you hold in your hand.</div>
      </div>
      <div className="hcard">
        <h2>Looking for your next great read?</h2>
        <p>You've come to the right place. Share the books or genres you've enjoyed before, and we'll provide you with surprisingly spot-on suggestions.</p>
      </div>
      <div className="hcard">
        <p>Best Books of the Year</p>
        <div className="hbookk-images">
          {bestBooks.length > 0 ? (
            bestBooks.map(book => (
              <img
                key={book.bookno}
                src={book.img}
                alt={book.title}
                className="hbook-imagee"
                onClick={() => handleBookClick(book.bookno,'best')}
              />
            ))
          ) : (
            <p>No best books available.</p>
          )}
        </div>
      </div>

      <div className="hcard">
        <p>Recently Read Books</p>
        <div className="hbookk-images">
          {recentBooks.length > 0 ? (
            recentBooks.map(book => (
              <img
                key={book.bookno}
                src={book.img}
                alt={book.title}
                className="hbook-imagee"
                onClick={() => handleBookClick(book.bookno,'recent')}
              />
            ))
          ) : (
            <p>No recent books available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
