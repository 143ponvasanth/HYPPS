import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Grid,
    useTheme,
    useMediaQuery,
    styled
} from '@mui/material';
import {
    Star as StarIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    FormatQuote as QuoteIcon
} from '@mui/icons-material';

const testimonials = [
    {
        name: 'Ana Silva',
        role: 'Student',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'Learning languages has never been more enjoyable. The interactive sessions and cultural exchange make all the difference.',
        rating: 5
    },
    {
        name: 'David Kim',
        role: 'Teacher',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'LearnHub gave me the tools to monetize my expertise in business strategy. The student engagement here is phenomenal.',
        rating: 5
    },
    {
        name: 'Sarah Chen',
        role: 'Student',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'LearnHub transformed my career. The programming courses here are world-class, and the instructors genuinely care about your success.',
        rating: 5
    },
    {
        name: 'Marcus Rodriguez',
        role: 'Teacher',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'Teaching on LearnHub has been incredible. The platform makes it easy to connect with students worldwide and share my passion for music.',
        rating: 5
    },
    {
        name: 'Emily Johnson',
        role: 'Student',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'The art courses here opened up a whole new world for me. Amazing community and supportive instructors who push you to grow.',
        rating: 5
    }
];

const stats = [
    { value: '4.9/5', label: 'Average Rating', color: 'primary' },
    { value: '15K+', label: 'Reviews', color: 'secondary' },
    { value: '98%', label: 'Satisfaction Rate', color: 'success.main' },
    { value: '50K+', label: 'Success Stories', color: 'warning.main' }
];

const Dot = styled('div')(({ active, theme }) => ({
    width: active ? 24 : 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[400],
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[500]
    }
}));

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const [slideDirection, setSlideDirection] = useState('right');

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
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideDirection('right');
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => {
        setSlideDirection('right');
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setSlideDirection('left');
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToTestimonial = (index) => {
        setSlideDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <Box
            id="testimonials-section"
            sx={{
                py: 8,
                px: isMobile ? 2 : 4,
                backgroundColor: 'background.paper',
                position: 'relative',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                {/* Header */}
                <Box sx={{ 
                    textAlign: 'center', 
                    mb: 6,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
                }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1.75rem'
                            }
                        }}
                    >
                        What Our Community Says
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: 'auto' }}
                    >
                        Join thousands of learners and teachers who are transforming their lives through education
                    </Typography>
                </Box>

                {/* Testimonial Card */}
                <Box sx={{
                    position: 'relative',
                    maxWidth: 900,
                    mx: 'auto',
                    mb: 6
                }}>
                    {/* Navigation Buttons */}
                    <IconButton
                        onClick={prevTestimonial}
                        sx={{
                            position: 'absolute',
                            left: isMobile ? -12 : -40,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'background.paper',
                            boxShadow: 2,
                            zIndex: 1,
                            '&:hover': {
                                backgroundColor: 'background.paper',
                                transform: 'translateY(-50%) scale(1.1)'
                            },
                            opacity: isVisible ? 1 : 0,
                            transition: 'opacity 0.4s ease-out 0.3s, transform 0.2s ease'
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton
                        onClick={nextTestimonial}
                        sx={{
                            position: 'absolute',
                            right: isMobile ? -12 : -40,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'background.paper',
                            boxShadow: 2,
                            zIndex: 1,
                            '&:hover': {
                                backgroundColor: 'background.paper',
                                transform: 'translateY(-50%) scale(1.1)'
                            },
                            opacity: isVisible ? 1 : 0,
                            transition: 'opacity 0.4s ease-out 0.3s, transform 0.2s ease'
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>

                    {/* Testimonial Content */}
                    <Box sx={{
                        background: 'linear-gradient(135deg, #f0f7ff 0%, #f8f5ff 100%)',
                        borderRadius: 4,
                        p: isMobile ? 3 : 4,
                        boxShadow: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        minHeight: isMobile ? 320 : 280
                    }}>
                        <QuoteIcon
                            sx={{
                                position: 'absolute',
                                right: isMobile ? 16 : 24,
                                top: isMobile ? 16 : 24,
                                fontSize: 60,
                                color: 'primary.light',
                                opacity: 0.5,
                                transition: 'all 0.3s ease'
                            }}
                        />

                        <Box sx={{ 
                            position: 'relative', 
                            zIndex: 1,
                            opacity: isVisible ? 1 : 0,
                            transition: 'opacity 0.6s ease-out 0.2s'
                        }}>
                            {/* Rating */}
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mb: 3,
                                '& .MuiSvgIcon-root': {
                                    color: 'warning.main',
                                    transition: 'transform 0.3s ease',
                                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                                    '&:nth-of-type(1)': { transitionDelay: '0.3s' },
                                    '&:nth-of-type(2)': { transitionDelay: '0.4s' },
                                    '&:nth-of-type(3)': { transitionDelay: '0.5s' },
                                    '&:nth-of-type(4)': { transitionDelay: '0.6s' },
                                    '&:nth-of-type(5)': { transitionDelay: '0.7s' }
                                }
                            }}>
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} />
                                ))}
                            </Box>

                            {/* Quote */}
                            <Typography
                                variant={isMobile ? 'body1' : 'h6'}
                                sx={{
                                    fontStyle: 'italic',
                                    textAlign: 'center',
                                    mb: 4,
                                    px: isMobile ? 0 : 4,
                                    lineHeight: 1.6,
                                    transform: isVisible ? 'translateX(0)' : `translateX(${slideDirection === 'right' ? '20px' : '-20px'})`,
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
                                }}
                            >
                                "{currentTestimonial.quote}"
                            </Typography>

                            {/* Profile */}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: 2,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isVisible ? 1 : 0,
                                transition: 'transform 0.6s ease-out 0.2s, opacity 0.6s ease-out 0.2s'
                            }}>
                                <Avatar
                                    src={currentTestimonial.avatar}
                                    alt={currentTestimonial.name}
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        mr: 2,
                                        border: '3px solid white',
                                        boxShadow: 1,
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {currentTestimonial.name}
                                    </Typography>
                                    <Typography variant="body2" color="primary">
                                        {currentTestimonial.role}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Dots Indicator */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mb: 6,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.6s ease-out 0.4s'
                }}>
                    {testimonials.map((_, index) => (
                        <Dot
                            key={index}
                            active={index === currentIndex}
                            onClick={() => goToTestimonial(index)}
                        />
                    ))}
                </Box>

                {/* Stats - Outside the testimonial card */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: isTablet ? 2 : 4,
                    px: isMobile ? 2 : 0
                }}>
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                minWidth: isMobile ? '40%' : 'auto',
                                px: isMobile ? 1 : 2,
                                py: isMobile ? 1 : 0,
                                textAlign: 'center',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `opacity 0.6s ease-out ${0.5 + index * 0.1}s, transform 0.6s ease-out ${0.5 + index * 0.1}s`
                            }}
                        >
                            <Typography
                                variant={isMobile ? 'h6' : 'h5'}
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    color: stat.color
                                }}
                            >
                                {stat.value}
                            </Typography>
                            <Typography variant={isMobile ? 'body2' : 'body1'} color="text.secondary">
                                {stat.label}
                            </Typography>
                        </div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonials;