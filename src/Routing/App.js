import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Component/Home';
import BookDetail from '../Component/BookDetail';
import SearchResults from '../Component/SearchResults';
import BookPage from '../Component/BookPage';
import Signup from '../Authentication/Signup';
import Login from '../Authentication/Login';
import Profile from '../Component/Profile';
import Genre from '../Component/Genre';
import BestBook from '../Sample/Bestbook';
import HomePage from '../Sample/Hompage';
import RecentHome from '../Sample/RecentHome';
import CategoryBooks from '../Component/CategoryBooks';
import GenreDetail from '../Component/GenreDetail';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/Home"
          element={<ProtectedRoute element={<Home />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/search-results"
          element={<ProtectedRoute element={<SearchResults />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/book-details"
          element={<ProtectedRoute element={<BookPage />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/genre"
          element={<ProtectedRoute element={<Genre />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/book/:id"
          element={<ProtectedRoute element={<BookDetail />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/best/:bookId"
          element={<ProtectedRoute element={<BestBook />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/recent/:bookId"
          element={<ProtectedRoute element={<RecentHome />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/books/:category"
          element={<ProtectedRoute element={<CategoryBooks />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/genre/:category/book/:bookId"
          element={<ProtectedRoute element={<GenreDetail />} isAuthenticated={isAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
