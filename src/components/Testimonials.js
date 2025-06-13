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
    },
    {
        name: 'David Kim',
        role: 'Teacher',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'LearnHub gave me the tools to monetize my expertise in business strategy. The student engagement here is phenomenal.',
        rating: 5
    },
    {
        name: 'Ana Silva',
        role: 'Student',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'Learning languages has never been more enjoyable. The interactive sessions and cultural exchange make all the difference.',
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <Box
            sx={{
                py: 8,
                px: isMobile ? 2 : 4,
                backgroundColor: 'background.paper',
                position: 'relative'
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                    mb: 4
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
                            }
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
                            }
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
                                opacity: 0.5
                            }}
                        />

                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            {/* Rating */}
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mb: 3,
                                '& .MuiSvgIcon-root': {
                                    color: 'warning.main'
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
                                    lineHeight: 1.6
                                }}
                            >
                                "{currentTestimonial.quote}"
                            </Typography>

                            {/* Profile */}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: 2
                            }}>
                                <Avatar
                                    src={currentTestimonial.avatar}
                                    alt={currentTestimonial.name}
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        mr: 2,
                                        border: '3px solid white',
                                        boxShadow: 1
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
                    mt: 3,
                    mb: 6
                }}>
                    {testimonials.map((_, index) => (
                        <Dot
                            key={index}
                            active={index === currentIndex}
                            onClick={() => goToTestimonial(index)}
                        />
                    ))}
                </Box>

                {/* Stats */}
                <Grid container spacing={3} sx={{
                    mt: 4,
                    pt: 4,
                    borderTop: '1px solid',
                    borderColor: 'divider'
                }}>
                    {stats.map((stat, index) => (
                        <Grid item xs={6} sm={3} key={index}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 1,
                                        color: stat.color
                                    }}
                                >
                                    {stat.value}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Testimonials;