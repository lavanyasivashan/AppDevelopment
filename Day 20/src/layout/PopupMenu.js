import React, { useState } from 'react';
import './PopupMenu.css'; // Import the CSS file for styling

const PopupMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="popup-menu">
      <button onClick={toggleMenu}>SET GOALS</button>

      {isMenuOpen && (
        <ul className="menu-list">
          <li>ENDS IN 1 MONTH</li>
          
        </ul>
      )}
    </div>
  );
};

export default PopupMenu;
