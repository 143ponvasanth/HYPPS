import React, { useState, useEffect } from 'react';
import { Lightbulb, Headphones, Globe } from 'lucide-react';
import './CTABanner.css';
import { Box, Button } from '@mui/material';

function CTABanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('cta-banner-section');
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

    const benefits = [
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "No Setup Fees",
            description: "Start for free, grow at your pace"
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "24/7 Support",
            description: "We're here whenever you need help"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Reach",
            description: "Connect with learners worldwide"
        }
    ];

    return (
        <div id="cta-banner-section" className={`CTABanner ${isVisible ? 'cta-banner-visible' : ''}`}>
            {/* Background Image */}
            <div className={`background-image ${isVisible ? 'bg-visible' : ''}`} />

            {/* Dark Overlay */}
            <div className={`dark-overlay ${isVisible ? 'overlay-visible' : ''}`} />

            {/* Content */}
            <div className="content">
                <div className="content-container">
                    {/* Ready to Share or Learn Label */}
                    <div className={`ready-label ${isVisible ? 'label-visible' : ''}`}>
                        <span>Ready to Share or Learn</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className={`main-heading ${isVisible ? 'heading-visible' : ''}`}>
                        <span className="orange-text">Something</span>{' '}
                        <span className="pink-text">New?</span>
                    </h1>

                    {/* Description Text */}
                    <div className={`description ${isVisible ? 'description-visible' : ''}`}>
                        <p>
                            Join our global community of learners and teachers. Transform your passion into expertise
                            or discover new skills that will change your life.
                        </p>
                    </div>

                    {/* Dual CTA Buttons */}
                    <Box className={`cta-buttons ${isVisible ? 'buttons-visible' : ''}`}>
                        <Button
                            className="cta-button-primary"
                            variant="contained"
                        >
                            <span>Start Teaching</span>
                        </Button>
                        <Button
                            className="cta-button-secondary"
                            variant="outlined"
                        >
                            <span>Find a Class</span>
                        </Button>
                    </Box>

                    {/* Benefit Cards */}
                    <div className={`benefits-grid ${isVisible ? 'benefits-visible' : ''}`}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={`benefit-card ${isVisible ? 'card-visible' : ''}`}
                                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                                <div className="benefit-icon">
                                    {benefit.icon}
                                </div>
                                <h3 className="benefit-title">
                                    {benefit.title}
                                </h3>
                                <p className="benefit-description">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTABanner;