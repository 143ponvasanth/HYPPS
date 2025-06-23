import React from 'react';
import {
    AccessTime as ClockIcon,
    CheckCircle as CheckCircleIcon,
    Cancel as XCircleIcon,
    Person as UserIcon,
    CalendarToday as CalendarIcon
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Chip,
    Avatar,
    Button,
    Divider,
    useTheme,
    Grid
} from '@mui/material';

const MyRequests = () => {
    const theme = useTheme();

    const requests = [
        {
            id: 1,
            className: 'Advanced React Development',
            teacher: 'Sarah Johnson',
            batchName: 'Advanced Batch',
            requestDate: '2024-01-15',
            status: 'approved',
            message: 'Looking forward to learning advanced React patterns and best practices.',
            responseDate: '2024-01-16'
        },
        {
            id: 2,
            className: 'Digital Marketing Mastery',
            teacher: 'Mike Chen',
            batchName: 'Beginner Batch',
            requestDate: '2024-01-20',
            status: 'pending',
            message: 'Interested in learning digital marketing strategies for my small business.'
        },
        {
            id: 3,
            className: 'Python for Data Science',
            teacher: 'Lisa Rodriguez',
            batchName: 'Weekend Intensive',
            requestDate: '2024-01-18',
            status: 'rejected',
            message: 'Want to transition into data science career.',
            responseDate: '2024-01-22',
            rejectionReason: 'Batch is full. Please consider the next available batch starting March 1st.'
        },
        {
            id: 4,
            className: 'Guitar Masterclass',
            teacher: 'David Thompson',
            batchName: 'Beginner Batch',
            requestDate: '2024-01-25',
            status: 'approved',
            message: 'Complete beginner looking to learn acoustic guitar.',
            responseDate: '2024-01-26'
        },
        {
            id: 5,
            className: 'Culinary Arts Fundamentals',
            teacher: 'Chef Antonio',
            batchName: 'Weekend Workshop',
            requestDate: '2024-01-28',
            status: 'pending',
            message: 'Passionate about cooking and want to learn professional techniques.'
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'approved':
                return <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />;
            case 'rejected':
                return <XCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />;
            case 'pending':
                return <ClockIcon sx={{ color: 'warning.main', fontSize: 20 }} />;
            default:
                return <ClockIcon sx={{ color: 'text.disabled', fontSize: 20 }} />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
                return { bgcolor: 'success.light', color: 'success.dark' };
            case 'rejected':
                return { bgcolor: 'error.light', color: 'error.dark' };
            case 'pending':
                return { bgcolor: 'warning.light', color: 'warning.dark' };
            default:
                return { bgcolor: 'grey.100', color: 'grey.800' };
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Header */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        My Requests
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Track your class join requests and their status
                    </Typography>
                </CardContent>
            </Card>

            {/* Requests List */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {requests.map((request) => (
                    <Card key={request.id} sx={{
                        borderRadius: 3,
                        boxShadow: 3,
                        border: '1px solid',
                        borderColor: 'divider'
                    }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', lg: 'row' },
                                justifyContent: 'space-between',
                                gap: 3
                            }}>
                                {/* Request Info */}
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        {getStatusIcon(request.status)}
                                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                            {request.className}
                                        </Typography>
                                        <Chip
                                            label={request.status}
                                            size="small"
                                            sx={{
                                                textTransform: 'capitalize',
                                                ...getStatusColor(request.status)
                                            }}
                                        />
                                    </Box>

                                    <Grid container spacing={2} sx={{ mb: 2 }}>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <UserIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    Teacher: {request.teacher}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <CalendarIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    Batch: {request.batchName}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="body2" color="text.secondary">
                                                <strong>Requested:</strong> {new Date(request.requestDate).toLocaleDateString()}
                                            </Typography>
                                        </Grid>
                                        {request.responseDate && (
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant="body2" color="text.secondary">
                                                    <strong>Response:</strong> {new Date(request.responseDate).toLocaleDateString()}
                                                </Typography>
                                            </Grid>
                                        )}
                                    </Grid>

                                    <Card variant="outlined" sx={{
                                        bgcolor: 'background.paper',
                                        borderRadius: 2,
                                        p: 2,
                                        mb: 2
                                    }}>
                                        <Typography variant="body2">
                                            <strong>Your message:</strong> {request.message}
                                        </Typography>
                                    </Card>

                                    {request.rejectionReason && (
                                        <Card variant="outlined" sx={{
                                            bgcolor: 'error.light',
                                            borderColor: 'error.light',
                                            borderRadius: 2,
                                            p: 2,
                                            mb: 2
                                        }}>
                                            <Typography variant="body2" color="error.dark">
                                                <strong>Rejection reason:</strong> {request.rejectionReason}
                                            </Typography>
                                        </Card>
                                    )}
                                </Box>

                                {/* Action Button */}
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: { xs: 'flex-start', lg: 'flex-end' },
                                    gap: 1,
                                    minWidth: 150
                                }}>
                                    {request.status === 'approved' && (
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: 'primary.main',
                                                '&:hover': { bgcolor: 'primary.dark' },
                                                borderRadius: 3,
                                                px: 3,
                                                py: 1.5
                                            }}
                                        >
                                            Go to Class
                                        </Button>
                                    )}

                                    {request.status === 'pending' && (
                                        <Box sx={{ textAlign: { xs: 'left', lg: 'right' } }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                Waiting for teacher approval
                                            </Typography>
                                            <Button
                                                variant="text"
                                                size="small"
                                                sx={{
                                                    color: 'error.main',
                                                    '&:hover': { color: 'error.dark' }
                                                }}
                                            >
                                                Cancel Request
                                            </Button>
                                        </Box>
                                    )}

                                    {request.status === 'rejected' && (
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: 'grey.500',
                                                '&:hover': { bgcolor: 'grey.600' },
                                                borderRadius: 3,
                                                px: 3,
                                                py: 1.5
                                            }}
                                        >
                                            Request Again
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Empty State */}
            {requests.length === 0 && (
                <Card sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                    p: 6
                }}>
                    <CardContent>
                        <ClockIcon sx={{
                            color: 'text.disabled',
                            fontSize: 48,
                            mx: 'auto',
                            mb: 2
                        }} />
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'medium', mb: 1 }}>
                            No requests yet
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            Start by searching for classes and requesting to join!
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
                            Search Classes
                        </Button>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default MyRequests;