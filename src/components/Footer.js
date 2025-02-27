import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styles
import Logo from '../images/felan-logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Categories Column */}
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li>Writing Translation</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Video, Photo & Image</li>
            <li>Digital Marketing</li>
            <li>Social Media</li>
          </ul>
        </div>
        {/* About Column */}
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>Career</li>
            <li>Blogs</li>
            <li>FAQ’s</li>
            <li>Contact us</li>
          </ul>
        </div>
        {/* Services Column */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Services</li>
            <li>Projects</li>
            <li>Jobs</li>
            <li>Freelancers</li>
            <li>Employers</li>
          </ul>
        </div>
        {/* Support Column */}
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Help Center</li>
            <li>Updates</li>
            <li>Documentation</li>
          </ul>
        </div>
        {/* Connect Column */}
        <div className="footer-column">
          <h3>Connect</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-linkedin"></i> Linkedin</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-youtube"></i> Youtube</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={Logo} alt="Company Logo" />
        </div>
        <div className="footer-copyright">
          <p>© 2024 RiceTheme. All Right Reserved.</p>
        </div>
        <div className="footer-language-currency">
          <div className="footer-language">
            <i className="fas fa-globe"></i> English
          </div>
          <div className="footer-currency">
            <i className="fas fa-dollar-sign"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
