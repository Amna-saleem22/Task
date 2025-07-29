import React from 'react';
import './Navbar.css'; // External CSS file


export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Amna Saleem. All rights reserved.</p>
      <div className="socials">
        <a href="https://github.com/Amna-Saleem22" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:saleemamna431@gmail.com">Email</a>
      </div>
    </footer>
  );
}
