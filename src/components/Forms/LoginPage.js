import React, { useState } from 'react';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  CheckCircle,
  Chrome,
  Facebook,
  Twitter,
  Zap,
  ArrowRight,
  User
} from 'lucide-react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [hoverStates, setHoverStates] = useState({
    submitButton: false,
    socialButtons: {},
    signUpButton: false,
    forgotPassword: false
  });

  const handleInputChange = (field) => (e) => {
    const value = field === 'rememberMe' ? e.target.checked : e.target.value;
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
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setTimeout(() => {
        setIsLoading(false);
        setLoginSuccess(true);
        console.log('Login successful', formData);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  };

  const handleHover = (element, isHovered) => {
    setHoverStates(prev => ({
      ...prev,
      [element]: isHovered
    }));
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)',
      position: 'relative',
      overflow: 'hidden'
    },
    formContainer: {
      maxWidth: '448px',
      width: '100%',
      position: 'relative',
      zIndex: 10
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '40px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden'
    },
    header: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    userIconContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '64px',
      height: '64px',
      background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
      borderRadius: '12px',
      marginBottom: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #ffffff, #bfdbfe)',
      backgroundClip: 'text',
      color: 'transparent',
      marginBottom: '12px',
      lineHeight: '1.2'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%'
    },
    inputContainer: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      width: '100%',
      padding: '15px 16px 15px 48px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: `1px solid ${errors.email ? 'rgba(248, 113, 113, 0.5)' : 
        focusedField === 'email' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
      borderRadius: '12px',
      color: 'white',
      outline: 'none',
      fontSize: '15px',
      boxShadow: errors.email ? '0 0 0 2px rgba(248, 113, 113, 0.25)' : 
        focusedField === 'email' ? '0 0 0 2px rgba(96, 165, 250, 0.25)' : 'none',
      transition: 'all 0.2s ease',
      height: '48px',
      boxSizing: 'border-box'
    },
    passwordInput: {
      width: '100%',
      padding: '15px 48px 15px 48px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: `1px solid ${errors.password ? 'rgba(248, 113, 113, 0.5)' : 
        focusedField === 'password' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
      borderRadius: '12px',
      color: 'white',
      outline: 'none',
      fontSize: '15px',
      boxShadow: errors.password ? '0 0 0 2px rgba(248, 113, 113, 0.25)' : 
        focusedField === 'password' ? '0 0 0 2px rgba(96, 165, 250, 0.25)' : 'none',
      transition: 'all 0.2s ease',
      height: '48px',
      boxSizing: 'border-box'
    },
    inputIcon: {
      position: 'absolute',
      left: '16px',
      color: focusedField === 'email' ? '#60a5fa' : 'rgba(255, 255, 255, 0.4)',
      transition: 'color 0.2s ease',
      pointerEvents: 'none',
      zIndex: 1
    },
    passwordToggle: {
      position: 'absolute',
      right: '16px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'rgba(255, 255, 255, 0.4)',
      transition: 'color 0.2s ease',
      ':hover': {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      zIndex: 1
    },
    submitButton: {
      width: '100%',
      background: hoverStates.submitButton ? 
        'linear-gradient(to right, #7c3aed, #2563eb)' : 
        'linear-gradient(to right, #8b5cf6, #3b82f6)',
      color: 'white',
      fontWeight: 600,
      padding: '16px 24px',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '32px',
      opacity: isLoading ? 0.7 : 1,
      transition: 'all 0.3s ease',
      transform: hoverStates.submitButton ? 'scale(1.02)' : 'scale(1)',
      boxShadow: hoverStates.submitButton ? 
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
    },
    socialButton: {
      width: '100%',
      padding: '14px 24px',
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    signUpButton: {
      background: 'none',
      border: 'none',
      color: hoverStates.signUpButton ? '#93c5fd' : '#60a5fa',
      fontWeight: 600,
      cursor: 'pointer',
      textDecoration: hoverStates.signUpButton ? 'underline' : 'none',
      textUnderlineOffset: '2px',
      transition: 'all 0.2s ease'
    },
    forgotPassword: {
      background: 'none',
      border: 'none',
      color: hoverStates.forgotPassword ? '#93c5fd' : '#60a5fa',
      fontSize: '14px',
      cursor: 'pointer',
      textDecoration: hoverStates.forgotPassword ? 'underline' : 'none',
      transition: 'all 0.2s ease'
    },
    label: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '14px',
      fontWeight: 500,
      marginBottom: '4px'
    },
    errorText: {
      color: '#f87171',
      fontSize: '12px',
      marginTop: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    rememberForgot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '-8px'
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer'
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: '24px 0'
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      background: 'rgba(255, 255, 255, 0.1)'
    },
    dividerText: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '12px'
    },
    signUpContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '24px'
    },
    signUpText: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.formCard}>
          <div style={styles.header}>
            <div style={styles.userIconContainer}>
              <User size={32} color="white" />
            </div>
            <h1 style={styles.title}>Welcome Back</h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <div style={styles.inputContainer}>
                <div style={styles.inputIcon}>
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  style={styles.input}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p style={styles.errorText}>
                  <span style={{ width: '4px', height: '4px', background: '#f87171', borderRadius: '50%' }}></span>
                  {errors.email}
                </p>
              )}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.inputContainer}>
                <div style={styles.inputIcon}>
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.passwordToggle}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p style={styles.errorText}>
                  <span style={{ width: '4px', height: '4px', background: '#f87171', borderRadius: '50%' }}></span>
                  {errors.password}
                </p>
              )}
            </div>

            <div style={styles.rememberForgot}>
              <label style={styles.checkboxContainer}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: `2px solid ${formData.rememberMe ? '#3b82f6' : 'rgba(255, 255, 255, 0.3)'}`,
                  borderRadius: '4px',
                  background: formData.rememberMe ? '#3b82f6' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  {formData.rememberMe && <CheckCircle size={12} color="white" />}
                </div>
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange('rememberMe')}
                  style={{ display: 'none' }}
                />
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Remember me</span>
              </label>
              
              <button
                type="button"
                onClick={() => console.log('Forgot password clicked')}
                style={styles.forgotPassword}
                onMouseEnter={() => handleHover('forgotPassword', true)}
                onMouseLeave={() => handleHover('forgotPassword', false)}
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={styles.submitButton}
              onMouseEnter={() => handleHover('submitButton', true)}
              onMouseLeave={() => handleHover('submitButton', false)}
            >
              {isLoading ? (
                <>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid white',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Signing In...
                </>
              ) : (
                <>
                  <Zap size={20} />
                  Sign In
                  <ArrowRight size={20} />
                </>
              )}
            </button>

            <div style={styles.divider}>
              <div style={styles.dividerLine}></div>
              <div style={styles.dividerText}>Or continue with</div>
              <div style={styles.dividerLine}></div>
            </div>

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

            <div style={styles.signUpContainer}>
              <p style={styles.signUpText}>Don't have an account?</p>
              <button
                type="button"
                style={styles.signUpButton}
                onClick={() => console.log('Create account clicked')}
                onMouseEnter={() => handleHover('signUpButton', true)}
                onMouseLeave={() => handleHover('signUpButton', false)}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;