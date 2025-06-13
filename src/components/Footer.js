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
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        'About Us',
        'How It Works',
        'Browse Courses',
        'Become a Teacher',
        'Success Stories',
        'Help Center'
    ];

    const categories = [
        'Programming',
        'Design',
        'Business',
        'Languages',
        'Music',
        'Fitness',
        'Cooking',
        'Photography'
    ];

    const socialIcons = [
        { icon: <FacebookIcon />, name: 'Facebook' },
        { icon: <TwitterIcon />, name: 'Twitter' },
        { icon: <InstagramIcon />, name: 'Instagram' },
        { icon: <LinkedInIcon />, name: 'LinkedIn' },
        { icon: <YouTubeIcon />, name: 'YouTube' }
    ];

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.grey[900],
                color: theme.palette.common.white,
                pt: 8,
                pb: 4
            }}
        >
            {/* Newsletter Section */}
            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: 'center',
                        maxWidth: 700,
                        mx: 'auto',
                        mb: 6,
                        px: isMobile ? 2 : 0
                    }}
                >
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                        Stay Updated
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Get the latest course updates, learning tips, and exclusive offers delivered to your inbox.
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: 2,
                            justifyContent: 'center'
                        }}
                    >
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            size="small"
                            sx={{
                                flex: 1,
                                maxWidth: 400,
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: theme.palette.grey[800],
                                    '& fieldset': {
                                        borderColor: theme.palette.grey[700],
                                    },
                                    '&:hover fieldset': {
                                        borderColor: theme.palette.grey[500],
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    color: theme.palette.common.white,
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                px: 4,
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: theme.shadows[4]
                                }
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Divider sx={{ borderColor: theme.palette.grey[800], my: 2 }} />

            {/* Main Footer Content */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Grid container spacing={4}>
                    {/* Company Info */}
                    <Grid item xs={12} md={6} lg={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box
                                sx={{
                                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    p: 1,
                                    borderRadius: 1,
                                    mr: 1
                                }}
                            >
                                <SchoolIcon sx={{ color: theme.palette.common.white }} />
                            </Box>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                                LearnHub
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            Empowering learners and teachers worldwide through accessible, high-quality education.
                            Join our global community and unlock your potential.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                            {socialIcons.map((social, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        minWidth: 0,
                                        p: 1,
                                        backgroundColor: theme.palette.grey[800],
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.main
                                        }
                                    }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </Button>
                            ))}
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                            Quick Links
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href="#"
                                        underline="none"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: theme.palette.text.secondary,
                                            mb: 1,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                color: theme.palette.common.white,
                                                transform: 'translateX(4px)'
                                            }
                                        }}
                                    >
                                        {link}
                                        <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '1rem', opacity: 0 }} />
                                    </Link>
                                </li>
                            ))}
                        </Box>
                    </Grid>

                    {/* Categories */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                            Popular Categories
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link
                                        href="#"
                                        underline="none"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: theme.palette.text.secondary,
                                            mb: 1,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                color: theme.palette.common.white,
                                                transform: 'translateX(4px)'
                                            }
                                        }}
                                    >
                                        {category}
                                        <ArrowForwardIcon sx={{ ml: 0.5, fontSize: '1rem', opacity: 0 }} />
                                    </Link>
                                </li>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                            Contact Us
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="body2" color="text.secondary">
                                    support@learnhub.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="body2" color="text.secondary">
                                    +1 (555) 123-4567
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <LocationIcon color="primary" sx={{ mr: 1, mt: 0.5 }} />
                                <Typography variant="body2" color="text.secondary">
                                    123 Learning Street<br />
                                    Education City, EC 12345
                                </Typography>
                            </Box>
                        </Box>

                        {/* Trust Badges */}
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ fontWeight: 600 }}>
                                Trusted & Secure
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.grey[800],
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    SSL Secured
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.grey[800],
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 1,
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    GDPR Compliant
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Divider sx={{ borderColor: theme.palette.grey[800], my: 2 }} />

            {/* Bottom Bar */}
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 3,
                        textAlign: isMobile ? 'center' : 'inherit'
                    }}
                >
                    <Typography variant="body2" color="text.secondary" sx={{ mb: isMobile ? 2 : 0 }}>
                        © {currentYear} LearnHub. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Link
                            href="#"
                            underline="none"
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                '&:hover': {
                                    color: theme.palette.common.white
                                }
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                '&:hover': {
                                    color: theme.palette.common.white
                                }
                            }}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                '&:hover': {
                                    color: theme.palette.common.white
                                }
                            }}
                        >
                            Cookie Policy
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;