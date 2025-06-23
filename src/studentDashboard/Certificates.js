import React from 'react';
import {
    EmojiEvents as AwardIcon,
    GetApp as DownloadIcon,
    Visibility as EyeIcon,
    Today as CalendarIcon,
    CheckCircle as CheckCircleIcon,
    EmojiEvents as TrophyIcon
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Chip,
    Button,
    Divider,
    LinearProgress,
    useTheme,
    Avatar
} from '@mui/material';

const Certificates = () => {
    const theme = useTheme();

    const certificates = [
        {
            id: 1,
            title: 'Advanced React Development Certificate',
            className: 'Advanced React Development',
            teacher: 'Sarah Johnson',
            completionDate: '2024-01-25',
            issueDate: '2024-01-26',
            grade: 'A+',
            skills: ['React Hooks', 'State Management', 'Component Architecture', 'Performance Optimization'],
            certificateNumber: 'LH-RD-2024-001',
            status: 'issued'
        },
        {
            id: 2,
            title: 'Guitar Fundamentals Certificate',
            className: 'Guitar Masterclass',
            teacher: 'David Thompson',
            completionDate: '2024-01-15',
            issueDate: '2024-01-16',
            grade: 'A',
            skills: ['Basic Chords', 'Strumming Patterns', 'Music Theory', 'Song Performance'],
            certificateNumber: 'LH-GM-2024-002',
            status: 'issued'
        },
        {
            id: 3,
            title: 'Digital Marketing Mastery Certificate',
            className: 'Digital Marketing Mastery',
            teacher: 'Mike Chen',
            completionDate: '2024-01-10',
            issueDate: '2024-01-12',
            grade: 'A-',
            skills: ['Content Marketing', 'Social Media Strategy', 'Analytics', 'Campaign Management'],
            certificateNumber: 'LH-DM-2024-003',
            status: 'issued'
        },
        {
            id: 4,
            title: 'Python Data Science Certificate',
            className: 'Python for Data Science',
            teacher: 'Lisa Rodriguez',
            completionDate: '2024-02-01',
            issueDate: 'pending',
            grade: 'A+',
            skills: ['Python Programming', 'Data Analysis', 'Visualization', 'Machine Learning Basics'],
            certificateNumber: 'LH-PDS-2024-004',
            status: 'processing'
        }
    ];

    const inProgressClasses = [
        {
            id: 1,
            className: 'Business Analytics',
            teacher: 'Emily Watson',
            progress: 75,
            estimatedCompletion: '2024-02-15'
        },
        {
            id: 2,
            className: 'Culinary Arts Fundamentals',
            teacher: 'Chef Antonio',
            progress: 60,
            estimatedCompletion: '2024-02-20'
        }
    ];

    const getGradeColor = (grade) => {
        if (grade.startsWith('A')) return { bgcolor: 'success.light', color: 'success.dark' };
        if (grade.startsWith('B')) return { bgcolor: 'info.light', color: 'info.dark' };
        if (grade.startsWith('C')) return { bgcolor: 'warning.light', color: 'warning.dark' };
        return { bgcolor: 'grey.100', color: 'grey.800' };
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'issued':
                return { bgcolor: 'success.light', color: 'success.dark' };
            case 'processing':
                return { bgcolor: 'warning.light', color: 'warning.dark' };
            default:
                return { bgcolor: 'grey.100', color: 'grey.800' };
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Header */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Certificates
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        View and download your earned certificates and track your progress
                    </Typography>
                </CardContent>
            </Card>

            {/* Stats Cards */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{
                        borderRadius: 2,
                        boxShadow: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        textAlign: 'center',
                        p: 3
                    }}>
                        <AwardIcon sx={{
                            color: 'success.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            3
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Certificates Earned
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{
                        borderRadius: 2,
                        boxShadow: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        textAlign: 'center',
                        p: 3
                    }}>
                        <CheckCircleIcon sx={{
                            color: 'info.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Classes Completed
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{
                        borderRadius: 2,
                        boxShadow: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        textAlign: 'center',
                        p: 3
                    }}>
                        <CalendarIcon sx={{
                            color: 'secondary.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            2
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            In Progress
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{
                        borderRadius: 2,
                        boxShadow: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        textAlign: 'center',
                        p: 3
                    }}>
                        <TrophyIcon sx={{
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            A
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Average Grade
                        </Typography>
                    </Card>
                </Grid>
            </Grid>

            {/* Earned Certificates */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Earned Certificates
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {certificates.map((cert) => (
                            <Card
                                key={cert.id}
                                variant="outlined"
                                sx={{
                                    borderRadius: 3,
                                    '&:hover': {
                                        boxShadow: 2
                                    }
                                }}
                            >
                                <CardContent>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', lg: 'row' },
                                        justifyContent: 'space-between',
                                        gap: 3
                                    }}>
                                        {/* Certificate Info */}
                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                                <AwardIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                                                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                                    {cert.title}
                                                </Typography>
                                                <Chip
                                                    label={cert.status}
                                                    size="small"
                                                    sx={{
                                                        textTransform: 'capitalize',
                                                        ...getStatusColor(cert.status)
                                                    }}
                                                />
                                            </Box>

                                            <Grid container spacing={2} sx={{ mb: 2 }}>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <strong>Teacher:</strong> {cert.teacher}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <strong>Grade:</strong>
                                                        <Chip
                                                            label={cert.grade}
                                                            size="small"
                                                            sx={{
                                                                ml: 1,
                                                                ...getGradeColor(cert.grade)
                                                            }}
                                                        />
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <strong>Completed:</strong> {formatDate(cert.completionDate)}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <strong>Certificate #:</strong> {cert.certificateNumber}
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                            <Box sx={{ mb: 2 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 1 }}>
                                                    Skills Mastered:
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                    {cert.skills.map((skill, index) => (
                                                        <Chip
                                                            key={index}
                                                            label={skill}
                                                            size="small"
                                                            sx={{
                                                                bgcolor: 'primary.light',
                                                                color: 'primary.dark'
                                                            }}
                                                        />
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Box>

                                        {/* Action Buttons */}
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'row', lg: 'column' },
                                            gap: 1,
                                            alignItems: { xs: 'flex-start', lg: 'flex-end' }
                                        }}>
                                            {cert.status === 'issued' && (
                                                <>
                                                    <Button
                                                        variant="contained"
                                                        startIcon={<DownloadIcon />}
                                                        sx={{
                                                            borderRadius: 3,
                                                            minWidth: { xs: 'auto', lg: 150 }
                                                        }}
                                                    >
                                                        Download
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        startIcon={<EyeIcon />}
                                                        sx={{
                                                            borderRadius: 3,
                                                            borderColor: 'primary.main',
                                                            color: 'primary.main',
                                                            minWidth: { xs: 'auto', lg: 150 },
                                                            '&:hover': {
                                                                bgcolor: 'primary.main',
                                                                color: 'primary.contrastText'
                                                            }
                                                        }}
                                                    >
                                                        View
                                                    </Button>
                                                </>
                                            )}

                                            {cert.status === 'processing' && (
                                                <Box sx={{ textAlign: { xs: 'left', lg: 'right' } }}>
                                                    <Typography variant="body2" color="warning.dark" sx={{ fontWeight: 'medium' }}>
                                                        Processing...
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Available in 2-3 days
                                                    </Typography>
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </CardContent>
            </Card>

            {/* In Progress Classes */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
                        In Progress
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {inProgressClasses.map((classItem) => (
                            <Card key={classItem.id} variant="outlined">
                                <CardContent>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        mb: 2
                                    }}>
                                        <Box>
                                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                                {classItem.className}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                with {classItem.teacher}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'right' }}>
                                            <Typography variant="h5" component="p" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                                {classItem.progress}%
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Complete
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <LinearProgress
                                        variant="determinate"
                                        value={classItem.progress}
                                        sx={{
                                            height: 8,
                                            borderRadius: 4,
                                            mb: 2,
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: 'primary.main',
                                                borderRadius: 4
                                            }
                                        }}
                                    />

                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Estimated completion:</strong> {formatDate(classItem.estimatedCompletion)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </CardContent>
            </Card>

            {/* Achievement Gallery */}
            <Card sx={{
                borderRadius: 3,
                boxShadow: 3,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                color: 'primary.contrastText'
            }}>
                <CardContent>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Achievement Gallery
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'primary.light', mb: 3 }}>
                        Share your achievements with the world! Connect your certificates to LinkedIn and other professional networks.
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: 'background.paper',
                                color: 'primary.main',
                                borderRadius: 3,
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: 'action.hover'
                                }
                            }}
                        >
                            Share on LinkedIn
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: 'primary.dark',
                                color: 'primary.contrastText',
                                borderRadius: 3,
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: 'primary.dark'
                                }
                            }}
                        >
                            Create Portfolio
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: 'primary.dark',
                                color: 'primary.contrastText',
                                borderRadius: 3,
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: 'primary.dark'
                                }
                            }}
                        >
                            Print All Certificates
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Certificates;