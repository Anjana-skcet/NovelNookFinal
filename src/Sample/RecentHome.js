// RecentHome.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ReactStars from 'react-rating-stars-component';
import './RecentHome.css';
import services from '../Services/addservices'

const RecentHome = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await services.fetchRecentBookById(bookId);
        console.log('Book Data:', bookData);  // Debugging
        setBook(bookData);
      } catch (error) {
        console.error('Failed to fetch book details', error);
      }
    };

    fetchBook();
  }, [bookId]);

  if (!book) return <p>Loading...</p>;

  const handleButton = (bookTitle) => {
    const existingBooks = JSON.parse(localStorage.getItem('bookTitles')) || [];
    const updatedBooks = [...existingBooks, bookTitle];
    localStorage.setItem('bookTitles', JSON.stringify(updatedBooks));
    alert(`${bookTitle} has been added to your profile!`);
  };

  return (
    <div>
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
      <div className="recent-book-detail">
        <div className="recent-book-card">
          <div className="recent-book-info">
            <div className="recent-book-image-wrapper">
              <img src={book.img} alt={book.title} className="recent-book-image" />
            </div>
            <div className="recent-book-details">
              <h2 className="recent-book-title">{book.title}</h2>
              <p><strong>Author:</strong> {book.author || 'N/A'}</p>
              <p><strong>Theme:</strong> {book.theme || 'N/A'}</p>
              <p>{book.shortstory || 'No description available.'}</p>
              <p><strong>Published Date:</strong> {book.date || 'N/A'}</p>
              <p className="recent-book-rating">
                <strong>Rating:</strong>
                <ReactStars
                  count={5}
                  value={book.rating}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
              </p>
              <h4>About Author:</h4>
              <div className="author-section">
                <img src={book.authimg} alt="Author" className="recent-author-image" />
                <p>{book.aboutauth || 'N/A'}</p>
              </div>
              <p><strong>Review:</strong> {book.review || 'N/A'}</p>
              <Button onClick={() => handleButton(book.title)} className="add-to-profile-button">Add Book to Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentHome;
