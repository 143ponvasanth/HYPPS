import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider,
    Avatar,
    IconButton
} from '@mui/material';
import {
    ArrowUpward,
    Schedule,
    ChevronRight,
    MoreVert
} from '@mui/icons-material';

const Dashboard = () => {
    return (
        <Box>
            {/* Header */}
            <Typography variant="h4" component="h1" gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
                Welcome back, Sarah! Here's what's happening today.
            </Typography>

            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">
                                Total Students
                            </Typography>
                            <Typography variant="h4">248</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <ArrowUpward color="success" fontSize="small" />
                                <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                                    12% from last month
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">
                                Active Classes
                            </Typography>
                            <Typography variant="h4">12</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <ArrowUpward color="success" fontSize="small" />
                                <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                                    1.3 new this semester
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">
                                Active Classes
                            </Typography>
                            <Typography variant="h4">12</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <ArrowUpward color="success" fontSize="small" />
                                <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                                    1.3 new this semester
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>  <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">
                                Active Classes
                            </Typography>
                            <Typography variant="h4">12</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <ArrowUpward color="success" fontSize="small" />
                                <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                                    1.3 new this semester
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">
                                Revenue
                            </Typography>
                            <Typography variant="h4">$34,245</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <ArrowUpward color="success" fontSize="small" />
                                <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                                    8% from last month
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle2" color="text.secondary">
                                Achievements
                            </Typography>
                            <Typography variant="h4">6</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <ArrowUpward color="success" fontSize="small" />
                                <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                                    2 new this month
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Main Content */}
            <Grid container spacing={3}>
                {/* Left Column */}
                <Grid item xs={12} md={8}>
                    {/* Today's Classes */}
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6">Today's Classes</Typography>
                                <IconButton size="small">
                                    <MoreVert />
                                </IconButton>
                            </Box>

                            <List>
                                {/* Math Class */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="subtitle1" fontWeight="bold">Mathematics 101</Typography>
                                            <Typography variant="body2" color="text.secondary">09:00 - 10:30 AM • Room 203</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                            <Typography
                                                variant="body2"
                                                color="primary"
                                                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                            >
                                                View schedule <ChevronRight fontSize="small" />
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">28 students</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <Divider sx={{ my: 1 }} />

                                {/* Science Lab */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="subtitle1" fontWeight="bold">Science Lab</Typography>
                                            <Typography variant="body2" color="text.secondary">11:00 - 12:30 PM • Lab 3</Typography>
                                        </Box>
                                        <Box sx={{ mt: 1, textAlign: 'right' }}>
                                            <Typography variant="body2" color="text.secondary">24 students</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <Divider sx={{ my: 1 }} />

                                {/* History */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="subtitle1" fontWeight="bold">History</Typography>
                                            <Typography variant="body2" color="text.secondary">02:00 - 03:30 PM • Room 105</Typography>
                                        </Box>
                                        <Box sx={{ mt: 1, textAlign: 'right' }}>
                                            <Typography variant="body2" color="text.secondary">30 students</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={4}>
                    {/* Recent Messages */}
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6">Recent Messages</Typography>
                                <Typography
                                    variant="body2"
                                    color="primary"
                                    sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                >
                                    View all <ChevronRight fontSize="small" />
                                </Typography>
                            </Box>

                            <List>
                                {/* John Smith */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Avatar sx={{ width: 40, height: 40, mr: 2 }}>JS</Avatar>
                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="subtitle1" fontWeight="bold">John Smith</Typography>
                                                <Typography variant="caption" color="text.secondary">10:30 AM</Typography>
                                            </Box>
                                            <Typography variant="body2">Could you share the math homework for tomorrow?</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <Divider sx={{ my: 1 }} />

                                {/* Emily Davis */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Avatar sx={{ width: 40, height: 40, mr: 2 }}>ED</Avatar>
                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="subtitle1" fontWeight="bold">Emily Davis</Typography>
                                                <Typography variant="caption" color="text.secondary">Yesterday</Typography>
                                            </Box>
                                            <Typography variant="body2">The science project deadline has been extended.</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <Divider sx={{ my: 1 }} />

                                {/* Michael Brown */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Avatar sx={{ width: 40, height: 40, mr: 2 }}>MB</Avatar>
                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="subtitle1" fontWeight="bold">Michael Brown</Typography>
                                                <Typography variant="caption" color="text.secondary">Yesterday</Typography>
                                            </Box>
                                            <Typography variant="body2">Thank you for the feedback on my essay!</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* Recent Messages */}
                    <Card>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6">Recent Messages</Typography>
                                <Typography
                                    variant="body2"
                                    color="primary"
                                    sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                >
                                    View all <ChevronRight fontSize="small" />
                                </Typography>
                            </Box>

                            <List>
                                {/* John Smith */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Avatar sx={{ width: 40, height: 40, mr: 2 }}>JS</Avatar>
                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="subtitle1" fontWeight="bold">John Smith</Typography>
                                                <Typography variant="caption" color="text.secondary">10:30 AM</Typography>
                                            </Box>
                                            <Typography variant="body2">Could you share the math homework for tomorrow?</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <Divider sx={{ my: 1 }} />

                                {/* Emily Davis */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Avatar sx={{ width: 40, height: 40, mr: 2 }}>ED</Avatar>
                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="subtitle1" fontWeight="bold">Emily Davis</Typography>
                                                <Typography variant="caption" color="text.secondary">Yesterday</Typography>
                                            </Box>
                                            <Typography variant="body2">The science project deadline has been extended.</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <Divider sx={{ my: 1 }} />

                                {/* Michael Brown */}
                                <ListItem sx={{ px: 0 }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Avatar sx={{ width: 40, height: 40, mr: 2 }}>MB</Avatar>
                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant="subtitle1" fontWeight="bold">Michael Brown</Typography>
                                                <Typography variant="caption" color="text.secondary">Yesterday</Typography>
                                            </Box>
                                            <Typography variant="body2">Thank you for the feedback on my essay!</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;