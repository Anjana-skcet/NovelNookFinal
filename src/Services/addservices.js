import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

// Fetch all users
const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Register a new user
const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error during user registration:', error);
    throw error;
  }
};

// Fetch all best books
const fetchBestBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/best`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch best books', error);
    throw error;
  }
};

// Fetch all recent books
const fetchRecentBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recent`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch recent books', error);
    throw error;
  }
};


// Fetch a specific recent book by its ID
const fetchRecentBookById = async (bookId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recent/${bookId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch book details', error);
    throw error;
  }
};

// Fetch books by category
const fetchBooksByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genre/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch books by category', error);
    throw error;
  }
};

// Fetch specific book details by category and ID
const fetchBookDetailsByCategoryAndId = async (category, bookId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genre/category/${category}`);
    const selectedBook = response.data.find(book => book.bookno === parseInt(bookId));
    return selectedBook ? selectedBook : null;
  } catch (error) {
    console.error('Failed to fetch book details', error);
    throw error;
  }
};

// Submit a review for a specific book
const fetchBestBookById = async (bookId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/best/${bookId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch book details', error);
    throw error;
  }
};

const fetchReviewsByBookId = async (bookId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/best/${bookId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch reviews', error);
    throw error;
  }
};

const fetchRecentReviewsByBookId = async (bookId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recent/${bookId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch reviews', error);
    throw error;
  }
};

const submitReview = async (bookId, reviewData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/best/${bookId}/reviews`, reviewData);
    return response.data;
  } catch (error) {
    console.error('Failed to submit review:', error);
    throw error;
  }
};

const submitRecentReview = async (bookId, reviewData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/recent/${bookId}/reviews`, reviewData);
    return response.data;
  } catch (error) {
    console.error('Failed to submit review:', error);
    throw error;
  }
};

export default {
  fetchUsers,
  registerUser,
  fetchBestBooks,
  fetchRecentBooks,
  fetchBestBookById,
  fetchRecentBookById,
  fetchBooksByCategory,
  fetchBookDetailsByCategoryAndId,
  fetchBestBookById,
  fetchReviewsByBookId,
  submitReview,
  submitRecentReview,
  fetchRecentReviewsByBookId,
};
