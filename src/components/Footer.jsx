// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Jika menggunakan React Router

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-section about">
            <h5 className="footer-title">Praditus Egi Danuarta</h5>
            <div className="profile-description">
              <p>
                I am a student with a keen interest in the field of IT, particularly in web development and data science. I am always eager to learn new technologies and enhance my skills in this domain.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section links">
            <h5 className="footer-title">Quick Links</h5>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          {/* Social Media */}
          <div className="footer-section social">
            <h5 className="footer-title">Follow Us</h5>
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/egidanuarta17/" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/praditus-egi-danuarta/" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/praditus343" className="social-link"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 | Designed by Praditus Egi Danuarta</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
