import React from 'react';
import {
    Videocam as VideoIcon,
    ChatBubbleOutline as MessageCircleIcon,
    Description as FileTextIcon,
    CalendarToday as CalendarIcon,
    People as UsersIcon,
    OpenInNew as ExternalLinkIcon,
    MenuBook as BookOpenIcon
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Chip,
    Button,
    Divider,
    useTheme,
    Avatar
} from '@mui/material';

const MyClasses = () => {
    const theme = useTheme();

    const classes = [
        {
            id: 1,
            title: 'Advanced React Development',
            teacher: 'Sarah Johnson',
            schedule: 'Mon, Wed, Fri - 7:00 PM',
            nextClass: '2024-02-15T19:00:00',
            progress: 65,
            totalSessions: 24,
            completedSessions: 16,
            isLive: true,
            classLink: 'https://meet.google.com/abc-defg-hij'
        },
        {
            id: 2,
            title: 'Guitar Masterclass',
            teacher: 'David Thompson',
            schedule: 'Tue, Fri - 7:30 PM',
            nextClass: '2024-02-16T19:30:00',
            progress: 40,
            totalSessions: 20,
            completedSessions: 8,
            isLive: false,
            classLink: 'https://zoom.us/j/123456789'
        },
        {
            id: 3,
            title: 'Digital Marketing Mastery',
            teacher: 'Mike Chen',
            schedule: 'Tue, Thu - 6:30 PM',
            nextClass: '2024-02-17T18:30:00',
            progress: 80,
            totalSessions: 16,
            completedSessions: 13,
            isLive: false,
            classLink: 'https://teams.microsoft.com/l/meetup-join/xyz'
        }
    ];

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });
    };

    const isUpcoming = (dateString) => {
        const classDate = new Date(dateString);
        const now = new Date();
        const timeDiff = classDate.getTime() - now.getTime();
        return timeDiff > 0 && timeDiff < 24 * 60 * 60 * 1000; // Within 24 hours
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Header */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        My Classes
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Access your enrolled classes, materials, and live sessions
                    </Typography>
                </CardContent>
            </Card>

            {/* Classes Grid */}
            <Grid container spacing={3}>
                {classes.map((classItem) => (
                    <Grid item xs={12} lg={6} key={classItem.id}>
                        <Card sx={{
                            borderRadius: 3,
                            boxShadow: 3,
                            border: '1px solid',
                            borderColor: 'divider',
                            height: '100%'
                        }}>
                            <CardContent>
                                {/* Class Header */}
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Box>
                                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                                            {classItem.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            with {classItem.teacher}
                                        </Typography>
                                    </Box>
                                    {classItem.isLive && (
                                        <Chip
                                            label="Live Now"
                                            size="small"
                                            sx={{
                                                bgcolor: 'error.main',
                                                color: 'error.contrastText',
                                                animation: 'pulse 1.5s infinite',
                                                '@keyframes pulse': {
                                                    '0%': { opacity: 1 },
                                                    '50%': { opacity: 0.5 },
                                                    '100%': { opacity: 1 }
                                                }
                                            }}
                                        />
                                    )}
                                </Box>

                                {/* Progress Bar */}
                                <Box sx={{ mb: 3 }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        mb: 1
                                    }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Progress
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {classItem.completedSessions}/{classItem.totalSessions} sessions
                                        </Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={classItem.progress}
                                        sx={{
                                            height: 8,
                                            borderRadius: 4,
                                            backgroundColor: 'action.hover',
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: 'primary.main',
                                                borderRadius: 4
                                            }
                                        }}
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right', mt: 0.5 }}>
                                        {classItem.progress}% complete
                                    </Typography>
                                </Box>

                                {/* Next Class Info */}
                                <Card variant="outlined" sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    p: 2,
                                    mb: 3
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <CalendarIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                            Next Class
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {formatDate(classItem.nextClass)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {classItem.schedule}
                                    </Typography>

                                    {isUpcoming(classItem.nextClass) && (
                                        <Box sx={{
                                            mt: 1,
                                            p: 1,
                                            bgcolor: 'info.light',
                                            border: '1px solid',
                                            borderColor: 'info.light',
                                            borderRadius: 1
                                        }}>
                                            <Typography variant="body2" color="info.dark">
                                                ⏰ Class starts soon! Don't forget to join.
                                            </Typography>
                                        </Box>
                                    )}
                                </Card>

                                {/* Action Buttons */}
                                <Grid container spacing={1.5} sx={{ mb: 2 }}>
                                    <Grid item xs={6}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            startIcon={<VideoIcon />}
                                            sx={{
                                                bgcolor: classItem.isLive ? 'error.main' : 'primary.main',
                                                '&:hover': {
                                                    bgcolor: classItem.isLive ? 'error.dark' : 'primary.dark'
                                                },
                                                borderRadius: 3,
                                                py: 1.5
                                            }}
                                        >
                                            {classItem.isLive ? 'Join Live' : 'Join Class'}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            startIcon={<MessageCircleIcon />}
                                            sx={{
                                                color: 'primary.main',
                                                borderColor: 'primary.main',
                                                '&:hover': {
                                                    bgcolor: 'primary.main',
                                                    color: 'primary.contrastText'
                                                },
                                                borderRadius: 3,
                                                py: 1.5
                                            }}
                                        >
                                            Chat
                                        </Button>
                                    </Grid>
                                </Grid>

                                {/* Quick Access Links */}
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Button
                                            fullWidth
                                            variant="text"
                                            startIcon={<FileTextIcon />}
                                            sx={{
                                                color: 'text.secondary',
                                                '&:hover': {
                                                    color: 'primary.main'
                                                },
                                                justifyContent: 'flex-start',
                                                fontSize: '0.875rem',
                                                py: 1
                                            }}
                                        >
                                            Materials
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            fullWidth
                                            variant="text"
                                            startIcon={<UsersIcon />}
                                            sx={{
                                                color: 'text.secondary',
                                                '&:hover': {
                                                    color: 'primary.main'
                                                },
                                                justifyContent: 'flex-start',
                                                fontSize: '0.875rem',
                                                py: 1
                                            }}
                                        >
                                            Classmates
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Upcoming Sessions */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
                        This Week's Schedule
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {classes.map((classItem) => (
                            <Card
                                key={classItem.id}
                                variant="outlined"
                                sx={{
                                    p: 2,
                                    '&:hover': {
                                        bgcolor: 'action.hover'
                                    },
                                    transition: 'background-color 0.3s ease'
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            bgcolor: classItem.isLive ? 'error.main' : 'success.main',
                                            ...(classItem.isLive && {
                                                animation: 'pulse 1.5s infinite',
                                                '@keyframes pulse': {
                                                    '0%': { opacity: 1 },
                                                    '50%': { opacity: 0.5 },
                                                    '100%': { opacity: 1 }
                                                }
                                            })
                                        }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                                                {classItem.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {formatDate(classItem.nextClass)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Button
                                        variant="text"
                                        endIcon={<ExternalLinkIcon />}
                                        sx={{
                                            color: 'primary.main',
                                            '&:hover': {
                                                color: 'primary.dark'
                                            }
                                        }}
                                    >
                                        Open
                                    </Button>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                </CardContent>
            </Card>

            {/* Empty State */}
            {classes.length === 0 && (
                <Card sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                    p: 6
                }}>
                    <CardContent>
                        <BookOpenIcon sx={{
                            color: 'text.disabled',
                            fontSize: 48,
                            mx: 'auto',
                            mb: 2
                        }} />
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'medium', mb: 1 }}>
                            No classes enrolled
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            Browse available classes and request to join to get started!
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: 'primary.main',
                                '&:hover': { bgcolor: 'primary.dark' },
                                borderRadius: 3,
                                px: 4,
                                py: 1.5
                            }}
                        >
                            Browse Classes
                        </Button>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default MyClasses;