require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;
const secretKey = process.env.JWT_SECRET_KEY;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Function to read users from file
const getUsers = () => {
  const data = fs.readFileSync('users.json');
  return JSON.parse(data);
};

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();

  // Check if username exists and password matches
  if (users[username] && users[username] === password) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful!', token });
  } else {
    res.status(401).json({ message: 'Invalid username or password.' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
