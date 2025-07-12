import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, FormatQuote } from '@mui/icons-material';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
        name: "Lucian Obrien",
        position: "CTO",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        text: "Learning languages has never been more enjoyable. The interactive sessions and cultural exchange make all the difference.",
        name: "Sarah Johnson",
        position: "Student",
        avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 3,
        text: "Professional, reliable, and innovative. Working with this team has been a game-changer for our business. Exceptional results every time.",
        name: "Michael Chen",
        position: "CEO",
        avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 4,
        text: "Fantastic collaboration and creative solutions. The team's expertise and dedication made our project a huge success. Couldn't be happier!",
        name: "Emma Rodriguez",
        position: "Creative Director",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 5,
        text: "Exceptional quality and timely delivery. The team's professionalism and expertise exceeded our expectations. Will definitely work with them again.",
        name: "David Wilson",
        position: "Operations Manager",
        avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 6,
        text: "The platform is intuitive and easy to use. It has helped me improve my language skills significantly in a short period of time.",
        name: "Jennifer Lee",
        position: "Marketing Director",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 7,
        text: "Outstanding service and support. The team went above and beyond to ensure our needs were met. Highly recommended!",
        name: "Robert Taylor",
        position: "Product Manager",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('testimonials-section');
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

    const nextTestimonial = () => {
        setSlideDirection('right');
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setSlideDirection('left');
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const selectTestimonial = (index) => {
        setSlideDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    const getVisibleAvatars = () => {
        const avatars = [];
        const total = testimonials.length;

        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + total) % total;
            avatars.push({
                ...testimonials[index],
                positionInView: i,
                isActive: i === 0
            });
        }

        return avatars;
    };

    const visibleAvatars = getVisibleAvatars();

    return (
        <div id="testimonials-section" className={`testimonials-container ${isVisible ? 'testimonials-visible' : ''}`}>
            <div className="testimonials-wrapper">
                <div className={`testimonials-header ${isVisible ? 'header-visible' : ''}`}>
                    <h2 className="testimonials-title">What Our Community Says</h2>
                </div>

                <div className={`testimonial-content ${isVisible ? 'content-visible' : ''}`}>
                    <button
                        onClick={prevTestimonial}
                        className="nav-button prev-button"
                    >
                        <ChevronLeft className="nav-icon" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="nav-button next-button"
                    >
                        <ChevronRight className="nav-icon" />
                    </button>

                    <div className="content-wrapper">
                        <div className={`quote-icon ${isVisible ? 'quote-visible' : ''}`}>
                            <FormatQuote />
                        </div>

                        <div className={`testimonial-text slide-${slideDirection} ${isVisible ? 'text-visible' : ''}`}>
                            <p>{currentTestimonial.text}</p>
                        </div>

                        <div className={`avatar-row ${isVisible ? 'avatars-visible' : ''}`}>
                            {visibleAvatars.map((testimonial) => (
                                <div
                                    key={`${testimonial.id}-${testimonial.positionInView}`}
                                    onClick={() => selectTestimonial((currentIndex + testimonial.positionInView + testimonials.length) % testimonials.length)}
                                    className={`avatar ${testimonial.isActive ? 'active' : ''} pos-${testimonial.positionInView} ${isVisible ? 'avatar-visible' : ''}`}
                                    style={{ transitionDelay: `${0.1 + Math.abs(testimonial.positionInView) * 0.1}s` }}
                                >
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                    />
                                    {testimonial.isActive && (
                                        <div className="active-indicator" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Customer Info */}
                        <div className={`customer-info slide-${slideDirection} ${isVisible ? 'customer-visible' : ''}`}>
                            <h3 className="customer-name">{currentTestimonial.name}</h3>
                            <p className="customer-position">{currentTestimonial.position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;