import React, { useState } from 'react';
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
    <div>
      {isLoggedIn ? <HomePage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
};

export default App;
