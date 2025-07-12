import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './Hero.css';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('hero-section');
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial render

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="hero-section" className={`hero ${isVisible ? 'hero-visible' : ''}`}>
            <div className="hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-heading-group">
                            <h1 className="hero-main-heading">
                                <span className="hero-text-gray-900">Free </span>
                                <span className="hero-text-gray-400">Online</span>
                            </h1>
                            <h1 className="hero-main-heading">
                                <span className="hero-text-orange-500">
                                    Courses
                                    <div className="hero-underline"></div>
                                </span>
                                <span className="hero-text-gray-900"> from</span>
                            </h1>
                            <h1 className="hero-main-heading hero-text-gray-900">
                                the experts
                            </h1>
                        </div>
                        <p className="hero-description">
                            Empowering passionate Instructors and eager learners to connect,
                            grow, and achieve together.
                        </p>
                        <div className="hero-buttons">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#111827',
                                    color: 'white',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    '&:hover': {
                                        backgroundColor: '#1f2937',
                                    }
                                }}
                            >
                                Register as Instructor
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#374151',
                                    borderColor: '#e5e7eb',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    '&:hover': {
                                        backgroundColor: '#f3f4f6',
                                        borderColor: '#e5e7eb',
                                    }
                                }}
                            >
                                Join as Learner
                            </Button>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat-item">
                                <div className="hero-stat-dot" style={{ backgroundColor: '#2563eb' }}></div>
                                <div>
                                    <div className="hero-stat-number">14k+</div>
                                    <div className="hero-stat-label">Learners</div>
                                </div>
                            </div>
                            <div className="hero-stat-item">
                                <div className="hero-stat-dot" style={{ backgroundColor: '#9333ea' }}></div>
                                <div>
                                    <div className="hero-stat-number">1.05k+</div>
                                    <div className="hero-stat-label">Courses</div>
                                </div>
                            </div>
                            <div className="hero-stat-item">
                                <div className="hero-stat-dot" style={{ backgroundColor: '#db2777' }}></div>
                                <div>
                                    <div className="hero-stat-number">59k+</div>
                                    <div className="hero-stat-label">Graduates</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-illustration">
                        <div className="hero-blob"></div>
                        <div className="hero-image-container">
                            <img
                                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                                alt="Smiling woman with books"
                                className="hero-image"
                            />
                        </div>
                        <div className="hero-icon hero-icon-green">Dw</div>
                        <div className="hero-icon hero-icon-blue">Ps</div>
                        <div className="hero-icon hero-icon-purple">Ae</div>
                        <div className="hero-icon hero-icon-orange">Ai</div>
                        <div className="hero-card">
                            <div className="hero-card-content">
                                <div className="hero-card-icon">
                                    <span className="text-white text-xs font-bold">🐍</span>
                                </div>
                                <span className="hero-card-text">Python</span>
                            </div>
                        </div>
                        <div className="hero-pencil-main"></div>
                        <div className="hero-pencil-tip"></div>
                        <div className="hero-book hero-book-red"></div>
                        <div className="hero-book hero-book-blue"></div>
                        <div className="hero-book hero-book-green"></div>
                        <div className="hero-decorative-1"></div>
                        <div className="hero-decorative-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;