import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Container,
    Box,
    IconButton,
    Typography,
    Button,
    Link,
    Divider,
    useMediaQuery,
    useTheme,
    Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#' },
        { label: 'Browse Classes', href: '#' },
        { label: 'Become a Teacher', href: '#' }
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                bgcolor: scrolled ? 'background.paper' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                boxShadow: scrolled ? 1 : 0,
                transition: 'all 0.3s ease',
                py: 1
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ alignItems: 'stretch' }}>
                    {/* Logo Section */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: isMobile ? 1 : 0,
                        mr: 2
                    }}>
                        <Button
                            startIcon={
                                <SchoolIcon sx={{
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    p: 0.5,
                                    borderRadius: 1,
                                    fontSize: '2rem'
                                }} />
                            }
                            href="#"
                            sx={{
                                textTransform: 'none',
                                '& .MuiButton-startIcon': { mr: 1 }
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="span"
                                sx={{
                                    fontWeight: 'bold',
                                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}
                            >
                                HYPPS
                            </Typography>
                        </Button>
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{
                            display: 'flex',
                            flexGrow: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    color="text.primary"
                                    underline="none"
                                    sx={{
                                        mx: 2,
                                        fontWeight: 500,
                                        fontSize: '0.95rem',
                                        '&:hover': {
                                            color: 'primary.main',
                                            transform: 'translateY(-2px)'
                                        },
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Box>
                    )}

                    {/* Auth Buttons */}
                    {!isMobile ? (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 50,
                                    px: 3,
                                    py: 1,
                                    fontWeight: 500,
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 1
                                    },
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    borderRadius: 50,
                                    px: 3,
                                    py: 1,
                                    fontWeight: 500,
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 3
                                    },
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: 'auto'
                        }}>
                            <IconButton
                                color="inherit"
                                aria-label="open menu"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: scrolled ? 'text.primary' : 'common.white'
                                }}
                            >
                                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>

                {/* Mobile Menu - Collapsible */}
                <Collapse in={isMobile && mobileOpen} timeout="auto" unmountOnExit>
                    <Box sx={{
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        p: 2,
                        mx: 2,
                        mb: 2,
                        boxShadow: 3,
                        transition: 'all 0.3s ease'
                    }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                href={item.href}
                                fullWidth
                                sx={{
                                    justifyContent: 'flex-start',
                                    px: 2,
                                    py: 1.5,
                                    color: 'text.primary',
                                    '&:hover': {
                                        color: 'primary.main',
                                        backgroundColor: 'action.hover'
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Divider sx={{ my: 1 }} />
                        <Button
                            fullWidth
                            sx={{
                                justifyContent: 'flex-start',
                                px: 2,
                                py: 1.5,
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main',
                                    backgroundColor: 'action.hover'
                                }
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 1,
                                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                borderRadius: 50,
                                py: 1.5,
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: 2
                                },
                                transition: 'all 0.2s ease'
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Collapse>
            </Container>
        </AppBar>
    );
};

export default Navbar;