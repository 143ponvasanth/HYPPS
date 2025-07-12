import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { ArrowRight, ChevronLeft, ChevronRight, Users, Star } from 'lucide-react';
import './Categories.css';

function Categories() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const autoAdvanceRef = useRef(true);
    const interactionTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('categories-section');
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { name: 'Technology', students: 497, featured: true },
        { name: 'Health and Well...', students: 763 },
        { name: 'Travel', students: 684 },
        { name: 'Finance', students: 451 },
        { name: 'Education', students: 433 },
        { name: 'Food and Bever...', students: 463 },
        { name: 'Fashion', students: 951 },
        { name: 'Home and Garden', students: 194 },
        { name: 'Sports', students: 425 }
    ];

    // Group categories into slides of 3
    const slides = [];
    for (let i = 0; i < categories.length; i += 3) {
        slides.push(categories.slice(i, i + 3));
    }

    // Background images for each category
    const categoryBackgrounds = {
        'Technology': 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
        'Health and Well...': 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
        'Travel': 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        'Finance': 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
        'Education': 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
        'Food and Bever...': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        'Fashion': 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
        'Home and Garden': 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'Sports': 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800'
    };

    // Auto-advance carousel with pause on interaction
    useEffect(() => {
        if (!autoAdvanceRef.current) {
            // Resume auto-advance after 8 seconds of inactivity
            interactionTimeoutRef.current = setTimeout(() => {
                autoAdvanceRef.current = true;
            }, 8000);
            return () => clearTimeout(interactionTimeoutRef.current);
        }

        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length, currentSlide]);

    const handleNavigation = (direction) => {
        // Cancel any pending auto-advance resumption
        if (interactionTimeoutRef.current) {
            clearTimeout(interactionTimeoutRef.current);
        }

        // Temporarily disable auto-advance
        autoAdvanceRef.current = false;

        if (direction === 'next') {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        } else if (direction === 'prev') {
            setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
        }
    };

    const nextSlide = () => handleNavigation('next');
    const prevSlide = () => handleNavigation('prev');

    const goToSlide = (index) => {
        if (interactionTimeoutRef.current) {
            clearTimeout(interactionTimeoutRef.current);
        }
        autoAdvanceRef.current = false;
        setCurrentSlide(index);
    };

    return (
        <div id="categories-section" className={`Categories-container ${isVisible ? 'categories-visible' : ''}`}>
            <div className="Categories-content">
                {/* Left Content */}
                <div className={`Categories-left-content ${isVisible ? 'left-content-visible' : ''}`}>
                    <div className="Categories-mb-6">
                        <p className={`Categories-subheading ${isVisible ? 'subheading-visible' : ''}`}>
                            LOOKING FOR A
                        </p>
                        <h1 className={`Categories-heading ${isVisible ? 'heading-visible' : ''}`}>
                            Popular Categories
                        </h1>
                        <p className={`Categories-description ${isVisible ? 'description-visible' : ''}`}>
                            Discover trending categories with thousands of students already enrolled in various courses.
                        </p>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ChevronRight size={20} />}
                            className={`Categories-explore-button ${isVisible ? 'button-visible' : ''}`}
                        >
                            Explore more
                        </Button>
                    </div>
                </div>

                {/* Right Carousel */}
                <div className={`Categories-carousel-container ${isVisible ? 'carousel-visible' : ''}`}>
                    <div className="Categories-carousel-relative">
                        {/* Carousel Container */}
                        <div className="Categories-carousel-slides">
                            <div
                                className="Categories-carousel-track"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slideCategories, slideIndex) => (
                                    <div key={slideIndex} className="Categories-carousel-slide">
                                        <div className="Categories-categories-grid">
                                            {slideCategories.map((category, categoryIndex) => (
                                                <div
                                                    key={categoryIndex}
                                                    className={`Categories-category-card ${isVisible ? 'card-visible' : ''}`}
                                                    style={{ transitionDelay: `${0.1 + categoryIndex * 0.1}s` }}
                                                >
                                                    {/* Background Image */}
                                                    <div
                                                        className="Categories-category-bg"
                                                        style={{
                                                            backgroundImage: `url(${categoryBackgrounds[category.name]})`
                                                        }}
                                                    />

                                                    {/* Overlay */}
                                                    <div className="Categories-category-overlay" />

                                                    {/* Content */}
                                                    <div className="Categories-category-content">
                                                        <div className="Categories-category-header">
                                                            <h3 className="Categories-category-name">
                                                                {category.name}
                                                            </h3>
                                                            {category.featured && (
                                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            )}
                                                        </div>

                                                        <div className="Categories-category-students">
                                                            <Users className="w-3 h-3" />
                                                            <span>{category.students.toLocaleString()} students</span>
                                                        </div>
                                                        <div className="Categories-view-more">
                                                            <Button
                                                                variant="outlined"
                                                                size="small"
                                                                endIcon={<ArrowRight size={16} />}
                                                                className="Categories-view-more-button"
                                                            >
                                                                View More
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    {/* Hover Effect */}
                                                    <div className="Categories-category-hover-effect" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className={`Categories-nav-button Categories-prev-button ${isVisible ? 'nav-button-visible' : ''}`}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className={`Categories-nav-button Categories-next-button ${isVisible ? 'nav-button-visible' : ''}`}
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Dots Indicator */}
                        <div className={`Categories-dots-container ${isVisible ? 'dots-visible' : ''}`}>
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`Categories-dot ${index === currentSlide ? 'Categories-dot-active' : 'Categories-dot-inactive'}`}
                                />
                            ))}
                        </div>

                        {/* Slide Counter */}
                        <div className={`Categories-slide-counter ${isVisible ? 'counter-visible' : ''}`}>
                            {currentSlide + 1} / {slides.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;