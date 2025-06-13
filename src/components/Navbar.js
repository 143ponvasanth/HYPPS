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
    styled
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
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Logo Section */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                        <Button
                            startIcon={
                                <SchoolIcon sx={{
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    p: 0.5,
                                    borderRadius: 1,
                                    fontSize: '2rem'
                                }}
                                />
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
                                LearnHub
                            </Typography>
                        </Button>
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    color="text.primary"
                                    underline="none"
                                    sx={{
                                        mx: 2,
                                        fontWeight: 500,
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Box>
                    )}

                    {/* Auth Buttons */}
                    {!isMobile ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Button color="inherit">Login</Button>
                            <Button
                                variant="contained"
                                sx={{
                                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    borderRadius: 50,
                                    px: 3,
                                    py: 1,
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 2
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="open menu"
                            edge="end"
                            onClick={handleDrawerToggle}
                        >
                            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    )}
                </Toolbar>

                {/* Mobile Menu */}
                {isMobile && mobileOpen && (
                    <Box sx={{
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        p: 2,
                        mx: 2,
                        mb: 2,
                        boxShadow: 3
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
                                    '&:hover': { color: 'primary.main' }
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
                                py: 1.5
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
                                py: 1.5
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                )}
            </Container>
        </AppBar>
    );
};

export default Navbar;