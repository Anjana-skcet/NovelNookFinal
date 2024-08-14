import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ReactStars from 'react-rating-stars-component';
import './BestBook.css';
import addservices from '../Services/addservices'; // Import the services

const BestBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = React.useState(null);
  const [reviewText, setReviewText] = React.useState('');
  const [rating, setRating] = React.useState(0);
  const [reviews, setReviews] = React.useState([]);
  const [showReviewForm, setShowReviewForm] = React.useState(false);

  // Get the username from local storage or another source
  const username = localStorage.getItem('username'); // Ensure this is set during login

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await addservices.fetchBestBookById(bookId);
        setBook(bookData);
        const reviewsData = await addservices.fetchReviewsByBookId(bookId);
        console.log('Fetched reviews:', reviewsData); // Debugging
        setReviews(reviewsData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, [bookId]);

  const handleAddReview = async () => {

    try {
      const newReview = {
        username, // Use the logged-in username
        review: reviewText,
        rating,
      };
      console.log('Submitting review:', newReview); // Debugging

      await addservices.submitReview(bookId, newReview);
      setReviewText('');
      setRating(0);
      setShowReviewForm(false);
      alert('Review submitted successfully!');
      // Refresh reviews
      const reviewsData = await addservices.fetchReviewsByBookId(bookId);
      setReviews(reviewsData);
    } catch (error) {
      console.error('Failed to submit review:', error);
      alert('Failed to submit review');
    }
  };

  if (!book) return <p>Loading...</p>;

  const hasUserReviewed = reviews.some(
    (review) => review.username === username
  );
  const handleButton = (bookTitle) => {
    const existingBooks = JSON.parse(localStorage.getItem('bookTitles')) || [];
    const updatedBooks = [...existingBooks, bookTitle];
    localStorage.setItem('bookTitles', JSON.stringify(updatedBooks));
    alert(`${bookTitle} has been added to your profile!`);
  };

  return (
    <div>
      <div className="best-book-header">
        
        <div className="best-logo-title-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small/old-book-watercolor-illustration-png.png"
            alt="Logo"
            className="best-logoo"
          />
          <h1 className="best-titlee">NovelNook</h1>
        </div>
      </div>
      <div className="best-book-detaill">
        <div className="best-book-card">
          <div className="best-book-info">
            <div className="best-book-image-wrapper">
              <img src={book.img} alt={book.title} className="best-book-image" />
            </div>
            <div className="best-book-details">
              <h2 className="best-book-title">{book.title}</h2>
              <p>
                <strong>Author:</strong> {book.author || 'N/A'}
              </p>
              <p>
                <strong>Theme:</strong> {book.theme || 'N/A'}
              </p>
              <p>{book.shortstory || 'No description available.'}</p>
              <p>
                <strong>Published Date:</strong> {book.date || 'N/A'}
              </p>
              <p className="best-book-rating">
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
              <div className="best-author-section">
                <img
                  src={book.authimg}
                  alt="Author"
                  className="best-author-image"
                />
                <p>{book.aboutauth || 'N/A'}</p>
              </div>
              <div className="best-buttons-container">
                <Button
                  onClick={() => handleButton(book.title)}
                  className="best-add-to-profile-button"
                  style={{
                    backgroundColor: '#FFD580',
                    color: '#000',
                    marginRight: '10px',
                  }}
                >
                  Add Book to Profile
                </Button>
                <Button
                  onClick={() => setShowReviewForm(true)}
                  className="best-rate-button"
                  style={{ backgroundColor: '#FFD580', color: '#000' }}
                  disabled={hasUserReviewed}
                >
                  {hasUserReviewed ? 'You have reviewed' : 'Rate the product'}
                </Button>
              </div>
              {showReviewForm && (
                <div className="best-review-form">
                  <ReactStars
                    count={5}
                    value={rating}
                    onChange={setRating}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Write your review here..."
                  />
                  <Button onClick={handleAddReview}>Submit Review</Button>
                </div>
              )}
              <div className="best-reviews-section">
                <h4>Ratings & Reviews:</h4>
                {reviews.length > 0 ? (
                  reviews.map((reviewItem, index) => (
                    <div key={index} className="best-review">
                      <p>
                        <strong>{reviewItem.username || 'Anjana'}:</strong>
                      </p>
                      <p>{reviewItem.review}</p>
                      <ReactStars
                        count={5}
                        value={reviewItem.rating}
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

export default BestBook;
