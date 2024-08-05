import axios from 'axios';

// Set up the base URL for the API
const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL

// Create an instance of axios with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here
  },
});

// Function to handle user login
export const login = async (username, password) => {
  try {
    const response = await apiClient.post('/login', { username, password }); // Replace '/login' with your actual login endpoint
    return response.data; // This could include a token or user data
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
