import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ onLogout }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogout = () => {
    onLogout();
    navigate('/'); // Redirect to login page after logging out
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="header-title">NSchool</h1>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Attendence</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="home-main">
        <div className="welcome-section">
          <h2 className="home-title">Welcome Students!</h2>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2024 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
