import React, { useState } from 'react';
import {
    Search as SearchIcon,
    People as UsersIcon,
    Star as StarIcon,
    AccessTime as ClockIcon
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Avatar,
    TextField,
    InputAdornment,
    Button,
    Chip,
    Divider,
    useTheme
} from '@mui/material';

const SearchClasses = ({ onViewProfile }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const theme = useTheme();

    const classes = [
        {
            id: 1,
            title: 'Advanced React Development',
            teacher: 'Sarah Johnson',
            photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.9,
            reviews: 127,
            bio: 'Senior Frontend Developer with 8+ years of experience in React, Next.js, and modern web technologies.',
            subject: 'React Development',
            batchSize: '12/15',
            schedule: 'Mon, Wed, Fri - 7:00 PM',
            experience: '8 years',
            category: 'Programming'
        },
        {
            id: 2,
            title: 'Digital Marketing Mastery',
            teacher: 'Mike Chen',
            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.7,
            reviews: 89,
            bio: 'Digital Marketing Expert helping businesses grow their online presence through strategic campaigns.',
            subject: 'Digital Marketing',
            batchSize: '8/12',
            schedule: 'Tue, Thu - 6:30 PM',
            experience: '6 years',
            category: 'Marketing'
        },
        {
            id: 3,
            title: 'Python for Data Science',
            teacher: 'Lisa Rodriguez',
            photo: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.8,
            reviews: 156,
            bio: 'Data Scientist with expertise in Python, Machine Learning, and Statistical Analysis.',
            subject: 'Python & Data Science',
            batchSize: '15/20',
            schedule: 'Mon, Wed - 8:00 PM',
            experience: '7 years',
            category: 'Data Science'
        },
        {
            id: 4,
            title: 'Culinary Arts Fundamentals',
            teacher: 'Chef Antonio',
            photo: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.9,
            reviews: 203,
            bio: 'Professional Chef with 15 years of experience in Italian and French cuisine.',
            subject: 'Culinary Arts',
            batchSize: '6/8',
            schedule: 'Sat, Sun - 3:00 PM',
            experience: '15 years',
            category: 'Cooking'
        },
        {
            id: 5,
            title: 'Guitar Masterclass',
            teacher: 'David Thompson',
            photo: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.6,
            reviews: 78,
            bio: 'Professional guitarist and music instructor specializing in acoustic and electric guitar.',
            subject: 'Guitar Playing',
            batchSize: '4/6',
            schedule: 'Tue, Fri - 7:30 PM',
            experience: '12 years',
            category: 'Music'
        },
        {
            id: 6,
            title: 'Business Analytics',
            teacher: 'Emily Watson',
            photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.8,
            reviews: 134,
            bio: 'Business Analyst with expertise in data visualization, market research, and strategic planning.',
            subject: 'Business Analytics',
            batchSize: '10/12',
            schedule: 'Mon, Thu - 6:00 PM',
            experience: '9 years',
            category: 'Business'
        }
    ];

    const filteredClasses = classes.filter(classItem =>
        classItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        classItem.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        classItem.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Header */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
                        Search Classes
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Discover new skills and connect with expert teachers
                    </Typography>
                </CardContent>
            </Card>

            {/* Search Bar */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <TextField
                        fullWidth
                        placeholder="Search by subject or skill (e.g., Java, Cooking...)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: 'text.secondary' }} />
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: 3,
                                py: 1,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'divider'
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'primary.main'
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'primary.main',
                                    borderWidth: 2
                                }
                            }
                        }}
                    />
                </CardContent>
            </Card>

            {/* Class Cards */}
            <Grid container spacing={3}>
                {filteredClasses.map((classItem) => (
                    <Grid item xs={12} sm={6} lg={4} key={classItem.id}>
                        <Card sx={{
                            borderRadius: 3,
                            boxShadow: 3,
                            border: '1px solid',
                            borderColor: 'divider',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                boxShadow: 6,
                                transform: 'translateY(-4px)'
                            }
                        }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                    <Avatar
                                        src={classItem.photo}
                                        alt={classItem.teacher}
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            border: '2px solid',
                                            borderColor: 'primary.main'
                                        }}
                                    />
                                    <Box>
                                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                            {classItem.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {classItem.teacher}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <StarIcon sx={{ color: 'warning.main', fontSize: 20 }} />
                                            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                                                {classItem.rating}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', ml: 0.5 }}>
                                                ({classItem.reviews} reviews)
                                            </Typography>
                                        </Box>
                                        <Chip
                                            label={classItem.category}
                                            size="small"
                                            sx={{
                                                bgcolor: 'primary.main',
                                                color: 'primary.contrastText',
                                                fontWeight: 'medium'
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <UsersIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Batch Size: {classItem.batchSize}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <ClockIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {classItem.schedule}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={() => onViewProfile(classItem)}
                                    sx={{
                                        bgcolor: 'primary.main',
                                        borderRadius: 3,
                                        py: 1.5,
                                        '&:hover': {
                                            bgcolor: 'primary.dark'
                                        }
                                    }}
                                >
                                    View Profile
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {filteredClasses.length === 0 && (
                <Card sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                    p: 6
                }}>
                    <CardContent>
                        <SearchIcon sx={{
                            color: 'text.secondary',
                            fontSize: 48,
                            mx: 'auto',
                            mb: 2
                        }} />
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'medium', mb: 1 }}>
                            No classes found
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Try searching with different keywords or browse all available classes.
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default SearchClasses;