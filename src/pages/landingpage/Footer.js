import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import { ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            {/* Newsletter Section */}
            <div className="footer-newsletter-section">
                <div className="footer-newsletter-wrapper">
                    <div className="footer-newsletter-content">
                        <h3 className="footer-newsletter-title">Stay Updated</h3>
                        <p className="footer-newsletter-text">
                            Get the latest course updates, learning tips, and exclusive offers delivered to your inbox.
                        </p>
                        <div className="footer-newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="footer-newsletter-input"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<ChevronRight size={20} />}
                                className="footer-newsletter-button"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="footer-main-content">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-company-info">
                        <div className="footer-logo-wrapper">
                            <span className="footer-logo-text">HYPPS</span>
                        </div>
                        <p className="footer-company-description">
                            Empowering learners and teachers worldwide through accessible, high-quality education.
                            Join our global community and unlock your potential.
                        </p>
                        <div className="footer-social-links">
                            <a href="#" className="footer-social-link">
                                <FaFacebook className="footer-social-icon" />
                            </a>
                            <a href="#" className="footer-social-link">
                                <FaTwitter className="footer-social-icon" />
                            </a>
                            <a href="#" className="footer-social-link">
                                <FaInstagram className="footer-social-icon" />
                            </a>
                            <a href="#" className="footer-social-link">
                                <FaLinkedin className="footer-social-icon" />
                            </a>
                            <a href="#" className="footer-social-link">
                                <FaYoutube className="footer-social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-section">
                        <h4 className="footer-links-title">Quick Links</h4>
                        <ul className="footer-links-list">
                            {['About Us', 'How It Works', 'Browse Courses', 'Become a Teacher', 'Success Stories', 'Help Center'].map((link) => (
                                <li key={link} className="footer-link-item">
                                    <a href="#" className="footer-link">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="footer-links-section">
                        <h4 className="footer-links-title">Popular Categories</h4>
                        <ul className="footer-links-list">
                            {['Programming', 'Design', 'Business', 'Languages', 'Music', 'Fitness', 'Cooking', 'Photography'].map((category) => (
                                <li key={category} className="footer-link-item">
                                    <a href="#" className="footer-link">
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact-section">
                        <h4 className="footer-links-title">Contact Us</h4>
                        <div className="footer-contact-info">
                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <Mail size={20} />
                                </div>
                                <span>support@HYPPS.com</span>
                            </div>
                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <Phone size={20} />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="footer-contact-item">
                                <div className="footer-contact-icon">
                                    <MapPin size={20} />
                                </div>
                                <span>123 Learning Street<br />Education City, EC 12345</span>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="footer-trust-badges">
                            <h5 className="footer-trust-title">Trusted & Secure</h5>
                            <div className="footer-badges-wrapper">
                                <div className="footer-badge">SSL Secured</div>
                                <div className="footer-badge">GDPR Compliant</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
                <div className="footer-bottom-wrapper">
                    <div className="footer-copyright">
                        © {currentYear} HYPPS. All rights reserved.
                    </div>
                    <div className="footer-legal-links">
                        <a href="#" className="footer-legal-link">
                            Privacy Policy
                        </a>
                        <a href="#" className="footer-legal-link">
                            Terms of Service
                        </a>
                        <a href="#" className="footer-legal-link">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;