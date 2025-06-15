import React from 'react';
import { Box, Container, Typography, Button, useTheme, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { alpha } from '@mui/material/styles';
import teacherStudent from "../assets/images/teacher-looking-her-little-student.png";

const Hero = () => {
    const theme = useTheme();

    // Styles
    const styles = {
        heroSection: {
            position: 'relative',
            padding: { xs: '60px 16px', sm: '80px 16px', md: '120px 16px' },
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`
        },
        floatingIcon: {
            position: 'absolute',
            opacity: 0.1,
            fontSize: { xs: '4rem', md: '6rem' },
            color: theme.palette.primary.main,
            zIndex: 0
        },
        gradientText: {
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
        },
        primaryButton: {
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: 'white',
            padding: '10px 28px',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 600,
            boxShadow: 'none',
            margin: '8px 16px 8px 0',
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: `0 8px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                transform: 'translateY(-3px)',
                background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`
            }
        },
        secondaryButton: {
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            padding: '10px 28px',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 600,
            margin: '8px 16px 8px 0',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                transform: 'translateY(-3px)'
            }
        },
        heroImage: {
            maxWidth: '100%',
            height: 'auto',
            [theme.breakpoints.up('md')]: {
                maxWidth: '130%'
            }
        },
        contentContainer: {
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            textAlign: { xs: 'center', md: 'left' }
        },
        imageContainer: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: { xs: '20px 0', md: '0 60px' },
            maxWidth: { xs: '100%', md: '450px' }
        },
        divider: {
            width: '100%',
            height: '1px',
            background: `linear-gradient(to right, transparent, ${alpha(theme.palette.divider, 0.5)}, transparent)`,
            margin: { xs: '20px 0', md: '40px 0' },
            opacity: 0.5
        },
        statsContainer: {
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto'
        },
        statCard: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: alpha(theme.palette.background.paper, 0.7),
            backdropFilter: 'blur(8px)',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }
        },
        statNumber: (color) => ({
            fontSize: { xs: '24px', sm: '30px' },
            fontWeight: 700,
            color: color,
            marginBottom: '8px',
            lineHeight: 1
        }),
        statLabel: {
            color: theme.palette.text.secondary,
            fontWeight: 500,
            fontSize: { xs: '0.9rem', sm: '1rem' }
        },
        headingContainer: {
            pl: { xs: 0, md: '60px' }, // This will align with the ANY word
            mb: 3,
        },
        anyContainer: {
            display: 'flex',
            alignItems: 'flex-start',
            position: 'relative',
            left: 0, // Changed from { xs: 0, md: '60px' } to 0
            gap: { xs: '20px', md: '40px' },
            mb: 2,
            justifyContent: { xs: 'center', md: 'flex-start' }
        },
        wordsContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            gap: '0.3rem',
            textAlign: 'left'
        }
    };

    // Keyframes for animations
    const keyframes = `
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;

    return (
        <Box component="section" sx={styles.heroSection}>
            <style>{keyframes}</style>

            {/* Floating Icons */}
            <Box sx={{ ...styles.floatingIcon, top: '10%', left: '5%', animation: 'float 6s ease-in-out infinite' }}>
                <SchoolIcon fontSize="inherit" />
            </Box>
            <Box sx={{ ...styles.floatingIcon, bottom: '10%', right: '5%', animation: 'float 4s ease-in-out infinite 1s' }}>
                <PeopleIcon fontSize="inherit" />
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 10 }} alignItems="center">
                    {/* Left Column - Content */}
                    <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                        <Box sx={styles.contentContainer}>
                            <Box sx={styles.headingContainer}>
                                <Typography
                                    component="div"
                                    fontWeight="800"
                                    sx={{
                                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                        lineHeight: 1.2,
                                        animation: 'fadeIn 1s ease-out',
                                    }}
                                >
                                    {/* Top Heading */}
                                    <Box sx={{ mb: 1 }}>Teach & Learn</Box>

                                    {/* ANY + right words in row */}
                                    <Box sx={styles.anyContainer}>
                                        {/* ANY */}
                                        <Box
                                            sx={{
                                                ...styles.gradientText,
                                                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                                                fontWeight: 800,
                                                minWidth: { xs: '100px', md: '130px' },
                                            }}
                                        >
                                            ANY
                                        </Box>

                                        {/* thing, where, time */}
                                        <Box sx={styles.wordsContainer}>
                                            <Box>thing</Box>
                                            <Box>where</Box>
                                            <Box>time</Box>
                                        </Box>
                                    </Box>
                                </Typography>
                            </Box>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                mb={4}
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                    maxWidth: '500px',
                                    animation: 'fadeIn 1s ease-out 0.2s',
                                    animationFillMode: 'both',
                                    mx: { xs: 'auto', md: 0 }
                                }}
                            >
                                Empowering passionate teachers and eager learners to connect, grow, and achieve together.
                            </Typography>

                            {/* Buttons */}
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                animation: 'fadeIn 1s ease-out 0.4s',
                                animationFillMode: 'both',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                alignItems: 'center'
                            }}>
                                <Button
                                    endIcon={<ArrowForwardIcon />}
                                    sx={styles.primaryButton}
                                >
                                    Become a Teacher
                                </Button>
                                <Button
                                    endIcon={<ArrowForwardIcon />}
                                    sx={styles.secondaryButton}
                                >
                                    Join as Learner
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column - Image */}
                    <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                        <Box sx={styles.imageContainer}>
                            <Box
                                component="img"
                                src={teacherStudent}
                                alt="Teacher and student learning together"
                                sx={styles.heroImage}
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Divider and Stats Section - Now placed below both columns */}
                <Box sx={{
                    mt: { xs: 4, md: 8 },
                    animation: 'fadeIn 1s ease-out 0.6s',
                    animationFillMode: 'both'
                }}>
                    <Box sx={styles.divider} />
                    <Box sx={styles.statsContainer}>
                        <Box sx={{
                            ...styles.statCard,
                            animation: 'slideUp 0.8s ease-out 0.7s',
                            animationFillMode: 'both'
                        }}>
                            <Box sx={styles.statNumber('#2563eb')}>10K+</Box>
                            <Box sx={styles.statLabel}>Active Teachers</Box>
                        </Box>
                        <Box sx={{
                            ...styles.statCard,
                            animation: 'slideUp 0.8s ease-out 0.8s',
                            animationFillMode: 'both'
                        }}>
                            <Box sx={styles.statNumber('#9333ea')}>50K+</Box>
                            <Box sx={styles.statLabel}>Students Worldwide</Box>
                        </Box>
                        <Box sx={{
                            ...styles.statCard,
                            animation: 'slideUp 0.8s ease-out 0.9s',
                            animationFillMode: 'both'
                        }}>
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