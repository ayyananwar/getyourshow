import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Youtube } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">GetYourShow</h5>
            <p className="mb-3">Your premier destination for movies and events.</p>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white me-3" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-white" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="text-warning mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/movies" className="text-white text-decoration-none">Movies</Link></li>
              <li className="mb-2"><Link to="/events" className="text-white text-decoration-none">Events</Link></li>
              <li className="mb-2"><Link to="/offers" className="text-white text-decoration-none">Offers</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="text-warning mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
              <li className="mb-2"><Link to="/careers" className="text-white text-decoration-none">Careers</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="text-warning mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/terms" className="text-white text-decoration-none">Terms of Use</Link></li>
              <li className="mb-2"><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/faq" className="text-white text-decoration-none">FAQ</Link></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-3 pt-3 border-top border-secondary">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">&copy; {currentYear} GetYourShow. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">Made with ❤️ for entertainment lovers</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;