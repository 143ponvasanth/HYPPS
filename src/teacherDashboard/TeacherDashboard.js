import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Divider,
    useTheme
} from '@mui/material';
import {
    Class as ClassIcon,
    Groups as GroupsIcon,
    Schedule as ScheduleIcon,
    Assessment as AssessmentIcon
} from '@mui/icons-material';

const TeacherDashboard = () => {
    const theme = useTheme();

    // Sample data - replace with your actual data
    const classes = [
        { id: 1, name: 'Mathematics 101', students: 24, time: 'Mon/Wed 10:00 AM' },
        { id: 2, name: 'Physics Advanced', students: 18, time: 'Tue/Thu 2:00 PM' },
        { id: 3, name: 'Chemistry Basics', students: 32, time: 'Fri 9:00 AM' },
    ];

    const stats = [
        { title: 'Total Classes', value: '15', icon: <ClassIcon fontSize="large" /> },
        { title: 'Total Students', value: '243', icon: <GroupsIcon fontSize="large" /> },
        { title: 'Upcoming Classes', value: '3', icon: <ScheduleIcon fontSize="large" /> },
        { title: 'Completion Rate', value: '92%', icon: <AssessmentIcon fontSize="large" /> },
    ];

    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0, // Important for proper scrolling
            gap: 3
        }}>
            {/* Header Section */}
            <Box>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Teacher Dashboard
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Welcome back! Here's what's happening today.
                </Typography>
            </Box>

            {/* Stats Cards */}
            <Grid container spacing={3}>
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{
                                    bgcolor: theme.palette.primary.light,
                                    color: theme.palette.primary.main,
                                    p: 2,
                                    borderRadius: '50%'
                                }}>
                                    {stat.icon}
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {stat.title}
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bold">
                                        {stat.value}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Classes Section */}
            <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2
                    }}>
                        <Typography variant="h6" fontWeight="bold">
                            All Classes
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <Box sx={{ flex: 1, overflow: 'auto' }}>
                        {classes.map((cls) => (
                            <Card key={cls.id} sx={{ mb: 2 }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                {cls.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {cls.time}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <GroupsIcon color="action" />
                                            <Typography variant="body2">
                                                {cls.students} students
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TeacherDashboard;