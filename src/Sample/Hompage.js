import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Homepage.css'; // Ensure you have this CSS file for styling

const HomePage = () => {
  const [bestBooks, setBestBooks] = React.useState([]);
  const [recentBooks, setRecentBooks] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchBestBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/best');
        setBestBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch best books', error);
      }
    };

    const fetchRecentBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/recent');
        setRecentBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch recent books', error);
      }
    };

    fetchBestBooks();
    fetchRecentBooks();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="homee-container">
      <div className="home-book-card">
        <h3>Best Books of the Year</h3>
        <div className="home-book-list">
          {bestBooks.length > 0 ? (
            bestBooks.map(book => (
              <img
                key={book.bookno}
                src={book.img}
                alt={book.title}
                className="home-book-image"
                onClick={() => handleBookClick(book.bookno)}
              />
            ))
          ) : (
            <p>No best books available.</p>
          )}
        </div>
      </div>

      <div className="home-book-card">
        <h3>Recently Read Books</h3>
        <div className="home-book-list">
          {recentBooks.length > 0 ? (
            recentBooks.map(book => (
              <img
                key={book.bookno}
                src={book.img}
                alt={book.title}
                className="home-book-image"
                onClick={() => handleBookClick(book.bookno)}
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

export default HomePage;
