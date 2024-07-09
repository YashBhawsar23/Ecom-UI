import React from "react";
import {
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-link-box">
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Contact Us</p>
          </li>
          <li>
            <address className="footer-link">
              <FaLocationArrow />
              <span className="footer-link-text">
                40021 Vijay Nagar , Indore, India
              </span>
            </address>
          </li>
          <li>
            <a href="tel:+557343673257" className="footer-link">
              <FaPhone />
              <span className="footer-link-text">+918319XXXXXX</span>
            </a>
          </li>
          <li>
            <a href="mailto:footcap@help.com" className="footer-link">
              <FaEnvelope />
              <span className="footer-link-text">Swaggin@gmail.com</span>
            </a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <p className="footer-list-title">My Account</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              <FaChevronRight />
              <span className="footer-link-text">My Account</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <FaChevronRight />
              <span className="footer-link-text">View Cart</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <FaChevronRight />
              <span className="footer-link-text">Wishlist</span>
            </a>
          </li>
          {/* <li>
            <a href="#" className="footer-link">
              <FaChevronRight />
              <span className="footer-link-text">Compare</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <FaChevronRight />
              <span className="footer-link-text">New Products</span>
            </a>
          </li> */}
        </ul>

        <div className="footer-list">
          <p className="footer-list-title">Newsletter</p>
          <p className="newsletter-text">
            Authoritatively morph 24/7 potentialities with error-free
            partnerships.
          </p>
          <form action="" className="newsletter-form">
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024{" "}
            <a href="#" className="copyright-link">
              Swaggin
            </a>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
