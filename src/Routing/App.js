import React from 'react';
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

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/book-details" element={<BookPage />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/book/:id" element={<BookDetail />} />
      <Route path="/best/:bookId" element={<BestBook />} />
      <Route path="/recent/:bookId" element={<RecentHome />} />
      </Routes>
      </Router>
      /*<Route path="/" element={<HomePage/>}/>*/
    );
}

export default App;
