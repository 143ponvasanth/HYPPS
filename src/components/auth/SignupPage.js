import React, { useState } from 'react';
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
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
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
  Security,
  HowToReg,
  Article,
  Balance
} from '@mui/icons-material';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [openDialog, setOpenDialog] = useState(null); // 'terms' or 'privacy'
  const theme = useTheme();

  const handleInputChange = (field) => (e) => {
    const value = field === 'agreeToTerms' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [field]: value
    });
    
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
  };

  const handleSubmit = (e) => {
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

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setTimeout(() => {
        setIsLoading(false);
        setSubmitSuccess(true);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  };

  const handleOpenDialog = (type) => {
    setOpenDialog(type);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  if (submitSuccess) {
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
            You have successfully created your account.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      p: 2,
      background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #f5f3ff)',
    }}>
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
              <HowToReg sx={{ fontSize: 32, color: 'white' }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              Create Account
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Join thousands of users worldwide
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ '& > * + *': { mt: 3 } }}>
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

            <FormControl fullWidth sx={{ mt: 3 }}>
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
              gap: 1,
              mt: 2
            }}>
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleInputChange('agreeToTerms')}
                size="small"
                sx={{ p: 0.5 }}
              />
              <Typography variant="body2">
                I agree to the{' '}
                <Typography 
                  component="span" 
                  onClick={() => handleOpenDialog('terms')}
                  sx={{ 
                    color: 'primary.main', 
                    fontWeight: 'medium',
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Terms of Service
                </Typography>{' '}
                and{' '}
                <Typography 
                  component="span" 
                  onClick={() => handleOpenDialog('privacy')}
                  sx={{ 
                    color: 'primary.main', 
                    fontWeight: 'medium',
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Privacy Policy
                </Typography>
              </Typography>
            </Box>
            {errors.agreeToTerms && (
              <FormHelperText error sx={{ mt: 0 }}>
                {errors.agreeToTerms}
              </FormHelperText>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
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
                  Creating Account...
                </>
              ) : (
                <>
                  Sign Up
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
                aria-label="Sign up with Google"
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
                aria-label="Sign up with Facebook"
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
                aria-label="Sign up with X"
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
              Already have an account?{' '}
              <Button
                sx={{
                  textTransform: 'none',
                  p: 0,
                  fontSize: 'inherit',
                  fontWeight: 'bold',
                  minWidth: 'auto'
                }}
              >
                Sign in
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Terms of Service Dialog */}
      <Dialog
        open={openDialog === 'terms'}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Balance color="primary" />
          <Typography variant="h6" fontWeight="bold">Terms of Service</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" paragraph>
              <strong>1. Acceptance of Terms</strong><br />
              By accessing and using our service, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>2. Use License</strong><br />
              Permission is granted to temporarily download one copy of the materials on our website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>3. User Accounts</strong><br />
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
              You are responsible for safeguarding the password and for all activities that occur under your account.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>4. Prohibited Uses</strong><br />
              You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts, 
              to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>5. Contact Information</strong><br />
              If you have any questions about these Terms of Service, please contact us at legal@company.com.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog
        open={openDialog === 'privacy'}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Security color="primary" />
          <Typography variant="h6" fontWeight="bold">Privacy Policy</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" paragraph>
              <strong>1. Information We Collect</strong><br />
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>2. How We Use Your Information</strong><br />
              We use the information we collect to provide, maintain, and improve our services, 
              to process transactions and send related information, and to respond to your comments and questions.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>3. Information Sharing</strong><br />
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as required by law or to protect our rights and safety.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>4. Data Security</strong><br />
              We implement appropriate technical and organizational measures to protect your personal information, 
              including encryption and access controls.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>5. Your Rights</strong><br />
              You have certain rights regarding your personal information, including the right to access, 
              correct, or delete your data.
            </Typography>
            
            <Typography variant="body1" paragraph>
              <strong>6. Contact Us</strong><br />
              If you have any questions about this Privacy Policy, please contact our Data Protection Officer at privacy@company.com.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SignUpForm;