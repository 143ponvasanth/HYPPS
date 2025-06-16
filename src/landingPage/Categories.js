import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    IconButton,
    useTheme,
    styled,
    useMediaQuery
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
// Importing icons for each category
import {
    Restaurant as CookingIcon,
    MusicNote as MusicIcon,
    FitnessCenter as FitnessIcon,
    School as AcademicsIcon,
    Code as CodingIcon,
    SportsMartialArts as KarateIcon,
    Palette as ArtIcon,
    BusinessCenter as BusinessIcon,
    Science as ScienceIcon,
    Translate as LanguageIcon,
    DesignServices as DesignIcon,
    CameraAlt as PhotographyIcon
} from '@mui/icons-material';

const CategoryCard = styled(Box)(({ theme }) => ({
    flexShrink: 0,
    width: 280,
    padding: theme.spacing(2),
    borderRadius: '16px',
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(0, 1),
    cursor: 'pointer',
    boxShadow: theme.shadows[2],
    transition: 'all 0.3s ease',
    border: `1px solid ${theme.palette.grey[100]}`,
    '&:hover': {
        boxShadow: theme.shadows[6],
        transform: 'translateY(-4px)'
    },
    [theme.breakpoints.down('md')]: {
        width: 220,
        padding: theme.spacing(1.5),
    },
    [theme.breakpoints.down('sm')]: {
        width: 180,
        padding: theme.spacing(1),
    }
}));

const CarouselContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
    position: 'relative'
});

const ScrollContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
    width: '100%',
    padding: '4px 0',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    minHeight: '180px',
    [theme.breakpoints.down('md')]: {
        minHeight: '160px',
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '140px',
    }
}));

const ScrollButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[6],
    padding: theme.spacing(1.5),
    flexShrink: 0,
    '&:hover': {
        boxShadow: theme.shadows[10],
        backgroundColor: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1),
        '& svg': { fontSize: 20 }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const CategoryIconWrapper = styled(Box)(({ theme, gradient }) => ({
    width: 48,
    height: 48,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
    background: gradient,
    '&:hover': {
        transform: 'scale(1.05)',
    },
    transition: 'transform 0.2s',
    '& svg': {
        fontSize: 24,
        color: theme.palette.common.white
    },
    [theme.breakpoints.down('md')]: {
        width: 40,
        height: 40,
        '& svg': { fontSize: 20 }
    },
    [theme.breakpoints.down('sm')]: {
        width: 36,
        height: 36,
        '& svg': { fontSize: 18 }
    }
}));

const ViewCoursesLink = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginTop: theme.spacing(1),
    fontSize: '0.8125rem',
    '&:hover': {
        transform: 'translateX(4px)'
    },
    transition: 'transform 0.15s',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.75rem'
    }
}));

const Categories = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [isVisible, setIsVisible] = useState(false);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
    const scrollInterval = useRef(null);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('categories-section');
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            stopAutoScroll();
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    useEffect(() => {
        if (isVisible && autoScrollEnabled) {
            startAutoScroll();
        } else {
            stopAutoScroll();
        }

        return () => stopAutoScroll();
    }, [isVisible, autoScrollEnabled]);

    const startAutoScroll = () => {
        stopAutoScroll(); 
        scrollInterval.current = setInterval(() => {
            handleScrollRight();
        }, 1000); 
    };

    const stopAutoScroll = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    const handleCardHover = (isHovering) => {
        if (isHovering) {
            setAutoScrollEnabled(false);
        } else {
            scrollTimeout.current = setTimeout(() => {
                setAutoScrollEnabled(true);
            }, 500);
        }
    };

    const categoryData = {
        Cooking: {
            icon: <CookingIcon />,
            gradient: 'linear-gradient(to right, #eab308, #f97316)',
            description: 'Explore cooking courses and connect with expert chefs.'
        },
        Music: {
            icon: <MusicIcon />,
            gradient: 'linear-gradient(to right, #a855f7, #8b5cf6)',
            description: 'Discover music courses and learn from professional musicians.'
        },
        Fitness: {
            icon: <FitnessIcon />,
            gradient: 'linear-gradient(to right, #14b8a6, #06b6d4)',
            description: 'Find fitness programs tailored to your wellness goals.'
        },
        Academics: {
            icon: <AcademicsIcon />,
            gradient: 'linear-gradient(to right, #3b82f6, #2563eb)',
            description: 'Academic courses to enhance your knowledge and skills.'
        },
        Coding: {
            icon: <CodingIcon />,
            gradient: 'linear-gradient(to right, #3b82f6, #06b6d4)',
            description: 'Programming courses for all skill levels and languages.'
        },
        Karate: {
            icon: <KarateIcon />,
            gradient: 'linear-gradient(to right, #ef4444, #dc2626)',
            description: 'Martial arts training from beginner to advanced levels.'
        },
        Art: {
            icon: <ArtIcon />,
            gradient: 'linear-gradient(to right, #ec4899, #f43f5e)',
            description: 'Creative art courses to unleash your imagination.'
        },
        Business: {
            icon: <BusinessIcon />,
            gradient: 'linear-gradient(to right, #22c55e, #10b981)',
            description: 'Business and marketing courses for entrepreneurs.'
        },
        Science: {
            icon: <ScienceIcon />,
            gradient: 'linear-gradient(to right, #6366f1, #3b82f6)',
            description: 'Scientific courses covering diverse disciplines.'
        },
        Language: {
            icon: <LanguageIcon />,
            gradient: 'linear-gradient(to right, #f97316, #ef4444)',
            description: 'Language courses to become fluent and confident.'
        },
        Design: {
            icon: <DesignIcon />,
            gradient: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
            description: 'Design courses for creative professionals.'
        },
        Photography: {
            icon: <PhotographyIcon />,
            gradient: 'linear-gradient(to right, #06b6d4, #0ea5e9)',
            description: 'Photography courses to capture perfect moments.'
        }
    };

    const [items, setItems] = useState(Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: ['Cooking', 'Music', 'Fitness', 'Academics', 'Coding', 'Karate',
            'Art', 'Business', 'Science', 'Language', 'Design', 'Photography'][i],
        description: categoryData[['Cooking', 'Music', 'Fitness', 'Academics', 'Coding', 'Karate',
            'Art', 'Business', 'Science', 'Language', 'Design', 'Photography'][i]].description,
        gradient: categoryData[['Cooking', 'Music', 'Fitness', 'Academics', 'Coding', 'Karate',
            'Art', 'Business', 'Science', 'Language', 'Design', 'Photography'][i]].gradient
    })));

    const topRowRef = useRef(null);
    const bottomRowRef = useRef(null);

    const visibleCards = isSmallScreen ? 4 : (isMediumScreen ? 5 : 6);
    const topRowItems = items.slice(0, visibleCards);
    const bottomRowItems = items.slice(visibleCards, visibleCards * 2);

    const handleScrollLeft = () => {
        setAutoScrollEnabled(false);
        setItems(prev => {
            const firstRow = prev.slice(0, 6);
            const secondRow = prev.slice(6);
            return [...firstRow.slice(1), secondRow[0], ...secondRow.slice(1), firstRow[0]];
        });
        // Re-enable auto scroll after 2 seconds
        scrollTimeout.current = setTimeout(() => setAutoScrollEnabled(true), 2000);
    };

    const handleScrollRight = () => {
        setAutoScrollEnabled(false);
        setItems(prev => {
            const firstRow = prev.slice(0, 6);
            const secondRow = prev.slice(6);
            return [secondRow[secondRow.length - 1], ...firstRow.slice(0, -1),
            firstRow[firstRow.length - 1], ...secondRow.slice(0, -1)];
        });
        // Re-enable auto scroll after 2 seconds
        scrollTimeout.current = setTimeout(() => setAutoScrollEnabled(true), 2000);
    };

    return (
        <Box
            id="categories-section"
            component="section"
            sx={{
                py: { xs: 4, sm: 6, md: 8 },
                backgroundColor: 'background.paper',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        mb: { xs: 3, sm: 4, md: 6 },
                        fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                    }}
                >
                    Popular Categories
                </Typography>

                {/* Top Row with Left Arrow */}
                <CarouselContainer sx={{ mb: 2 }}>
                    {!isSmallScreen && (
                        <ScrollButton
                            onClick={handleScrollLeft}
                            sx={{
                                mr: { xs: 1, sm: 2 },
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                                transition: 'opacity 0.4s ease-out 0.3s, transform 0.4s ease-out 0.3s'
                            }}
                        >
                            <ChevronLeft fontSize="medium" />
                        </ScrollButton>
                    )}

                    <ScrollContainer
                        ref={topRowRef}
                    >
                        {topRowItems.map((item, index) => (
                            <CategoryCard
                                key={`top-${item.id}`}
                                onMouseEnter={() => handleCardHover(true)}
                                onMouseLeave={() => handleCardHover(false)}
                                sx={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `opacity 0.5s ease-out ${0.3 + index * 0.1}s, transform 0.5s ease-out ${0.3 + index * 0.1}s`
                                }}
                            >
                                <CategoryIconWrapper gradient={item.gradient}>
                                    {categoryData[item.title].icon}
                                </CategoryIconWrapper>
                                <Typography variant="h6" sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' }
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: 'text.secondary',
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                }}>
                                    {item.description}
                                </Typography>
                                <ViewCoursesLink>
                                    View Courses <ChevronRight sx={{ ml: 1 }} />
                                </ViewCoursesLink>
                            </CategoryCard>
                        ))}
                    </ScrollContainer>
                </CarouselContainer>

                {/* Bottom Row with Right Arrow */}
                <CarouselContainer>
                    <ScrollContainer
                        ref={bottomRowRef}
                    >
                        {bottomRowItems.map((item, index) => (
                            <CategoryCard
                                key={`bottom-${item.id}`}
                                onMouseEnter={() => handleCardHover(true)}
                                onMouseLeave={() => handleCardHover(false)}
                                sx={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `opacity 0.5s ease-out ${0.4 + index * 0.1}s, transform 0.5s ease-out ${0.4 + index * 0.1}s`
                                }}
                            >
                                <CategoryIconWrapper gradient={item.gradient}>
                                    {categoryData[item.title].icon}
                                </CategoryIconWrapper>
                                <Typography variant="h6" sx={{
                                    mb: 1,
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: 'text.secondary',
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                }}>
                                    {item.description}
                                </Typography>
                                <ViewCoursesLink>
                                    View Courses <ChevronRight sx={{ ml: 1 }} />
                                </ViewCoursesLink>
                            </CategoryCard>
                        ))}
                    </ScrollContainer>

                    {!isSmallScreen && (
                        <ScrollButton
                            onClick={handleScrollRight}
                            sx={{
                                ml: { xs: 1, sm: 2 },
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                                transition: 'opacity 0.4s ease-out 0.5s, transform 0.4s ease-out 0.5s'
                            }}
                        >
                            <ChevronRight fontSize="medium" />
                        </ScrollButton>
                    )}
                </CarouselContainer>

                <Box
                    sx={{
                        textAlign: 'center',
                        mt: { xs: 4, sm: 6 },
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s'
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                            borderRadius: '50px',
                            px: { xs: 4, sm: 6 },
                            py: { xs: 1, sm: 1.5 },
                            fontWeight: 600,
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            textTransform: 'none',
                            '&:hover': {
                                boxShadow: theme.shadows[6],
                                transform: 'scale(1.05)',
                                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                            },
                            transition: 'all 0.2s'
                        }}
                    >
                        View All Categories
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Categories;