import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    console.log("Response from API:", response); // Log the entire response object
    return response.data; // Return only the data part
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

const fetchBestBooks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/best`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch best books', error);
      throw error;
    }
  };
  
  const fetchRecentBooks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/recent`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch recent books', error);
      throw error;
    }
  };
  
  const fetchBestBookById = async (bookId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/best/${bookId}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch book details', error);
      throw error;
    }
  };
  
  const fetchRecentBookById = async (bookId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/recent/${bookId}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch book details', error);
      throw error;
    }
  };
export default {
  fetchUsers,
  fetchBestBooks,
  fetchRecentBooks,
  fetchBestBookById,
  fetchRecentBookById,
};
