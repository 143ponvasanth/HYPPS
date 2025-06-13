import React from 'react';
import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
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
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const benefits = [
        {
            icon: <EmojiObjectsIcon fontSize="large" />,
            title: "No Setup Fees",
            description: "Start for free, grow at your pace"
        },
        {
            icon: <SupportAgentIcon fontSize="large" />,
            title: "24/7 Support",
            description: "We're here whenever you need help"
        },
        {
            icon: <PublicIcon fontSize="large" />,
            title: "Global Reach",
            description: "Connect with learners worldwide"
        }
    ];

    return (
        <Box
            sx={{
                position: 'relative',
                py: { xs: 8, md: 12 },
                px: { xs: 2, sm: 4 },
                overflow: 'hidden',
                background: 'linear-gradient(to right, #2563eb, #9333ea, #db2777)',
                color: 'white',
                textAlign: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }
            }}
        >
            {/* Floating decorative elements */}
            <StarIcon sx={{
                position: 'absolute',
                top: 40,
                left: 40,
                fontSize: 32,
                opacity: 0.2,
                color: 'white'
            }} />
            <StarIcon sx={{
                position: 'absolute',
                bottom: 40,
                right: 40,
                fontSize: 48,
                opacity: 0.2,
                color: 'white'
            }} />
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: 80,
                width: 128,
                height: 128,
                borderRadius: '50%',
                border: '2px solid white',
                opacity: 0.1,
                transform: 'translateY(-50%)'
            }} />
            <Box sx={{
                position: 'absolute',
                top: 80,
                right: '25%',
                width: 64,
                height: 64,
                borderRadius: '50%',
                border: '2px solid white',
                opacity: 0.1
            }} />

            <Box sx={{
                position: 'relative',
                maxWidth: '56rem',
                mx: 'auto'
            }}>
                {/* Main heading section */}
                <Box sx={{ mb: 4 }}>
                    <StarIcon sx={{
                        fontSize: 64,
                        color: '#fef08a',
                        mb: 3
                    }} />
                    <Typography variant={isMobile ? 'h4' : 'h3'} component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Ready to Share or Learn<br />
                        <Box component="span" sx={{ color: '#fef08a' }}>Something New?</Box>
                    </Typography>
                    <Typography variant={isMobile ? 'body1' : 'h6'} sx={{
                        maxWidth: '42rem',
                        mx: 'auto',
                        opacity: 0.9,
                        lineHeight: 1.75
                    }}>
                        Join our global community of learners and teachers. Transform your passion into expertise
                        or discover new skills that will change your life.
                    </Typography>
                </Box>

                {/* Buttons */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: { xs: 4, md: 8 }
                }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            borderRadius: '9999px',
                            px: 4,
                            py: 2,
                            fontWeight: 'bold',
                            backgroundColor: 'white',
                            color: 'grey.900',
                            '&:hover': {
                                backgroundColor: 'grey.100'
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
                            borderRadius: '9999px',
                            px: 4,
                            py: 2,
                            fontWeight: 'bold',
                            borderWidth: 2,
                            '&:hover': {
                                borderWidth: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                        startIcon={<BookIcon />}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Find a Class
                    </Button>
                </Box>

                {/* Benefits grid */}
                <Grid container spacing={3} sx={{ mt: isMobile ? 4 : 8 }}>
                    {benefits.map((benefit, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Box sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 2,
                                p: 3,
                                height: '100%'
                            }}>
                                {benefit.icon}
                                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    {benefit.title}
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                                    {benefit.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default CTABanner;