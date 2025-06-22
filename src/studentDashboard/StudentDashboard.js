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
    ButtonBase
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
            title: 'Learning Streak',
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
            status: 'live'
        },
        {
            title: 'Digital Marketing Basics',
            teacher: 'Mike Chen',
            time: 'Tomorrow, 10:00 AM',
            status: 'scheduled'
        },
        {
            title: 'Python for Beginners',
            teacher: 'Lisa Rodriguez',
            time: 'Friday, 3:00 PM',
            status: 'scheduled'
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

    const GradientCard = styled(Card)(({ theme }) => ({
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        color: theme.palette.primary.contrastText,
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
            boxShadow: theme.shadows[6]
        }
    }));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Welcome Banner */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ p: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
                            Hi Alex, Ready to explore new skills today?
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Continue your learning journey and discover new opportunities
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Avatar sx={{
                            width: 96,
                            height: 96,
                            bgcolor: 'primary.light',
                            background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
                        }}>
                            <BookOpen sx={{ fontSize: 40, color: 'common.white' }} />
                        </Avatar>
                    </Box>
                </Box>
            </Card>

            {/* Stats Cards */}
            <Grid container spacing={3}>
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Grid item xs={12} sm={6} lg={3} key={index}>
                            <Card sx={{
                                borderRadius: 2,
                                boxShadow: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                '&:hover': {
                                    boxShadow: 6
                                },
                                transition: 'box-shadow 0.3s ease'
                            }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                        <Avatar sx={{
                                            bgcolor: stat.bgColor,
                                            width: 48,
                                            height: 48,
                                            color: stat.color
                                        }}>
                                            <Icon fontSize="medium" />
                                        </Avatar>
                                    </Box>
                                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {stat.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            {/* Upcoming Classes */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 4 }}>
                        Upcoming Classes
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {upcomingClasses.map((classItem, index) => (
                            <ButtonBase key={index} sx={{
                                width: '100%',
                                textAlign: 'left',
                                p: 2,
                                bgcolor: 'action.hover',
                                borderRadius: 2,
                                '&:hover': {
                                    bgcolor: 'action.selected'
                                },
                                transition: 'background-color 0.3s ease'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            bgcolor: classItem.status === 'live' ? 'error.main' : 'success.main',
                                            ...(classItem.status === 'live' && {
                                                animation: 'pulse 1.5s infinite',
                                                '@keyframes pulse': {
                                                    '0%': { opacity: 1 },
                                                    '50%': { opacity: 0.5 },
                                                    '100%': { opacity: 1 }
                                                }
                                            })
                                        }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                                                {classItem.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                with {classItem.teacher}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                                            {classItem.time}
                                        </Typography>
                                        <Chip
                                            label={classItem.status === 'live' ? 'Live Now' : 'Scheduled'}
                                            size="small"
                                            sx={{
                                                mt: 0.5,
                                                bgcolor: classItem.status === 'live' ? 'error.light' : 'success.light',
                                                color: classItem.status === 'live' ? 'error.dark' : 'success.dark'
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </ButtonBase>
                        ))}
                    </Box>
                </Box>
            </Card>

            {/* Quick Actions */}
            <Grid container spacing={3}>
                {quickActions.map((action, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <GradientCard sx={{
                            background: `linear-gradient(135deg, ${theme.palette[action.color].main}, ${theme.palette[action.color].dark})`,
                            borderRadius: 2,
                            p: 3
                        }}>
                            <CardContent>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 'medium', mb: 1 }}>
                                    {action.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: `${action.color}.contrastText`, opacity: 0.8 }}>
                                    {action.description}
                                </Typography>
                            </CardContent>
                        </GradientCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Dashboard;