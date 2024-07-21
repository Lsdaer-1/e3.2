// src/Footer.js
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import './Footer.css';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Email : aaaaa@gmail.com</a></li>
          <li><a href="#">Tel : 1234565678</a></li>
          <li><a href="#">Follow us on X</a></li>
          <li><a href="#contact" onClick={openModal}>Contact</a></li>
        </ul>
      </div>
      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </footer>
  );
}

export default Footer;
