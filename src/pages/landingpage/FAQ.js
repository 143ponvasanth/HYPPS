import React, { useState, useEffect } from 'react';
import { Add, Remove, HelpOutline } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer, isVisible }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`FAQ-item ${isVisible ? 'item-visible' : ''}`}>
            <div className="FAQ-question-container">
                <span className="FAQ-question">
                    {question}
                </span>
                <IconButton
                    onClick={() => setIsOpen(!isOpen)}
                    size="small"
                    style={{ color: '#4b5563' }}
                >
                    {isOpen ? <Remove /> : <Add />}
                </IconButton>
            </div>
            <div className={`FAQ-answer-container ${isOpen ? 'open' : ''}`}>
                <div className="FAQ-answer">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = ({ onViewAll }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('faq-section');
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

    const mainFAQs = [
        {
            question: "How do I join a live class?",
            answer: "Search for your topic, select a teacher, send a join request. Once approved, you can join the live session."
        },
        {
            question: "Will I get a certificate after completing a course?",
            answer: "Yes! After completing the course, you'll receive an auto-generated certificate from the platform."
        },
        {
            question: "Who can become a teacher here?",
            answer: "Anyone with skills and passion can teach—no formal degree or certificate required."
        },
        {
            question: "How do I earn from teaching?",
            answer: "Set a class fee, create batches, and earn directly when students enroll and attend."
        },
        {
            question: "Is this platform safe for teachers and students?",
            answer: "Yes! We use AI and manual review to ensure a safe and respectful learning environment."
        },
        {
            question: "What happens after I click \"Connect\" on a teacher?",
            answer: "The teacher will review your request. If accepted, chat and class access will be enabled."
        }
    ];

    return (
        <div id="faq-section" className={`FAQ ${isVisible ? 'faq-visible' : ''}`}>
            {/* Animated background icons */}
            <div className={`FAQ-background-icons ${isVisible ? 'icons-visible' : ''}`}>
                <HelpOutline className="FAQ-help-icon" style={{
                    top: '80px',
                    left: '64px',
                    width: '48px',
                    height: '48px',
                    color: '#fed7aa',
                    opacity: 0.4,
                    animation: 'FAQ-pulse 3s infinite 0s'
                }} />
                <HelpOutline className="FAQ-help-icon" style={{
                    top: '128px',
                    right: '80px',
                    width: '32px',
                    height: '32px',
                    color: '#e9d5ff',
                    opacity: 0.3,
                    animation: 'FAQ-pulse 4s infinite 1s'
                }} />
                <HelpOutline className="FAQ-help-icon" style={{
                    top: '240px',
                    left: '32px',
                    width: '40px',
                    height: '40px',
                    color: '#bfdbfe',
                    opacity: 0.35,
                    animation: 'FAQ-pulse 3.5s infinite 2s'
                }} />
                <HelpOutline className="FAQ-help-icon" style={{
                    bottom: '160px',
                    right: '48px',
                    width: '56px',
                    height: '56px',
                    color: '#fbcfe8',
                    opacity: 0.25,
                    animation: 'FAQ-pulse 4.5s infinite 0.5s'
                }} />
                <HelpOutline className="FAQ-help-icon" style={{
                    bottom: '240px',
                    left: '96px',
                    width: '24px',
                    height: '24px',
                    color: '#bbf7d0',
                    opacity: 0.4,
                    animation: 'FAQ-pulse 3s infinite 1.5s'
                }} />
                <HelpOutline className="FAQ-help-icon" style={{
                    top: '320px',
                    right: '128px',
                    width: '64px',
                    height: '64px',
                    color: '#fef08a',
                    opacity: 0.2,
                    animation: 'FAQ-pulse 5s infinite 2.5s'
                }} />
                <HelpOutline className="FAQ-help-icon" style={{
                    top: '160px',
                    left: '50%',
                    width: '36px',
                    height: '36px',
                    color: '#c7d2fe',
                    opacity: 0.3,
                    animation: 'FAQ-pulse 3.5s infinite 3s'
                }} />
                <HelpOutline className="FAQ-help-icon" style={{
                    bottom: '80px',
                    right: '33.3333%',
                    width: '44px',
                    height: '44px',
                    color: '#fecaca',
                    opacity: 0.35,
                    animation: 'FAQ-pulse 4s infinite 0.8s'
                }} />
            </div>

            <div className="FAQ-container">
                {/* Header */}
                <div className={`FAQ-header ${isVisible ? 'header-visible' : ''}`}>
                    <h1 className="FAQ-title">
                        Frequently asked questions
                    </h1>
                </div>

                {/* FAQ List */}
                <div className={`FAQ-list ${isVisible ? 'list-visible' : ''}`}>
                    <div className="FAQ-items">
                        {mainFAQs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                </div>

                {/* View All FAQs Link */}
                <div className={`FAQ-view-all ${isVisible ? 'view-all-visible' : ''}`}>
                    <Button
                        variant="outlined"
                        endIcon={<ChevronRight size={20} />}
                        sx={{
                            color: '#374151',
                            border: 'none', 
                            padding: '0.5rem 1.5rem',
                            borderRadius: '0.5rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: '#f3f4f6',
                                border: 'none',
                            }
                        }}
                    >
                        View All FAQs
                    </Button>

                </div>

                {/* Still have questions section */}
                <div className={`FAQ-contact ${isVisible ? 'contact-visible' : ''}`}>
                    <h2 className="FAQ-contact-title">
                        Still have questions?
                    </h2>
                    <p className="FAQ-contact-text">
                        Please describe your case to receive the most accurate advice.
                    </p>
                    <Button
                        variant="contained"
                        className="FAQ-contact-button"
                    >
                        Contact us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;