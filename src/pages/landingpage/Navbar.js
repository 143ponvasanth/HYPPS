import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@mui/material';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Browse Classes', href: '#' },
        { name: 'Browse Teachers', href: '#' },
        { name: 'Become a Teacher', href: '#' }
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-content">
                        <div className="logo-container">
                            <div className="logo">
                                <span className="logo-text">HYPPS</span>
                                <div className="logo-dot"></div>
                            </div>
                        </div>
                        <div className="desktop-nav">
                            <div className="nav-links">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`nav-link ${activeLink === link.name ? 'active' : ''}`}
                                        onClick={() => handleLinkClick(link.name)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="nav-actions">
                            <Button
                                variant="outlined"
                                className="login-button outlined"
                                sx={{
                                    minWidth: 'auto',
                                    padding: '0.4rem 1.1rem',
                                    textTransform: 'none',
                                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
                                    fontWeight: 500,
                                    borderRadius: '0.5rem',
                                    borderColor: '#e5e7eb',
                                    color: '#111827',
                                    '&:hover': {
                                        backgroundColor: '#f3f4f6',
                                        borderColor: '#e5e7eb'
                                    }
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                className="login-button filled"
                                sx={{
                                    minWidth: 'auto',
                                    padding: '0.4rem 1.1rem',
                                    textTransform: 'none',
                                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
                                    fontWeight: 500,
                                    borderRadius: '0.5rem',
                                    backgroundColor: '#111827',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#111827',
                                        opacity: 0.9
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </div>
                        <div className="mobile-menu-button">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="menu-toggle"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav">
                    <div className="mobile-nav-content">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`mobile-nav-link ${activeLink === link.name ? 'active' : ''}`}
                                onClick={() => handleLinkClick(link.name)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mobile-login-container">
                            <Button
                                variant="outlined"
                                className="mobile-login-button outlined"
                                sx={{
                                    minWidth: 'auto',
                                    padding: '0.6rem 0.9rem',
                                    textTransform: 'none',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    borderRadius: '0.5rem',
                                    borderColor: '#e5e7eb',
                                    color: '#111827',
                                    '&:hover': {
                                        backgroundColor: '#f3f4f6',
                                        borderColor: '#e5e7eb'
                                    }
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                className="mobile-login-button filled"
                                sx={{
                                    minWidth: 'auto',
                                    padding: '0.6rem 0.9rem',
                                    textTransform: 'none',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    borderRadius: '0.5rem',
                                    backgroundColor: '#111827',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#111827',
                                        opacity: 0.9
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;