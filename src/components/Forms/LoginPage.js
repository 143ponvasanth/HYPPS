import React, { useState } from 'react';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  CheckCircle,
  Google,
  Facebook,
  Twitter,
  ArrowForward,
  Person,
  ArrowBack,
  Security
} from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme
} from '@mui/material';

const App = () => {
  const [currentView, setCurrentView] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const theme = useTheme();

  const handleInputChange = (field, isLogin = true) => (e) => {
    const value = field === 'rememberMe' ? e.target.checked : e.target.value;
    
    if (isLogin) {
      setFormData({
        ...formData,
        [field]: value
      });
    } else {
      setForgotPasswordData({
        ...forgotPasswordData,
        [field]: value
      });
    }
    
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setTimeout(() => {
        setIsLoading(false);
        setLoginSuccess(true);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const newErrors = {};
    if (!forgotPasswordData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(forgotPasswordData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setTimeout(() => {
        setIsLoading(false);
        setEmailSent(true);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  };

  const LoginForm = () => (
    <Box sx={{
      width: '100%',
      maxWidth: { xs: '100%', sm: '450px' },
      mx: 'auto',
      p: { xs: 2, sm: 3 }
    }}>
      <Box sx={{ 
        bgcolor: 'background.paper',
        borderRadius: 3,
        p: { xs: 3, sm: 4 },
        boxShadow: 3,
        border: '1px solid',
        borderColor: 'grey.200'
      }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            borderRadius: 2,
            mb: 3,
            boxShadow: 3
          }}>
            <Person sx={{ fontSize: 32, color: 'white' }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sign in to your account to continue
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleLogin} sx={{ '& > * + *': { mt: 3 } }}> {/* Increased spacing here */}
          <FormControl fullWidth>
            <TextField
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              label="Email Address"
              error={!!errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ 
                      color: focusedField === 'email' ? 'primary.main' : 'action.disabled',
                    }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  bgcolor: 'grey.50',
                }
              }}
            />
            {errors.email && (
              <FormHelperText error sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {errors.email}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth sx={{ mt: 3 }}> {/* Added extra margin top here */}
            <TextField
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange('password')}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              label="Password"
              error={!!errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ 
                      color: focusedField === 'password' ? 'primary.main' : 'action.disabled',
                    }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  bgcolor: 'grey.50',
                }
              }}
            />
            {errors.password && (
              <FormHelperText error sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {errors.password}
              </FormHelperText>
            )}
          </FormControl>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1,
            mt: 3 // Adjusted margin top to maintain spacing
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={formData.rememberMe}
                onChange={handleInputChange('rememberMe')}
                size="small"
                sx={{ p: 0.5 }}
              />
              <Typography variant="body2">Remember me</Typography>
            </Box>
            
            <Button
              onClick={() => setCurrentView('forgotPassword')}
              sx={{
                textTransform: 'none',
                p: 0,
                fontSize: '0.875rem',
                minWidth: 'auto'
              }}
            >
              Forgot password?
            </Button>
          </Box>

          <Button
            type="submit"
            disabled={isLoading}
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3, // Increased margin top here
              py: 1.5,
              borderRadius: 2,
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              fontWeight: 'bold',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 2
              },
              transition: 'all 0.2s ease',
            }}
          >
            {isLoading ? (
              <>
                <Box sx={{ 
                  width: 20,
                  height: 20,
                  border: '2px solid white',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  mr: 1
                }} />
                Signing In...
              </>
            ) : (
              <>
                Sign In
                <ArrowForward sx={{ ml: 1 }} />
              </>
            )}
          </Button>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ px: 1, color: 'text.secondary' }}>
              Or continue with
            </Typography>
          </Divider>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: 3,
            mt: 2,
            mb: 3
          }}>
            <IconButton
              aria-label="Login with Google"
              sx={{
                bgcolor: 'grey.100',
                '&:hover': {
                  bgcolor: 'grey.200',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.2s ease',
                width: 48,
                height: 48
              }}
            >
              <Google sx={{ 
                background: 'linear-gradient(to right, #EA4335, #FBBC05, #34A853, #4285F4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }} />
            </IconButton>
            
            <IconButton
              aria-label="Login with Facebook"
              sx={{
                bgcolor: 'grey.100',
                '&:hover': {
                  bgcolor: 'grey.200',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.2s ease',
                width: 48,
                height: 48
              }}
            >
              <Facebook sx={{ color: '#4267B2' }} />
            </IconButton>
            
            <IconButton
              aria-label="Login with X"
              sx={{
                bgcolor: 'grey.100',
                '&:hover': {
                  bgcolor: 'grey.200',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.2s ease',
                width: 48,
                height: 48
              }}
            >
              <Twitter sx={{ color: 'black' }} />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ textAlign: 'center', mt: 3 }}>
            Don't have an account?{' '}
            <Button
              sx={{
                textTransform: 'none',
                p: 0,
                fontSize: 'inherit',
                fontWeight: 'bold',
                minWidth: 'auto'
              }}
            >
              Sign up
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const ForgotPasswordForm = () => (
    <Box sx={{
      width: '100%',
      maxWidth: { xs: '100%', sm: '450px' },
      mx: 'auto',
      p: { xs: 2, sm: 3 }
    }}>
      <Box sx={{ 
        bgcolor: 'background.paper',
        borderRadius: 3,
        p: { xs: 3, sm: 4 },
        boxShadow: 3,
        border: '1px solid',
        borderColor: 'grey.200'
      }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
            borderRadius: 2,
            mb: 3,
            boxShadow: 3
          }}>
            <Security sx={{ fontSize: 32, color: 'white' }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            Reset Password
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {emailSent 
              ? "We've sent a password reset link to your email" 
              : "Enter your email to receive a reset link"
            }
          </Typography>
        </Box>

        {emailSent ? (
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{
              width: 80,
              height: 80,
              bgcolor: 'success.light',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3
            }}>
              <CheckCircle sx={{ fontSize: 40, color: 'success.main' }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If an account with <strong>{forgotPasswordData.email}</strong> exists, 
              you'll receive an email shortly.
            </Typography>
            
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                setEmailSent(false);
                setForgotPasswordData({ email: '' });
                setErrors({});
              }}
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 2,
                background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                fontWeight: 'bold'
              }}
            >
              Resend Email
            </Button>
            
            <Button
              fullWidth
              variant="text"
              startIcon={<ArrowBack />}
              onClick={() => setCurrentView('login')}
              sx={{
                mt: 1.5,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 'medium'
              }}
            >
              Back to Sign In
            </Button>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleForgotPassword} sx={{ '& > * + *': { mt: 2.5 } }}>
            <FormControl fullWidth>
              <TextField
                type="email"
                value={forgotPasswordData.email}
                onChange={handleInputChange('email', false)}
                onFocus={() => setFocusedField('forgot-email')}
                onBlur={() => setFocusedField(null)}
                label="Email Address"
                error={!!errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ 
                        color: focusedField === 'forgot-email' ? 'secondary.main' : 'action.disabled',
                      }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    bgcolor: 'grey.50',
                  }
                }}
              />
              {errors.email && (
                <FormHelperText error>
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <Button
              type="submit"
              disabled={isLoading}
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 2,
                background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                fontWeight: 'bold',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 2
                },
                transition: 'all 0.2s ease',
              }}
            >
              {isLoading ? (
                <>
                  <Box sx={{ 
                    width: 20,
                    height: 20,
                    border: '2px solid white',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    mr: 1
                  }} />
                  Sending...
                </>
              ) : (
                'Send Reset Link'
              )}
            </Button>

            <Button
              fullWidth
              variant="text"
              startIcon={<ArrowBack />}
              onClick={() => setCurrentView('login')}
              sx={{
                mt: 1,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 'medium'
              }}
            >
              Back to Sign In
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );

<<<<<<< Updated upstream
  if (loginSuccess) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: 3,
        background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #f5f3ff)',
      }}>
        <Box sx={{ 
          textAlign: 'center',
          maxWidth: 400,
          width: '100%'
        }}>
          <Box sx={{
            width: 96,
            height: 96,
            bgcolor: 'success.light',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3
          }}>
            <CheckCircle sx={{ fontSize: 48, color: 'success.main' }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            Welcome!
          </Typography>
          <Typography variant="body1">
            You have successfully signed in to your account.
          </Typography>
        </Box>
      </Box>
    );
  }
=======
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                type="button"
                onClick={() => console.log('Logging in with Google')}
                style={{
                  ...styles.socialButton,
                  background: hoverStates.socialButtons.google ? 
                    'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${hoverStates.socialButtons.google ? 
                    'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
                  transform: hoverStates.socialButtons.google ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={() => handleHover('socialButtons', { ...hoverStates.socialButtons, google: true })}
                onMouseLeave={() => handleHover('socialButtons', { ...hoverStates.socialButtons, google: false })}
              >
                <Chrome size={20} />
                Continue with Google
              </button>
              
              <button
                type="button"
                onClick={() => console.log('Logging in with Facebook')}
                style={{
                  ...styles.socialButton,
                  background: hoverStates.socialButtons.facebook ? 
                    'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${hoverStates.socialButtons.facebook ? 
                    'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
                  transform: hoverStates.socialButtons.facebook ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={() => handleHover('socialButtons', { ...hoverStates.socialButtons, facebook: true })}
                onMouseLeave={() => handleHover('socialButtons', { ...hoverStates.socialButtons, facebook: false })}
              >
                <Facebook size={20} />
                Continue with Facebook
              </button>
              
              <button
                type="button" 
                onClick={() => console.log('Logging in with X')}
                style={{
                  ...styles.socialButton,
                  background: hoverStates.socialButtons.twitter ? 
                    'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${hoverStates.socialButtons.twitter ? 
                    'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
                  transform: hoverStates.socialButtons.twitter ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={() => handleHover('socialButtons', { ...hoverStates.socialButtons, twitter: true })}
                onMouseLeave={() => handleHover('socialButtons', { ...hoverStates.socialButtons, twitter: false })}
              >
                <Twitter size={20} />
                Continue with X
              </button>
            </div>
>>>>>>> Stashed changes

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      p: 2,
      background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #f5f3ff)',
    }}>
      {currentView === 'login' ? <LoginForm /> : <ForgotPasswordForm />}
    </Box>
  );
};

export default App;