import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Divider,
    Grid,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Public as PublicIcon,
    LockOpen as LockOpenIcon,
    Schedule as ScheduleIcon,
    MonetizationOn as MonetizationOnIcon,
    Groups as GroupsIcon,
    Category as CategoryIcon
} from '@mui/icons-material';

const WhyChooseUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('why-choose-us');
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

    const features = [
        {
            icon: <PublicIcon fontSize="large" />,
            title: "Global Access",
            description: "Learn or teach from anywhere, anytime with just an internet connection."
        },
        {
            icon: <LockOpenIcon fontSize="large" />,
            title: "Zero Barriers",
            description: "No degrees or prerequisites. Just passion, skills, and a desire to grow."
        },
        {
            icon: <ScheduleIcon fontSize="large" />,
            title: "Flexible Scheduling",
            description: "Take or host classes at your own pace and convenience."
        },
        {
            icon: <MonetizationOnIcon fontSize="large" />,
            title: "Earn by Teaching",
            description: "Share your knowledge and monetize your skills effortlessly."
        },
        {
            icon: <GroupsIcon fontSize="large" />,
            title: "Community Driven",
            description: "Connect with a vibrant, supportive global learning community."
        },
        {
            icon: <CategoryIcon fontSize="large" />,
            title: "Wide Range of Subjects",
            description: "From coding to cooking, we've got everything covered."
        }
    ];

    return (
        <Box
            id="why-choose-us"
            sx={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: isMobile ? 3 : 4,
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    marginBottom: 3,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
                }}
            >
                Why Choose Us?
            </Typography>

            <Typography
                variant="h5"
                component="p"
                gutterBottom
                sx={{
                    marginBottom: 4,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                }}
            >
                Empowering people to teach and learn beyond boundaries.
            </Typography>

            <Divider sx={{
                marginBottom: 4,
                borderColor: 'divider',
                borderBottomWidth: 2,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease-out 0.3s'
            }} />

            <Grid container spacing={2} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: 2,
                            height: '100%',
                            minHeight: 200,
                            width: '100%', // Added to ensure consistent width
                            maxWidth: 300, // Added to prevent boxes from being too wide
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: `opacity 0.6s ease-out ${0.4 + index * 0.1}s, transform 0.6s ease-out ${0.4 + index * 0.1}s`
                        }}>
                            <Box sx={{
                                color: 'primary.main',
                                marginBottom: 1,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                '& svg': {
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                                    transition: `opacity 0.4s ease-out ${0.5 + index * 0.1}s, transform 0.4s ease-out ${0.5 + index * 0.1}s`
                                }
                            }}>
                                {feature.icon}
                            </Box>
                            <Typography
                                variant="h5"
                                component="h3"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    marginBottom: 1,
                                    opacity: isVisible ? 1 : 0,
                                    transition: `opacity 0.4s ease-out ${0.6 + index * 0.1}s`
                                }}
                            >
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.5,
                                    opacity: isVisible ? 1 : 0,
                                    transition: `opacity 0.4s ease-out ${0.7 + index * 0.1}s`,
                                    textAlign: 'center' // Ensure text is centered
                                }}
                            >
                                {feature.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{
                marginTop: 4,
                marginBottom: 4,
                borderColor: 'divider',
                borderBottomWidth: 2,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease-out 1.1s'
            }} />

            <Typography
                variant="h6"
                component="p"
                sx={{
                    fontWeight: 'medium',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.6s ease-out 1.2s, transform 0.6s ease-out 1.2s'
                }}
            >
                Join 50,000+ learners and teachers worldwide
            </Typography>
        </Box>
    );
};

export default WhyChooseUs;