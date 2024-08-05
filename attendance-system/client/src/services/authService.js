import axios from 'axios';

// Set up the base URL for the API
const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL


// Function to handle user login
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password }); 
    return response.data; // This could include a token or user data
  } catch (error) {
    if (error.response && error.response.status === 401) {
        throw new Error('Invalid username or password');
      } else {
        console.error('Error logging in:', error);
        throw new Error('An error occurred while trying to log in. Please try again later.');
      }
  }
};
