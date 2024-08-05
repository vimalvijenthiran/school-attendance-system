import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />}
      />
      <Route
        path="/home"
        element={isLoggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/" />}
      />
    </Routes>
  </Router>
  );
};

export default App;
