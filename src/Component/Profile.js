import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const userName = "Anjana B";
  const [bookTitles, setBookTitles] = useState([]);

  useEffect(() => {
    // Retrieve the stored book titles from local storage
    const storedBooks = JSON.parse(localStorage.getItem('bookTitles')) || [];
    setBookTitles(storedBooks);
  }, []);

  const handleLogout = () => {
    // Clear the book titles from local storage on logout
    localStorage.removeItem('bookTitles');
    navigate('/');
  };

  return (
    <div className="prof-search-results-page">
      <div className="prof-headerr">
        <button onClick={() => navigate('/Home')} className="prof-back-button">Back</button>
        <div className="prof-logo-title-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small/old-book-watercolor-illustration-png.png"
            alt="Logo"
            className="prof-logoo"
          />
          <h1 className="prof-titlee">NovelNook</h1>
        </div>
      </div>
      <div className="prof-profile-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDheuafnrCB0q-VE5n3RLRREX5dN3JrdJzJF76tz0y80fP4uNM0ZTtXbXWA-e2yuWKKk&usqp=CAU"
          alt="Profile"
          className="prof-profile-pic"
        />
        <span className="prof-user-name">{userName}</span>
      </div>
      <h5>Want to Read:</h5>
      <ul className="prof-book-list">
        {bookTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
