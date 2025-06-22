import React, { useState } from 'react';
import {
    Description as FileTextIcon,
    GetApp as DownloadIcon,
    Visibility as EyeIcon,
    Search as SearchIcon,
    FilterList as FilterIcon,
    MenuBook as BookIcon,
    OndemandVideo as VideoIcon,
    Image as ImageIcon,
    Code as FileCodeIcon
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
    Avatar
} from '@mui/material';

const Resources = () => {
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');

    const resources = [
        {
            id: 1,
            title: 'React Hooks Cheat Sheet',
            type: 'document',
            className: 'Advanced React Development',
            teacher: 'Sarah Johnson',
            size: '2.4 MB',
            uploadDate: '2024-01-20',
            downloads: 45,
            description: 'Comprehensive guide to all React hooks with examples'
        },
        {
            id: 2,
            title: 'Marketing Strategy Template',
            type: 'document',
            className: 'Digital Marketing Mastery',
            teacher: 'Mike Chen',
            size: '1.8 MB',
            uploadDate: '2024-01-18',
            downloads: 32,
            description: 'Complete template for creating marketing strategies'
        },
        {
            id: 3,
            title: 'Chord Progression Chart',
            type: 'image',
            className: 'Guitar Masterclass',
            teacher: 'David Thompson',
            size: '856 KB',
            uploadDate: '2024-01-15',
            downloads: 28,
            description: 'Visual chart of common guitar chord progressions'
        },
        {
            id: 4,
            title: 'Python Data Analysis Tutorial',
            type: 'video',
            className: 'Python for Data Science',
            teacher: 'Lisa Rodriguez',
            size: '125 MB',
            uploadDate: '2024-01-12',
            downloads: 67,
            description: 'Step-by-step tutorial on data analysis with pandas'
        },
        {
            id: 5,
            title: 'Component Architecture Guide',
            type: 'code',
            className: 'Advanced React Development',
            teacher: 'Sarah Johnson',
            size: '3.2 MB',
            uploadDate: '2024-01-10',
            downloads: 41,
            description: 'Best practices for structuring React components'
        },
        {
            id: 6,
            title: 'Recipe Collection PDF',
            type: 'document',
            className: 'Culinary Arts Fundamentals',
            teacher: 'Chef Antonio',
            size: '4.7 MB',
            uploadDate: '2024-01-08',
            downloads: 89,
            description: 'Collection of fundamental cooking recipes and techniques'
        }
    ];

    const getTypeIcon = (type) => {
        switch (type) {
            case 'document':
                return <FileTextIcon sx={{ color: 'primary.main' }} />;
            case 'video':
                return <VideoIcon sx={{ color: 'error.main' }} />;
            case 'image':
                return <ImageIcon sx={{ color: 'success.main' }} />;
            case 'code':
                return <FileCodeIcon sx={{ color: 'secondary.main' }} />;
            default:
                return <FileTextIcon sx={{ color: 'text.secondary' }} />;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'document':
                return { bgcolor: 'primary.light', color: 'primary.dark' };
            case 'video':
                return { bgcolor: 'error.light', color: 'error.dark' };
            case 'image':
                return { bgcolor: 'success.light', color: 'success.dark' };
            case 'code':
                return { bgcolor: 'secondary.light', color: 'secondary.dark' };
            default:
                return { bgcolor: 'grey.100', color: 'grey.800' };
        }
    };

    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.teacher.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = selectedFilter === 'all' || resource.type === selectedFilter;

        return matchesSearch && matchesFilter;
    });

    const filterOptions = [
        { value: 'all', label: 'All Resources', icon: BookIcon },
        { value: 'document', label: 'Documents', icon: FileTextIcon },
        { value: 'video', label: 'Videos', icon: VideoIcon },
        { value: 'image', label: 'Images', icon: ImageIcon },
        { value: 'code', label: 'Code', icon: FileCodeIcon }
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Header */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Resources
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Access shared materials, notes, and resources from your classes
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
                            placeholder="Search resources by title, class, or teacher..."
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

                        {/* Filter */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FilterIcon sx={{ color: 'text.secondary' }} />
                            <Select
                                value={selectedFilter}
                                onChange={(e) => setSelectedFilter(e.target.value)}
                                sx={{
                                    borderRadius: 3,
                                    minWidth: 200,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'divider'
                                    }
                                }}
                            >
                                {filterOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <option.icon sx={{ fontSize: 20 }} />
                                            {option.label}
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Resources Grid */}
            <Grid container spacing={3}>
                {filteredResources.map((resource) => (
                    <Grid item xs={12} sm={6} lg={4} key={resource.id}>
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
                            <CardContent sx={{ flex: 1 }}>
                                {/* Resource Header */}
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        {getTypeIcon(resource.type)}
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                                {resource.title}
                                            </Typography>
                                            <Chip
                                                label={resource.type}
                                                size="small"
                                                sx={{
                                                    mt: 1,
                                                    textTransform: 'capitalize',
                                                    ...getTypeColor(resource.type)
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Resource Info */}
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Class:</strong> {resource.className}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Teacher:</strong> {resource.teacher}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Size:</strong> {resource.size}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Uploaded:</strong> {new Date(resource.uploadDate).toLocaleDateString()}
                                    </Typography>
                                </Box>

                                {/* Description */}
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    {resource.description}
                                </Typography>

                                {/* Download Stats */}
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 2
                                }}>
                                    <Typography variant="body2" color="text.secondary">
                                        {resource.downloads} downloads
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Updated recently
                                    </Typography>
                                </Box>
                            </CardContent>

                            {/* Action Buttons */}
                            <Box sx={{ p: 2, pt: 0 }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        startIcon={<DownloadIcon />}
                                        sx={{
                                            borderRadius: 3,
                                            py: 1
                                        }}
                                    >
                                        Download
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
                                        <EyeIcon />
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Empty State */}
            {filteredResources.length === 0 && (
                <Card sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                    p: 6
                }}>
                    <CardContent>
                        <BookIcon sx={{
                            color: 'text.disabled',
                            fontSize: 48,
                            mx: 'auto',
                            mb: 2
                        }} />
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'medium', mb: 1 }}>
                            No resources found
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Try adjusting your search terms or filters to find what you're looking for.
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
                        <FileTextIcon sx={{
                            color: 'primary.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            24
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Documents
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
                        <VideoIcon sx={{
                            color: 'error.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            8
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Videos
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
                        <ImageIcon sx={{
                            color: 'success.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            12
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Images
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
                        <FileCodeIcon sx={{
                            color: 'secondary.main',
                            fontSize: 32,
                            mx: 'auto',
                            mb: 1
                        }} />
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            6
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Code Files
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Resources;