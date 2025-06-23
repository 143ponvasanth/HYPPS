import React from 'react';
import {
    Book as BookOpen,
    AccessTime as Clock,
    EmojiEvents as Award,
    TrendingUp as TrendingUp
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Avatar,
    Divider,
    Chip,
    useTheme,
    ButtonBase,
    Button
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Dashboard = () => {
    const theme = useTheme();

    const stats = [
        {
            title: 'Total Joined Classes',
            value: '12',
            icon: BookOpen,
            color: theme.palette.primary.main,
            bgColor: theme.palette.primary.light
        },
        {
            title: 'Pending Join Requests',
            value: '3',
            icon: Clock,
            color: theme.palette.warning.main,
            bgColor: theme.palette.warning.light
        },
        {
            title: 'Certificates Earned',
            value: '8',
            icon: Award,
            color: theme.palette.success.main,
            bgColor: theme.palette.success.light
        },
        {
            title: 'Learning Break',
            value: '15 days',
            icon: TrendingUp,
            color: theme.palette.secondary.main,
            bgColor: theme.palette.secondary.light
        }
    ];

    const upcomingClasses = [
        {
            title: 'Advanced React Patterns',
            teacher: 'Sarah Johnson',
            time: 'Today, 2:00 PM',
            status: 'Live Now'
        },
        {
            title: 'Digital Marketing Basics',
            teacher: 'Mike Chen',
            time: 'Tomorrow, 10:00 AM',
            status: 'Scheduled'
        },
        {
            title: 'Python for Beginners',
            teacher: 'Lisa Rodriguez',
            time: 'Friday, 3:00 PM',
            status: 'Scheduled'
        }
    ];

    const quickActions = [
        {
            title: 'Find New Classes',
            description: 'Discover classes that match your interests',
            color: 'primary'
        },
        {
            title: 'Join Live Session',
            description: 'Connect with your teachers instantly',
            color: 'success'
        },
        {
            title: 'View Certificates',
            description: 'Download your earned certificates',
            color: 'secondary'
        }
    ];

    const StyledCard = styled(Card)(({ theme }) => ({
        borderRadius: 12,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        border: 'none',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-4px)'
        }
    }));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 3 }}>
            {/* Welcome Banner */}
            <StyledCard>
                <Box sx={{ p: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
                            Hi Alex, Ready to explore new skills today?
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Continue your learning journey and discover new opportunities
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Avatar sx={{
                            width: 80,
                            height: 80,
                            bgcolor: 'primary.light',
                            color: 'primary.main'
                        }}>
                            <BookOpen sx={{ fontSize: 40 }} />
                        </Avatar>
                    </Box>
                </Box>
            </StyledCard>

            {/* Stats Cards */}
            <Grid container spacing={3}>
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Grid item xs={12} sm={6} lg={3} key={index}>
                            <StyledCard>
                                <CardContent sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar sx={{
                                            bgcolor: stat.bgColor,
                                            width: 48,
                                            height: 48,
                                            color: stat.color
                                        }}>
                                            <Icon fontSize="medium" />
                                        </Avatar>
                                        <Box>
                                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                                                {stat.value}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {stat.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </StyledCard>
                        </Grid>
                    );
                })}
            </Grid>

            {/* Upcoming Classes */}
            <StyledCard>
                <Box sx={{ p: 3 }}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 3 }}>
                        Upcoming Classes
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {upcomingClasses.map((classItem, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                p: 2,
                                borderRadius: 2,
                                bgcolor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider'
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                                        {classItem.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        with {classItem.teacher}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                        {classItem.time}
                                    </Typography>
                                    <Chip
                                        label={classItem.status}
                                        size="small"
                                        sx={{
                                            mt: 1,
                                            bgcolor: classItem.status === 'Live Now' ? 'error.light' : 'success.light',
                                            color: classItem.status === 'Live Now' ? 'error.dark' : 'success.dark'
                                        }}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </StyledCard>

            {/* Quick Actions */}
            <Grid container spacing={3}>
                {quickActions.map((action, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <StyledCard>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'medium', mb: 1 }}>
                                    {action.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                                    {action.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color={action.color}
                                    fullWidth
                                    sx={{ textTransform: 'none' }}
                                >
                                    {action.title}
                                </Button>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Dashboard;