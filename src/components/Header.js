import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Steam Clone</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
