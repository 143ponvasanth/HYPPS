import React from 'react';
import {
    Box,
    Typography,
    Grid,
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
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const steps = [
        {
            icon: <SignUpIcon fontSize="large" />,
            title: 'Sign Up',
            description: 'Create your free account as a teacher or student.',
        },
        {
            icon: <LearnTeachIcon fontSize="large" />,
            title: 'Start Learning or Teaching',
            description: 'Browse classes or host your own lessons.',
        },
        {
            icon: <ConnectIcon fontSize="large" />,
            title: 'Connect & Grow',
            description: 'Engage with global learners, share skills, and build your community.',
        }
    ];

    return (
        <Box
            sx={{
                py: 10,
                px: { xs: 2, sm: 4, md: 6, lg: 8 },
                background: 'linear-gradient(135deg, #F9FAFB, #EFF6FF)'
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
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
                            fontSize: { xs: '1rem', sm: '1.25rem' }
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
                    mb: 8,
                    position: 'relative',
                    gap: isMobile ? 0 : 4
                }}>
                    {/* Horizontal divider for desktop */}
                    {!isMobile && (
                        <Divider
                            orientation="horizontal"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '16.66%',
                                right: '16.66%',
                                borderColor: 'divider',
                                borderBottomWidth: 2
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
                                p: 4,
                                width: 280,
                                height: 210,
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
                                mb: isMobile ? 4 : 0
                            }}>
                                {/* Step Number */}
                                <Box sx={{
                                    width: 35,
                                    height: 35,
                                    borderRadius: '50%',
                                    bgcolor: '#FFFFFF', // Matching the blue from screenshot
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

                                {/* Icon */}
                                <Box sx={{
                                    color: '#4e73df', // Matching the blue from screenshot
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
                                    color: '#5a5c69' // Dark gray from screenshot
                                }}>
                                    {step.title}
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: '#858796', // Light gray from screenshot
                                    lineHeight: 1.6
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
                                        borderBottomWidth: 2
                                    }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </Box>

                {/* CTA Section */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Ready to get started?
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: 3,
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                px: 6,
                                py: 1.5,
                                borderRadius: '50px',
                                fontSize: '1rem',
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
                                px: 6,
                                py: 1.5,
                                borderRadius: '50px',
                                fontSize: '1rem',
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