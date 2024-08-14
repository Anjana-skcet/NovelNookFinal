import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  // Fetch the username from localStorage
  const storedUserName = localStorage.getItem('loggedInUserName') || "Anjana B";
  
  const [userName, setUserName] = useState(storedUserName);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(userName);
  const [bookTitles, setBookTitles] = useState([]);

  useEffect(() => {
    // Retrieve the stored book titles from local storage
    const storedBooks = JSON.parse(localStorage.getItem('bookTitles')) || [];
    setBookTitles(storedBooks);
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUserName(editedName);
    setIsEditing(false);
    // Update the username in localStorage if edited
    localStorage.setItem('loggedInUserName', editedName);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <>
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
      
        <div className="prof-container">
          <div className="prof-profile-section">
            <img
              src="https://i3.wp.com/static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg?ssl=1"
              alt="Profile"
              className="prof-profile-pic"
            />
            <div className="prof-user-info">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={editedName}
                    onChange={handleNameChange}
                    className="prof-name-input"
                  />
                  <button className="prof-save-button" onClick={handleSaveClick}>Save</button>
                </>
              ) : (
                <>
                  <span className="prof-user-name">{userName}</span>
                  <button className="prof-edit-button" onClick={handleEditClick}>Edit Profile</button>
                </>
              )}
            </div>
          </div>
          <div className="prof-following">
            <h5>Want to Read:</h5>
            <ul className="prof-book-list">
              {bookTitles.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
