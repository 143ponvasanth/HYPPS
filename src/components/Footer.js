import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Link,
    Divider,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    School as SchoolIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon,
    YouTube as YouTubeIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const Footer = () => {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#1a1a1a',
                color: 'white',
                pt: isMobile ? 6 : 8,
                pb: 4
            }}
        >
            <Container maxWidth="lg">
                {/* Newsletter Section */}
                <Box sx={{
                    textAlign: 'center',
                    maxWidth: 600,
                    mx: 'auto',
                    mb: isMobile ? 4 : 6
                }}>
                    <Typography variant="h6" sx={{
                        fontWeight: 400,
                        mb: 3,
                        fontSize: isMobile ? '1rem' : '1.25rem',
                        lineHeight: 1.5,
                        px: isMobile ? 2 : 0
                    }}>
                        Get the latest course updates, learning tips, and exclusive offers delivered to your inbox.
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: isMobile ? 2 : 0
                    }}>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            size={isMobile ? 'small' : 'medium'}
                            sx={{
                                width: { xs: '100%', sm: 300 },
                                backgroundColor: 'white',
                                borderRadius: '4px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#4285f4',
                                color: 'white',
                                px: 4,
                                py: isMobile ? 1 : 1.5,
                                borderRadius: '4px',
                                fontWeight: 500,
                                textTransform: 'none',
                                fontSize: isMobile ? '0.875rem' : '1rem',
                                '&:hover': {
                                    backgroundColor: '#3367d6'
                                },
                                width: isMobile ? '100%' : 'auto'
                            }}
                            endIcon={!isMobile && <ArrowForwardIcon />}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Box>

                <Divider sx={{
                    borderColor: '#333',
                    my: isMobile ? 3 : 4,
                    borderWidth: 1
                }} />

                {/* Main Footer Content */}
                <Grid container spacing={isMobile ? 3 : 4}>
                    {/* Company Info */}
                    <Grid item xs={12} sm={6} md={4} sx={{
                        maxWidth: 500,
                        order: { xs: 1, sm: 1, md: 1 }
                    }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: isMobile ? '1.25rem' : '1.5rem'
                        }}>
                            LearnHub
                        </Typography>
                        <Typography variant="body2" sx={{
                            color: '#b3b3b3',
                            mb: 3,
                            lineHeight: 1.6,
                            fontSize: isMobile ? '0.8125rem' : '0.875rem'
                        }}>
                            Empowering learners and teachers worldwide through accessible, high-quality education. Join our global community and unlock your potential.
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: 1,
                            flexWrap: 'wrap'
                        }}>
                            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YouTubeIcon].map((Icon, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        minWidth: 0,
                                        p: 1,
                                        backgroundColor: '#333',
                                        '&:hover': {
                                            backgroundColor: '#4285f4'
                                        }
                                    }}
                                >
                                    <Icon sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }} />
                                </Button>
                            ))}
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={6} sm={3} md={2} sx={{
                        order: { xs: 2, sm: 2, md: 2 }
                    }}>
                        <Typography variant="subtitle1" sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: 'white',
                            fontSize: isMobile ? '0.9375rem' : '1rem'
                        }}>
                            Quick Links
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            alignItems: "flex-start"
                        }}>
                            {['About Us', 'How It Works', 'Browse Courses', 'Become a Teacher', 'Success Stories', 'Help Center'].map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: '#b3b3b3',
                                        fontSize: isMobile ? '0.75rem' : '0.875rem',
                                        '&:hover': {
                                            color: 'white'
                                        }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Categories */}
                    <Grid item xs={6} sm={3} md={3} sx={{
                        order: { xs: 3, sm: 3, md: 3 }
                    }}>
                        <Typography variant="subtitle1" sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: 'white',
                            fontSize: isMobile ? '0.9375rem' : '1rem'
                        }}>
                            Popular Categories
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            alignItems: "flex-start"
                        }}>
                            {['Programming', 'Design', 'Business', 'Languages', 'Music', 'Fitness', 'Cooking', 'Photography'].map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: '#b3b3b3',
                                        fontSize: isMobile ? '0.75rem' : '0.875rem',
                                        '&:hover': {
                                            color: 'white'
                                        }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={12} md={3} sx={{
                        order: { xs: 4, sm: 4, md: 4 },
                        mt: isMobile ? 2 : 0
                    }}>
                        <Typography variant="subtitle1" sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: 'white',
                            fontSize: isMobile ? '0.9375rem' : '1rem'
                        }}>
                            Contact Us
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            color: '#b3b3b3'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{
                                    mr: 1.5,
                                    color: '#4285f4',
                                    fontSize: isMobile ? '1rem' : '1.25rem'
                                }} />
                                <Typography variant="body2" sx={{
                                    fontSize: isMobile ? '0.75rem' : '0.875rem'
                                }}>
                                    support@learnhub.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{
                                    mr: 1.5,
                                    color: '#4285f4',
                                    fontSize: isMobile ? '1rem' : '1.25rem'
                                }} />
                                <Typography variant="body2" sx={{
                                    fontSize: isMobile ? '0.75rem' : '0.875rem'
                                }}>
                                    +1 (555) 123-4567
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <LocationIcon sx={{
                                    mr: 1.5,
                                    color: '#4285f4',
                                    fontSize: isMobile ? '1rem' : '1.25rem',
                                    mt: '3px'
                                }} />
                                <Typography variant="body2" sx={{
                                    fontSize: isMobile ? '0.75rem' : '0.875rem'
                                }}>
                                    123 Learning Street<br />
                                    Education City, EC 12345
                                </Typography>
                            </Box>
                        </Box>

                        {/* Trust Badges */}
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="subtitle2" sx={{
                                fontWeight: 600,
                                mb: 1,
                                color: 'white',
                                fontSize: isMobile ? '0.8125rem' : '0.875rem'
                            }}>
                                Trusted & Secure
                            </Typography>
                            <Typography variant="body2" sx={{
                                color: '#b3b3b3',
                                fontSize: isMobile ? '0.75rem' : '0.875rem'
                            }}>
                                SSL Secured | GDPR Compliant
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{
                    borderColor: '#333',
                    my: isMobile ? 3 : 4,
                    borderWidth: 1
                }} />

                {/* Bottom Bar */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2,
                    textAlign: isMobile ? 'center' : 'left'
                }}>
                    <Typography variant="body2" sx={{
                        color: '#b3b3b3',
                        fontSize: isMobile ? '0.75rem' : '0.875rem'
                    }}>
                        © {currentYear} LearnHub. All rights reserved.
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: isMobile ? 1.5 : 3,
                        flexWrap: 'wrap',
                        justifyContent: isMobile ? 'center' : 'flex-end'
                    }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                            <Link
                                key={index}
                                href="#"
                                underline="none"
                                sx={{
                                    color: '#b3b3b3',
                                    fontSize: isMobile ? '0.75rem' : '0.875rem',
                                    '&:hover': {
                                        color: 'white'
                                    }
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;