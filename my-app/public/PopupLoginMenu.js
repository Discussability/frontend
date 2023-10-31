import React, { useState } from 'react';

const PopupLoginMenu = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleLogin = () => {
    // Perform your login logic here
    // You can validate the username and password and perform an API request, etc.
    console.log('Logging in with username:', username, 'and password:', password);
    
    // Close the popup after login (you may want to check the login result and close accordingly)
    closePopup();
  };

  return (
    <div>
      <button onClick={openPopup}>Open Login</button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupLoginMenu;