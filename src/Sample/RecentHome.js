import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ReactStars from 'react-rating-stars-component';
import './RecentHome.css'; // Create a separate CSS file if needed
import addservices from '../Services/addservices'; // Import the services

const RecentBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = React.useState(null);
  const [review, setReview] = React.useState('');
  const [rating, setRating] = React.useState(0);
  const [reviews, setReviews] = React.useState([]);
  const [showReviewForm, setShowReviewForm] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await addservices.fetchRecentBookById(bookId);
        setBook(bookData);
        const reviewsData = await addservices.fetchRecentReviewsByBookId(bookId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, [bookId]);

  const handleAddReview = async () => {
    try {
      await addservices.submitRecentReview(bookId, {
        username: 'User', // Replace with actual username
        review,
        rating,
      });
      setReview('');
      setRating(0);
      setShowReviewForm(false);
      alert('Review submitted successfully!');
      // Refresh reviews
      const reviewsData = await addservices.fetchRecentReviewsByBookId(bookId);
      setReviews(reviewsData);
    } catch (error) {
      console.error('Failed to submit review:', error);
      alert('Failed to submit review');
    }
  };

  if (!book) return <p>Loading...</p>;

  const handleButton = (bookTitle) => {
    const existingBooks = JSON.parse(localStorage.getItem('bookTitles')) || [];
    const updatedBooks = [...existingBooks, bookTitle];
    localStorage.setItem('bookTitles', JSON.stringify(updatedBooks));
    alert(`${bookTitle} has been added to your profile!`);
  };

  return (
    <div>
      <div className="recent-book-header">
        
        <div className="recent-logo-title-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small/old-book-watercolor-illustration-png.png"
            alt="Logo"
            className="recent-logoo"
          />
          <h1 className="recent-titlee">NovelNook</h1>
        </div>
      </div>
      <div className="recent-book-detail">
        <div className="recent-book-card">
          <div className="recent-book-info">
            <div className="recent-book-image-wrapper">
              <img
                src={book.img}
                alt={book.title}
                className="recent-book-image"
              />
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
              <div className="recent-author-section">
                <img src={book.authimg} alt="Author" className="recent-author-image" />
                <p>{book.aboutauth || 'N/A'}</p>
              </div>
              <div className="recent-buttons-container">
                <Button
                  onClick={() => handleButton(book.title)}
                  className="add-to-profile-button"
                  style={{ backgroundColor: "#FFD580", color: "#000", marginRight: "10px" }}
                >
                  Add Book to Profile
                </Button>
                <Button
                  onClick={() => setShowReviewForm(true)}
                  className="recent-rate-button"
                  style={{ backgroundColor: "#FFD580", color: "#000" }}
                >
                  Rate the product
                </Button>
              </div>
              {showReviewForm && (
                <div className="recent-review-form">
                  <ReactStars
                    count={5}
                    value={rating}
                    onChange={setRating}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here..."
                  />
                  <Button onClick={handleAddReview}>Submit Review</Button>
                </div>
              )}
              <div className="recent-reviews-section">
                <h3>Ratings & Reviews:</h3>
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div key={index} className="recent-review">
                      <p><strong>{review.username}:</strong></p>
                      <p>{review.review}</p>
                      <ReactStars
                        count={5}
                        value={review.rating}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBook;
