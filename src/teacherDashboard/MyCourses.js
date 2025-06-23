import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  TextField, 
  Select, 
  MenuItem, 
  InputAdornment,
  Chip,
  Modal,
  Grid,
  IconButton
} from '@mui/material';
import { 
  Book as BookIcon,
  People as PeopleIcon,
  AttachMoney as DollarIcon,
  Visibility as EyeIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ContentCopy as CopyIcon,
  Add as AddIcon,
  Search as SearchIcon,
  Star as StarIcon
} from '@mui/icons-material';

const MyCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Advanced Calculus Mastery',
      description: 'Comprehensive course covering limits, derivatives, and integrals',
      price: 299,
      enrolledStudents: 45,
      status: 'Published',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      category: 'Mathematics',
      duration: '12 weeks',
      rating: 4.8,
      totalRatings: 32
    },
    {
      id: 2,
      title: 'Statistics for Beginners',
      description: 'Learn fundamental statistical concepts and applications',
      price: 199,
      enrolledStudents: 78,
      status: 'Published',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      category: 'Statistics',
      duration: '8 weeks',
      rating: 4.6,
      totalRatings: 56
    },
    {
      id: 3,
      title: 'Linear Algebra Fundamentals',
      description: 'Vector spaces, matrices, and linear transformations',
      price: 249,
      enrolledStudents: 23,
      status: 'Draft',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      category: 'Mathematics',
      duration: '10 weeks',
      rating: 0,
      totalRatings: 0
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    category: 'Mathematics'
  });

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || course.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleCreateCourse = () => {
    setShowCreateModal(true);
  };

  const handleEditCourse = (courseId) => {
    console.log('Editing course:', courseId);
  };

  const handleDeleteCourse = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== courseId));
    }
  };

  const handleDuplicateCourse = (courseId) => {
    const courseToDuplicate = courses.find(course => course.id === courseId);
    if (courseToDuplicate) {
      const newCourse = {
        ...courseToDuplicate,
        id: Math.max(...courses.map(c => c.id)) + 1,
        title: `${courseToDuplicate.title} (Copy)`,
        status: 'Draft',
        enrolledStudents: 0
      };
      setCourses([...courses, newCourse]);
    }
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const createdCourse = {
      ...newCourse,
      id: Math.max(...courses.map(c => c.id)) + 1,
      status: 'Draft',
      enrolledStudents: 0,
      rating: 0,
      totalRatings: 0,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    };
    setCourses([...courses, createdCourse]);
    setShowCreateModal(false);
    setNewCourse({
      title: '',
      description: '',
      price: '',
      duration: '',
      category: 'Mathematics'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const totalRevenue = courses.reduce((sum, course) => sum + (course.price * course.enrolledStudents), 0);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 3 }}>
      {/* Header Section */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: { md: 'center' }, 
        justifyContent: 'space-between',
        gap: 2,
        textAlign: 'left'
      }}>
        <Box>
          <Typography variant="h4" component="h1" fontWeight="bold" sx={{ textAlign: 'left' }}>
            My Courses
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'left' }}>
            Manage your course content and track performance
          </Typography>
        </Box>
        <Button
          onClick={handleCreateCourse}
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: '#4ECDC4',
            '&:hover': { bgcolor: '#45B7AA' },
            alignSelf: 'flex-start'
          }}
        >
          Create Course
        </Button>
      </Box>

      {/* Filters Section */}
      <Card sx={{ p: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 2,
          textAlign: 'left'
        }}>
          <TextField
            fullWidth
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ textAlign: 'left' }}
          />
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            sx={{ minWidth: 180, textAlign: 'left' }}
          >
            <MenuItem value="All" sx={{ justifyContent: 'flex-start' }}>All Status</MenuItem>
            <MenuItem value="Published" sx={{ justifyContent: 'flex-start' }}>Published</MenuItem>
            <MenuItem value="Draft" sx={{ justifyContent: 'flex-start' }}>Draft</MenuItem>
          </Select>
        </Box>
      </Card>

      {/* Stats Cards Section - WITH HOVER EFFECTS */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            width: 312,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 6
            }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" color="text.secondary">Total Courses</Typography>
                  <Typography variant="h5" fontWeight="bold">{courses.length}</Typography>
                </Box>
                <BookIcon sx={{ color: '#4ECDC4', fontSize: 32 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            width: 312,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 6
            }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" color="text.secondary">Published</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {courses.filter(c => c.status === 'Published').length}
                  </Typography>
                </Box>
                <EyeIcon sx={{ color: 'success.main', fontSize: 32 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            width: 312,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 6
            }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" color="text.secondary">Total Students</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {courses.reduce((sum, course) => sum + course.enrolledStudents, 0)}
                  </Typography>
                </Box>
                <PeopleIcon sx={{ color: 'primary.main', fontSize: 32 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            width: 312,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 6
            }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" color="text.secondary">Total Revenue</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    ${totalRevenue.toLocaleString()}
                  </Typography>
                </Box>
                <DollarIcon sx={{ color: 'warning.main', fontSize: 32 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Course Grid Section - WITHOUT HOVER EFFECTS */}
      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} lg={4} key={course.id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                />
                <Chip
                  label={course.status}
                  size="small"
                  sx={{ 
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: course.status === 'Published' ? 'success.light' : 'warning.light',
                    color: course.status === 'Published' ? 'success.dark' : 'warning.dark'
                  }}
                />
              </Box>
              
              <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {course.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {course.description}
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2
                }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <PeopleIcon fontSize="small" />
                      {course.enrolledStudents}
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <DollarIcon fontSize="small" />
                      {course.price}
                    </Typography>
                  </Box>
                  {course.rating > 0 && (
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', color: 'warning.main' }}>
                      <StarIcon fontSize="small" />
                      {course.rating}
                      <Typography component="span" variant="body2" color="text.secondary">
                        ({course.totalRatings})
                      </Typography>
                    </Typography>
                  )}
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={() => handleEditCourse(course.id)}
                    fullWidth
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    Edit
                  </Button>
                  <IconButton
                    onClick={() => handleDuplicateCourse(course.id)}
                    color="primary"
                  >
                    <CopyIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteCourse(course.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Create Course Modal */}
      <Modal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card sx={{ width: '100%', maxWidth: 600, maxHeight: '90vh', overflow: 'auto', textAlign: 'left' }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: 'left' }}>
              Create New Course
            </Typography>
            
            <Box component="form" onSubmit={handleCreateSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Course Title"
                name="title"
                value={newCourse.title}
                onChange={handleInputChange}
                placeholder="Enter course title..."
                fullWidth
                required
                sx={{ textAlign: 'left' }}
              />
              
              <TextField
                label="Description"
                name="description"
                value={newCourse.description}
                onChange={handleInputChange}
                placeholder="Course description..."
                multiline
                rows={4}
                fullWidth
                required
                sx={{ textAlign: 'left' }}
              />
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Price ($)"
                    name="price"
                    type="number"
                    value={newCourse.price}
                    onChange={handleInputChange}
                    placeholder="99"
                    fullWidth
                    required
                    sx={{ textAlign: 'left' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Duration"
                    name="duration"
                    value={newCourse.duration}
                    onChange={handleInputChange}
                    placeholder="8 weeks"
                    fullWidth
                    required
                    sx={{ textAlign: 'left' }}
                  />
                </Grid>
              </Grid>
              
              <Select
                label="Category"
                name="category"
                value={newCourse.category}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{ textAlign: 'left' }}
              >
                <MenuItem value="Mathematics" sx={{ justifyContent: 'flex-start' }}>Mathematics</MenuItem>
                <MenuItem value="Statistics" sx={{ justifyContent: 'flex-start' }}>Statistics</MenuItem>
                <MenuItem value="Physics" sx={{ justifyContent: 'flex-start' }}>Physics</MenuItem>
                <MenuItem value="Chemistry" sx={{ justifyContent: 'flex-start' }}>Chemistry</MenuItem>
              </Select>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, pt: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ bgcolor: '#4ECDC4', '&:hover': { bgcolor: '#45B7AA' } }}
                >
                  Create Course
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </Box>
  );
};

export default MyCourses;