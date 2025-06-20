import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Avatar,
    LinearProgress,
} from '@mui/material';
import {
    School as SchoolIcon,
    LibraryBooks as LibraryIcon,
    Videocam as VideoIcon,
    Assignment as AssignmentIcon,
    TrendingUp as TrendingUpIcon,
    People as PeopleIcon,
} from '@mui/icons-material';

const cardData = [
    {
        title: 'Active Courses',
        value: '5',
        icon: <SchoolIcon fontSize="large" />,
        color: '#4e73df',
        progress: 70,
    },
    {
        title: 'Completed Courses',
        value: '12',
        icon: <LibraryIcon fontSize="large" />,
        color: '#1cc88a',
        progress: 100,
    },
    {
        title: 'Pending Assignments',
        value: '3',
        icon: <AssignmentIcon fontSize="large" />,
        color: '#f6c23e',
        progress: 30,
    },
    {
        title: 'Watch Hours',
        value: '24.5',
        icon: <VideoIcon fontSize="large" />,
        color: '#e74a3b',
        progress: 65,
    },
];

const StudentDashboard = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Dashboard Overview
            </Typography>

            <Grid container spacing={4}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                borderRadius: 4,
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                                },
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            backgroundColor: `${card.color}20`,
                                            color: card.color,
                                            width: 56,
                                            height: 56,
                                        }}
                                    >
                                        {card.icon}
                                    </Avatar>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: 700, color: 'text.primary' }}
                                        >
                                            {card.value}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'text.secondary', textTransform: 'uppercase' }}
                                        >
                                            {card.title}
                                        </Typography>
                                    </Box>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={card.progress}
                                    sx={{
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor: `${card.color}20`,
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: card.color,
                                            borderRadius: 5,
                                        },
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Additional Sections */}
            <Grid container spacing={4} sx={{ mt: 1 }}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ borderRadius: 4, p: 3 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 3,
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Course Progress
                            </Typography>
                            <TrendingUpIcon color="primary" />
                        </Box>
                        {/* Placeholder for chart */}
                        <Box
                            sx={{
                                height: 300,
                                backgroundColor: '#f8f9fc',
                                borderRadius: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography color="text.secondary">Progress Chart</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ borderRadius: 4, p: 3 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 3,
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Recent Activity
                            </Typography>
                            <PeopleIcon color="primary" />
                        </Box>
                        {/* Placeholder for activity */}
                        <Box
                            sx={{
                                height: 300,
                                backgroundColor: '#f8f9fc',
                                borderRadius: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography color="text.secondary">Recent Activities</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudentDashboard;