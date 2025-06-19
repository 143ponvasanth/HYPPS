import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Divider,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    PersonAdd as SignUpIcon,
    MenuBook as LearnTeachIcon,
    People as ConnectIcon
} from '@mui/icons-material';

const HowItWorks = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Changed to 'sm' for better mobile detection
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Added tablet detection
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('how-it-works');
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

    const steps = [
        {
            icon: <SignUpIcon fontSize="large" />,
            title: 'Sign Up',
            description: 'Create your free account as a teacher or student.',
            color: '#4e73df',
        },
        {
            icon: <LearnTeachIcon fontSize="large" />,
            title: 'Start Learning or Teaching',
            description: 'Browse classes or host your own lessons.',
            color: '#1cc88a',
        },
        {
            icon: <ConnectIcon fontSize="large" />,
            title: 'Connect & Grow',
            description: 'Engage with global learners, share skills, and build your community.',
            color: '#f6c23e',
        }
    ];

    return (
        <Box
            id="how-it-works"
            sx={{
                py: { xs: 6, sm: 8, md: 10 },
                px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
                background: 'linear-gradient(135deg, #F9FAFB, #EFF6FF)',
            }}
        >
            <Box sx={{ 
                maxWidth: 1200, 
                mx: 'auto',
                px: { sm: 2, md: 0 } // Added padding for tablet
            }}>
                {/* Header Section */}
                <Box sx={{ 
                    textAlign: 'center', 
                    mb: { xs: 6, sm: 7, md: 8 },
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    transitionDelay: '0.1s'
                }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' }
                        }}
                    >
                        How It Works
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 800,
                            mx: 'auto',
                            fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
                            px: { xs: 1, sm: 0 }
                        }}
                    >
                        Getting started is simple. Join thousands of learners and teachers in just three easy steps.
                    </Typography>
                </Box>

                {/* Steps Section */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: { xs: 6, sm: 7, md: 8 },
                    position: 'relative',
                    gap: isMobile ? 0 : (isTablet ? 2 : 4),
                    flexWrap: isTablet ? 'wrap' : 'nowrap'
                }}>
                    {/* Horizontal divider for desktop */}
                    {!isMobile && (
                        <Divider
                            orientation="horizontal"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: isTablet ? '10%' : '16.66%',
                                right: isTablet ? '10%' : '16.66%',
                                borderColor: 'divider',
                                borderBottomWidth: 2,
                                opacity: isVisible ? 1 : 0,
                                transition: 'opacity 0.8s ease-out',
                                transitionDelay: '0.4s'
                            }}
                        />
                    )}

                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                p: { xs: 3, sm: 3, md: 4 },
                                width: { xs: '100%', sm: 280, md: 300 },
                                maxWidth: { xs: 280, sm: 'none' },
                                height: { xs: 'auto', sm: 210 },
                                minHeight: { xs: 180, sm: 210 },
                                position: 'relative',
                                backgroundColor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 5,
                                boxShadow: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: 3,
                                    transform: 'translateY(-5px)'
                                },
                                mb: isMobile ? 4 : 0,
                                mx: isMobile ? 'auto' : 0,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease',
                                transitionDelay: `${0.2 + index * 0.2}s`
                            }}>
                                {/* Step Number */}
                                <Box sx={{
                                    width: 35,
                                    height: 35,
                                    borderRadius: '50%',
                                    bgcolor: '#FFFFFF',
                                    color: '#4B5563',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3,
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: -20,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    boxShadow: 1,
                                    fontSize: "15px"
                                }}>
                                    {index + 1}
                                </Box>

                                {/* Icon with custom color */}
                                <Box sx={{
                                    color: step.color,
                                    fontSize: '2.5rem',
                                    mb: 2,
                                    mt: 4
                                }}>
                                    {step.icon}
                                </Box>

                                {/* Content */}
                                <Typography variant="h5" component="h3" sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: '#5a5c69',
                                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                                }}>
                                    {step.title}
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: '#858796',
                                    lineHeight: 1.6,
                                    fontSize: { xs: '0.9rem', sm: '1rem' }
                                }}>
                                    {step.description}
                                </Typography>
                            </Box>

                            {/* Vertical divider between steps on mobile */}
                            {isMobile && index < steps.length - 1 && (
                                <Divider
                                    orientation="horizontal"
                                    sx={{
                                        width: '80%',
                                        mx: 'auto',
                                        my: 2,
                                        borderColor: 'divider',
                                        borderBottomWidth: 2,
                                        opacity: isVisible ? 1 : 0,
                                        transition: 'opacity 0.6s ease-out',
                                        transitionDelay: `${0.3 + index * 0.2}s`
                                    }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </Box>

                {/* CTA Section */}
                <Box sx={{ 
                    textAlign: 'center',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    transitionDelay: '0.7s'
                }}>
                    <Typography variant="h6" color="text.secondary" sx={{ 
                        mb: 4,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                    }}>
                        Ready to get started?
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: { xs: 2, sm: 3 },
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                px: { xs: 4, sm: 6 },
                                py: 1.5,
                                borderRadius: '50px',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                fontWeight: 'bold',
                                textTransform: 'none',
                                boxShadow: 'none',
                                '&:hover': {
                                    boxShadow: 'none'
                                }
                            }}
                        >
                            Start Learning Today
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                px: { xs: 4, sm: 6 },
                                py: 1.5,
                                borderRadius: '50px',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2
                                }
                            }}
                        >
                            Become an Instructor
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HowItWorks;