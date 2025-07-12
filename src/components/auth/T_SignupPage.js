import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Chip,
  Alert,
  Fade,
  Zoom,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Person,
  School,
  Phone,
  CheckCircle,
  Error,
} from '@mui/icons-material';

const subjects = [
  'Mathematics',
  'Science',
  'English Language Arts',
  'Social Studies',
  'Foreign Language',
  'Physical Education',
  'Art',
  'Music',
  'Computer Science',
  'Other',
];

const experienceLevels = [
  'New Teacher (0-2 years)',
  'Experienced (3-10 years)',
  'Veteran (10+ years)',
  'Substitute Teacher',
  'Retired Teacher',
];

const TeacherSignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    subject: '',
    experience: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    const issues = [];
    let strength = 0;

    if (password.length >= 8) strength += 1;
    else issues.push('At least 8 characters');

    if (/[A-Z]/.test(password)) strength += 1;
    else issues.push('One uppercase letter');

    if (/[a-z]/.test(password)) strength += 1;
    else issues.push('One lowercase letter');

    if (/\d/.test(password)) strength += 1;
    else issues.push('One number');

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    else issues.push('One special character');

    return {
      isValid: strength >= 4,
      strength: Math.min(strength, 5),
      issues,
    };
  };

  const getPasswordStrengthColor = (strength) => {
    if (strength <= 1) return '#f44336';
    if (strength <= 2) return '#ff9800';
    if (strength <= 3) return '#ffeb3b';
    return '#4caf50';
  };

  const getPasswordStrengthLabel = (strength) => {
    if (strength <= 1) return 'Weak';
    if (strength <= 2) return 'Fair';
    if (strength <= 3) return 'Good';
    return 'Strong';
  };

  const handleInputChange = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) {
        newErrors.password = 'Password does not meet requirements';
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select your teaching subject';
    }

    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          subject: '',
          experience: '',
          agreeToTerms: false,
        });
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const passwordValidation = validatePassword(formData.password);

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {submitSuccess && (
        <Fade in={submitSuccess}>
          <Alert
            severity="success"
            icon={<CheckCircle />}
            sx={{ mb: 3, borderRadius: 2 }}
          >
            Welcome to our teaching community! Please check your email to verify your account.
          </Alert>
        </Fade>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="action" />
                </InputAdornment>
              ),
            }}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="action" />
                </InputAdornment>
              ),
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="action" />
                </InputAdornment>
              ),
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            error={!!errors.phone}
            helperText={errors.phone || "We'll only use this for important account updates"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone color="action" />
                </InputAdornment>
              ),
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Teaching Subject *</InputLabel>
            <Select
              value={formData.subject}
              onChange={handleInputChange('subject')}
              error={!!errors.subject}
              label="Teaching Subject *"
            >
              {subjects.map((subject) => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
            {errors.subject && (
              <FormHelperText error>{errors.subject}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Experience Level *</InputLabel>
            <Select
              value={formData.experience}
              onChange={handleInputChange('experience')}
              error={!!errors.experience}
              label="Experience Level *"
            >
              {experienceLevels.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
            {errors.experience && (
              <FormHelperText error>{errors.experience}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleInputChange('password')}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
          
          {formData.password && (
            <Box sx={{ mt: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Password strength:
                </Typography>
                <Chip
                  label={getPasswordStrengthLabel(passwordValidation.strength)}
                  size="small"
                  sx={{
                    backgroundColor: getPasswordStrengthColor(passwordValidation.strength),
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
              </Box>
              <LinearProgress
                variant="determinate"
                value={(passwordValidation.strength / 5) * 100}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: 'grey.200',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: getPasswordStrengthColor(passwordValidation.strength),
                    borderRadius: 3,
                  },
                }}
              />
              {passwordValidation.issues.length > 0 && (
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Password must include:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {passwordValidation.issues.map((issue, index) => (
                      <Chip
                        key={index}
                        label={issue}
                        size="small"
                        icon={<Error />}
                        sx={{ fontSize: '0.75rem' }}
                        color="error"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    aria-label="toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleInputChange('agreeToTerms')}
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                I agree to the{' '}
                <Typography component="span" color="primary" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                  Terms of Service
                </Typography>{' '}
                and{' '}
                <Typography component="span" color="primary" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                  Privacy Policy
                </Typography>
              </Typography>
            }
          />
          {errors.agreeToTerms && (
            <FormHelperText error sx={{ ml: 0 }}>
              {errors.agreeToTerms}
            </FormHelperText>
          )}
        </Grid>

        <Grid item xs={12}>
          <Zoom in={true}>
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)',
                },
              }}
            >
              {isSubmitting ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LinearProgress sx={{ width: 100, height: 2 }} />
                  Creating Your Account...
                </Box>
              ) : (
                'Create Teaching Account'
              )}
            </Button>
          </Zoom>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeacherSignupForm;