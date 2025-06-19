import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PublicIcon from '@mui/icons-material/Public';

const CTABanner = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmallTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('cta-banner');
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
            icon: <EmojiObjectsIcon />,
            title: "No Setup Fees",
            description: "Start for free, grow at your pace"
        },
        {
            icon: <SupportAgentIcon />,
            title: "24/7 Support",
            description: "We're here whenever you need help"
        },
        {
            icon: <PublicIcon />,
            title: "Global Reach",
            description: "Connect with learners worldwide"
        }
    ];

    return (
        <Box
            id="cta-banner"
            sx={{
                position: 'relative',
                py: { xs: 6, md: 10 },
                px: { xs: 2, sm: 4 },
                overflow: 'hidden',
                background: 'linear-gradient(to right, #2563eb, #9333ea, #db2777)',
                color: 'white',
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
        >
            {/* Content Container */}
            <Box sx={{
                position: 'relative',
                maxWidth: '800px',
                mx: 'auto',
                zIndex: 1
            }}>
                {/* Star Icon */}
                <StarIcon sx={{
                    fontSize: '3rem',
                    color: '#fef08a',
                    mb: 3,
                    filter: 'drop-shadow(0 0 8px rgba(254, 240, 138, 0.5))',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(45deg)',
                    transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
                }} />

                {/* Main Heading */}
                <Typography 
                    variant={isMobile ? 'h4' : 'h3'} 
                    component="h2" 
                    sx={{ 
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                        mb: 2,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                    }}
                >
                    Ready to Share or Learn<br />
                    <Box 
                        component="span" 
                        sx={{ 
                            color: '#fef08a',
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                            transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
                            display: 'inline-block'
                        }}
                    >
                        Something New?
                    </Box>
                </Typography>

                {/* Subheading */}
                <Typography 
                    variant={isMobile ? 'body1' : 'h6'} 
                    sx={{
                        maxWidth: '600px',
                        mx: 'auto',
                        opacity: isVisible ? 0.9 : 0,
                        lineHeight: 1.6,
                        mb: 4,
                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
                    }}
                >
                    Join our global community of learners and teachers. Transform your passion into expertise
                    or discover new skills that will change your life.
                </Typography>

                {/* Buttons */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 6,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s'
                }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            borderRadius: '50px',
                            px: 4,
                            py: 1.5,
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            backgroundColor: 'white',
                            color: '#1e40af',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                backgroundColor: '#f3f4f6',
                                boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)'
                            }
                        }}
                        startIcon={<SchoolIcon />}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Start Teaching
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        sx={{
                            borderRadius: '50px',
                            px: 4,
                            py: 1.5,
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            borderWidth: 2,
                            borderColor: 'white',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderWidth: 2,
                                borderColor: 'white'
                            }
                        }}
                        startIcon={<BookIcon />}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Find a Class
                    </Button>
                </Box>

                {/* Benefits Section */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : isSmallTablet ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: isMobile ? 3 : 4,
                    maxWidth: '800px',
                    mx: 'auto'
                }}>
                    {benefits.map((benefit, index) => (
                        <Box 
                            key={index} 
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '12px',
                                p: 3,
                                width: isMobile ? '100%' : '220px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `opacity 0.6s ease-out ${0.6 + index * 0.1}s, transform 0.6s ease-out ${0.6 + index * 0.1}s`,
                                '&:hover': {
                                    transform: isVisible ? 'translateY(-4px)' : 'translateY(20px)'
                                }
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                                '& svg': {
                                    fontSize: '1.8rem',
                                    color: '#fef08a',
                                    mr: 1.5,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'scale(1)' : 'scale(0.5)',
                                    transition: `opacity 0.4s ease-out ${0.7 + index * 0.1}s, transform 0.4s ease-out ${0.7 + index * 0.1}s`
                                }
                            }}>
                                {benefit.icon}
                                <Typography variant="h6" component="h3" sx={{ 
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}>
                                    {benefit.title}
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ 
                                opacity: isVisible ? 0.9 : 0,
                                color: 'white',
                                transition: `opacity 0.4s ease-out ${0.8 + index * 0.1}s`
                            }}>
                                {benefit.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default CTABanner;