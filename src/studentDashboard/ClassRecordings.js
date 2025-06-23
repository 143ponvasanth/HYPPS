import React, { useState } from 'react';
import {
    PlayArrow as PlayIcon,
    GetApp as DownloadIcon,
    AccessTime as ClockIcon,
    CalendarToday as CalendarIcon,
    Search as SearchIcon,
    FilterList as FilterIcon
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    Chip,
    Button,
    Divider,
    useTheme,
    Avatar,
    IconButton
} from '@mui/material';

const ClassRecordings = () => {
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState('all');

    const recordings = [
        {
            id: 1,
            title: 'Introduction to React Hooks',
            className: 'Advanced React Development',
            teacher: 'Sarah Johnson',
            date: '2024-01-20',
            duration: '1h 45m',
            size: '245 MB',
            thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 23,
            isNew: true
        },
        {
            id: 2,
            title: 'State Management Best Practices',
            className: 'Advanced React Development',
            teacher: 'Sarah Johnson',
            date: '2024-01-18',
            duration: '2h 15m',
            size: '320 MB',
            thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 34,
            isNew: false
        },
        {
            id: 3,
            title: 'Basic Chord Progressions',
            className: 'Guitar Masterclass',
            teacher: 'David Thompson',
            date: '2024-01-16',
            duration: '1h 30m',
            size: '180 MB',
            thumbnail: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 45,
            isNew: false
        },
        {
            id: 4,
            title: 'Content Marketing Strategies',
            className: 'Digital Marketing Mastery',
            teacher: 'Mike Chen',
            date: '2024-01-14',
            duration: '1h 55m',
            size: '285 MB',
            thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 28,
            isNew: false
        },
        {
            id: 5,
            title: 'Data Visualization with Python',
            className: 'Python for Data Science',
            teacher: 'Lisa Rodriguez',
            date: '2024-01-12',
            duration: '2h 30m',
            size: '410 MB',
            thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 52,
            isNew: false
        },
        {
            id: 6,
            title: 'Knife Skills and Food Safety',
            className: 'Culinary Arts Fundamentals',
            teacher: 'Chef Antonio',
            date: '2024-01-10',
            duration: '1h 20m',
            size: '195 MB',
            thumbnail: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 67,
            isNew: false
        }
    ];

    const classes = [...new Set(recordings.map(r => r.className))];

    const filteredRecordings = recordings.filter(recording => {
        const matchesSearch = recording.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recording.teacher.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesClass = selectedClass === 'all' || recording.className === selectedClass;
        return matchesSearch && matchesClass;
    });

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
                        Class Recordings
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Watch past live sessions and review class content
                    </Typography>
                </CardContent>
            </Card>

            {/* Search and Filter */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        alignItems: { lg: 'center' },
                        justifyContent: 'space-between',
                        gap: 2
                    }}>
                        {/* Search */}
                        <TextField
                            fullWidth
                            placeholder="Search recordings by title or teacher..."
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

                        {/* Class Filter */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FilterIcon sx={{ color: 'text.secondary' }} />
                            <Select
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                                sx={{
                                    borderRadius: 3,
                                    minWidth: 200,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'divider'
                                    }
                                }}
                            >
                                <MenuItem value="all">All Classes</MenuItem>
                                {classes.map((className) => (
                                    <MenuItem key={className} value={className}>
                                        {className}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Recordings Grid */}
            <Grid container spacing={3}>
                {filteredRecordings.map((recording) => (
                    <Grid item xs={12} sm={6} lg={4} key={recording.id}>
                        <Card sx={{
                            borderRadius: 3,
                            boxShadow: 3,
                            border: '1px solid',
                            borderColor: 'divider',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                boxShadow: 6,
                                transform: 'translateY(-4px)'
                            },
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Thumbnail */}
                            <Box sx={{
                                position: 'relative',
                                height: 200,
                                overflow: 'hidden'
                            }}>
                                <Box
                                    component="img"
                                    src={recording.thumbnail}
                                    alt={recording.title}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    bgcolor: 'rgba(0,0,0,0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    '&:hover': {
                                        opacity: 1
                                    }
                                }}>
                                    <IconButton sx={{
                                        bgcolor: 'background.paper',
                                        color: 'primary.main',
                                        '&:hover': {
                                            bgcolor: 'action.hover'
                                        }
                                    }}>
                                        <PlayIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                {recording.isNew && (
                                    <Chip
                                        label="New"
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            top: 12,
                                            left: 12,
                                            bgcolor: 'error.main',
                                            color: 'error.contrastText'
                                        }}
                                    />
                                )}

                                <Chip
                                    label={recording.duration}
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 12,
                                        right: 12,
                                        bgcolor: 'rgba(0,0,0,0.7)',
                                        color: 'common.white'
                                    }}
                                />
                            </Box>

                            {/* Content */}
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {recording.title}
                                </Typography>

                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Class:</strong> {recording.className}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Teacher:</strong> {recording.teacher}
                                    </Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        mt: 1
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                                            <Typography variant="body2" color="text.secondary">
                                                {formatDate(recording.date)}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <ClockIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                                            <Typography variant="body2" color="text.secondary">
                                                {recording.duration}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Stats */}
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Typography variant="body2" color="text.secondary">
                                        {recording.views} views
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {recording.size}
                                    </Typography>
                                </Box>
                            </CardContent>

                            {/* Action Buttons */}
                            <Box sx={{ p: 2, pt: 0 }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        startIcon={<PlayIcon />}
                                        sx={{
                                            borderRadius: 3,
                                            py: 1
                                        }}
                                    >
                                        Watch
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            minWidth: 'auto',
                                            px: 2,
                                            borderRadius: 3,
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            '&:hover': {
                                                bgcolor: 'primary.main',
                                                color: 'primary.contrastText'
                                            }
                                        }}
                                    >
                                        <DownloadIcon />
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Empty State */}
            {filteredRecordings.length === 0 && (
                <Card sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                    p: 6
                }}>
                    <CardContent>
                        <PlayIcon sx={{
                            color: 'text.disabled',
                            fontSize: 48,
                            mx: 'auto',
                            mb: 2
                        }} />
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'medium', mb: 1 }}>
                            No recordings found
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Try adjusting your search terms or class filter to find recordings.
                        </Typography>
                    </CardContent>
                </Card>
            )}

            {/* Quick Stats */}
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
                        <PlayIcon sx={{
                            color: 'primary.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            {recordings.length}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Total Recordings
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
                        <ClockIcon sx={{
                            color: 'success.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            12h
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Watch Time
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
                        <DownloadIcon sx={{
                            color: 'info.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            8
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Downloaded
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
                            3
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This Week
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ClassRecordings;