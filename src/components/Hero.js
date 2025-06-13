import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { alpha } from '@mui/material/styles';

const Hero = () => {
    const theme = useTheme();

    // Styles
    const styles = {
        heroSection: {
            position: 'relative',
            paddingTop: '110px',
            paddingBottom: '64px',
            paddingLeft: '16px',
            paddingRight: '16px',
            overflow: 'hidden',
            background: `linear-gradient(to bottom right, ${alpha(theme.palette.primary.light, 0.2)}, ${alpha(theme.palette.secondary.light, 0.2)}, ${alpha(theme.palette.error.light, 0.1)})`
        },
        floatingIcon: {
            position: 'absolute',
            opacity: 0.2,
            fontSize: '4rem',
            color: theme.palette.primary.main
        },
        gradientText: {
            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline'
        },
        primaryButton: {
            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            color: 'white',
            padding: '12px 24px',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: 'none',
            margin: '0 8px',
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: theme.shadows[4],
                transform: 'scale(1.05)',
                background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
            }
        },
        secondaryButton: {
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            padding: '12px 24px',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 600,
            margin: '0 8px',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: 'white'
            }
        },
        divider: {
            width: '100%',
            height: '1px',
            background: `linear-gradient(to right, transparent, ${theme.palette.divider}, transparent)`,
            marginTop: '32px',
            marginBottom: '32px'
        },
        statsContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            maxWidth: '56rem',
            margin: '0 auto'
        },
        statCard: {
            textAlign: 'center',
            padding: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        },
        statNumber: (color) => ({
            fontSize: '30px',
            fontWeight: 700,
            color: color,
            marginBottom: '8px'
        }),
        statLabel: {
            color: '#4b5563',
            fontWeight: 500
        }
    };

    // Keyframes
    const keyframes = `
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;

    return (
        <Box component="section" sx={styles.heroSection}>
            <style>{keyframes}</style>
            
            {/* Floating Icons */}
            <Box sx={{ ...styles.floatingIcon, top: '40px', left: '20px', animation: 'pulse 2s infinite' }}>
                <SchoolIcon fontSize="inherit" />
            </Box>
            
            <Box sx={{ ...styles.floatingIcon, top: '120px', right: '40px', animation: 'bounce 2s infinite' }}>
                <PeopleIcon fontSize="inherit" />
            </Box>

            <Container maxWidth="md">
                <Box textAlign="center">
                    {/* Headline */}
                    <Typography variant="h3" component="h2" fontWeight="bold" mb={2}>
                        <Box component="span" sx={styles.gradientText}>*Learn Anything.</Box>
                    </Typography>
                    
                    <Typography variant="h2" component="h1" fontWeight="bold" mb={3}>
                        Teach Everything. Anywhere.
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" mb={4} maxWidth="sm" mx="auto" lineHeight={1.6}>
                        A global platform where anyone can teach and learn skills—from coding to cooking,
                        from any corner of the world.
                    </Typography>

                    {/* Buttons */}
                    <Box display="flex" justifyContent="center" flexWrap="wrap" mb={6}>
                        <Button endIcon={<ArrowForwardIcon />} sx={styles.primaryButton}>
                            Become a Teacher
                        </Button>
                        <Button endIcon={<ArrowForwardIcon />} sx={styles.secondaryButton}>
                            Join as Student
                        </Button>
                    </Box>

                    {/* Divider */}
                    <Box sx={styles.divider} />

                    {/* Stats */}
                    <Box sx={styles.statsContainer}>
                        <Box sx={styles.statCard}>
                            <Box sx={styles.statNumber('#2563eb')}>10K+</Box>
                            <Box sx={styles.statLabel}>Active Teachers</Box>
                        </Box>
                        <Box sx={styles.statCard}>
                            <Box sx={styles.statNumber('#9333ea')}>50K+</Box>
                            <Box sx={styles.statLabel}>Students Worldwide</Box>
                        </Box>
                        <Box sx={styles.statCard}>
                            <Box sx={styles.statNumber('#db2777')}>200+</Box>
                            <Box sx={styles.statLabel}>Course Categories</Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;