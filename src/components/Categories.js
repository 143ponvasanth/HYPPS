import React, { useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    IconButton,
    Card,
    CardContent,
    useTheme,
    styled
} from '@mui/material';
import {
    Palette as ArtIcon,
    Code as CodeIcon,
    Work as BusinessIcon,
    MusicNote as MusicIcon,
    Language as LanguageIcon,
    Favorite as FitnessIcon,
    Biotech as ScienceIcon,
    Restaurant as CookingIcon,
    ChevronLeft,
    ChevronRight
} from '@mui/icons-material';

const CategoryCard = styled(Card)(({ theme }) => ({
    flexShrink: 0,
    width: 288,
    borderRadius: '16px',
    boxShadow: theme.shadows[4],
    transition: 'all 0.3s ease',
    border: `1px solid ${theme.palette.grey[100]}`,
    cursor: 'pointer',
    '&:hover': {
        boxShadow: theme.shadows[10],
        transform: 'translateY(-8px)'
    }
}));

const IconContainer = styled(Box)(({ theme, gradient }) => ({
    display: 'inline-flex',
    padding: theme.spacing(2),
    borderRadius: '16px',
    marginBottom: theme.spacing(3),
    background: gradient,
    '&:hover': {
        transform: 'scale(1.1)',
    },
    transition: 'transform 0.3s',
}));

const ViewCoursesLink = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontWeight: 600,
    '&:hover': {
        transform: 'translateX(8px)'
    },
    transition: 'transform 0.2s',
}));

const ScrollButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[6],
    padding: theme.spacing(1.5),
    '&:hover': {
        boxShadow: theme.shadows[10],
        transform: 'translateY(-50%) scale(1.1)',
        backgroundColor: theme.palette.common.white,
    }
}));

const Categories = () => {
    const theme = useTheme();
    const scrollRef = useRef(null);

    const categories = [
        { icon: ArtIcon, title: 'Art & Design', color: 'linear-gradient(to right, #ec4899, #f43f5e)' },
        { icon: CodeIcon, title: 'Programming', color: 'linear-gradient(to right, #3b82f6, #06b6d4)' },
        { icon: BusinessIcon, title: 'Business & Marketing', color: 'linear-gradient(to right, #22c55e, #10b981)' },
        { icon: MusicIcon, title: 'Music & Instruments', color: 'linear-gradient(to right, #a855f7, #8b5cf6)' },
        { icon: LanguageIcon, title: 'Languages', color: 'linear-gradient(to right, #f97316, #ef4444)' },
        { icon: FitnessIcon, title: 'Fitness & Wellness', color: 'linear-gradient(to right, #14b8a6, #06b6d4)' },
        { icon: ScienceIcon, title: 'Science', color: 'linear-gradient(to right, #6366f1, #3b82f6)' },
        { icon: CookingIcon, title: 'Cooking', color: 'linear-gradient(to right, #eab308, #f97316)' },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box component="section" sx={{ py: 10, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" component="h2" sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '2rem', sm: '2.5rem' }
                    }}>
                        Popular Categories
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: 'text.secondary',
                        maxWidth: 'md',
                        mx: 'auto',
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}>
                        Discover thousands of courses across diverse subjects and start your learning journey today
                    </Typography>
                </Box>

                <Box position="relative">
                    {/* Navigation Buttons */}
                    <ScrollButton
                        onClick={() => scroll('left')}
                        sx={{ left: -16 }}
                    >
                        <ChevronLeft sx={{ fontSize: 24 }} />
                    </ScrollButton>

                    <ScrollButton
                        onClick={() => scroll('right')}
                        sx={{ right: -16 }}
                    >
                        <ChevronRight sx={{ fontSize: 24 }} />
                    </ScrollButton>

                    {/* Categories Scroll Container */}
                    <Box
                        ref={scrollRef}
                        display="flex"
                        gap={3}
                        sx={{
                            overflowX: 'auto',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                            py: 1,
                            px: 6
                        }}
                    >
                        {categories.map((category, index) => {
                            const IconComponent = category.icon;
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        flexShrink: 0,
                                        width: 288, // w-72 equivalent
                                        bgcolor: 'background.paper',
                                        borderRadius: '16px', // rounded-2xl
                                        boxShadow: 3, // shadow-lg
                                        '&:hover': {
                                            boxShadow: 4, // hover:shadow-2xl
                                            transform: 'translateY(-8px)', // hover:-translate-y-2
                                        },
                                        transition: 'all 300ms ease',
                                        transform: 'translateY(0)',
                                        cursor: 'pointer',
                                        border: '1px solid',
                                        borderColor: 'grey.100', // border-gray-100
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Box sx={{ p: 3 }}> {/* p-8 equivalent */}
                                        <Box
                                            sx={{
                                                display: 'inline-flex',
                                                p: 2, // p-4 equivalent
                                                borderRadius: '16px', // rounded-2xl
                                                background: category.color,
                                                mb: 3, // mb-6 equivalent
                                                '&:hover': {
                                                    transform: 'scale(1.1)', // group-hover:scale-110
                                                },
                                                transition: 'transform 300ms ease',
                                            }}
                                        >
                                            <IconComponent sx={{ height: 32, width: 32, color: 'white' }} />
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                fontSize: '1.25rem', // text-xl
                                                fontWeight: 'bold',
                                                color: 'text.primary',
                                                mb: 2, // mb-3 equivalent
                                                '&:hover': {
                                                    color: 'primary.main', // group-hover:text-blue-600
                                                },
                                                transition: 'color 100ms ease',
                                            }}
                                        >
                                            {category.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                mb: 3, // mb-4 equivalent
                                            }}
                                        >
                                            Explore courses and connect with expert instructors in {category.title.toLowerCase()}.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: "center",
                                                color: 'primary.main',
                                                fontWeight: 'medium',
                                                '&:hover': {
                                                    transform: 'translateX(8px)', // group-hover:translate-x-2
                                                },
                                                transition: 'transform 100ms ease',
                                            }}
                                        >
                                            View Courses
                                            <ChevronRight sx={{ ml: 1 }} /> {/* ml-2 equivalent */}
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                {/* View All Button */}
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                            borderRadius: '50px',
                            px: 6,
                            py: 1.5,
                            fontWeight: 600,
                            fontSize: '1rem',
                            textTransform: 'none',
                            '&:hover': {
                                boxShadow: 6,
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