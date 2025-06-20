import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import Categories from './landingPage/Categories';
// import CTABanner from './landingPage/CTABanner';
// import Footer from './landingPage/Footer';
// import Hero from './landingPage/Hero';
// import HowItWorks from './landingPage/HowItWorks';
// import Navbar from './landingPage/Navbar';
// import Testimonials from './landingPage/Testimonials';
// import WhyChooseUs from './landingPage/WhyUs';
import DashboardLayout from './layouts/DashboardLayout';
import StudentDashboard from './studentDashboard/StudentDashboard';
import SearchClasses from './studentDashboard/SearchClasses';
import TeacherSignupForm from './components/Forms/SignupPage';
import SignUpForm from './components/Forms/SignupPage';
import LoginForm from './components/Forms/LoginPage';

const theme = createTheme({
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  palette: {
    primary: {
      main: '#4e73df',
    },
    secondary: {
      main: '#1cc88a',
    },
  },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Start with sidebar collapsed

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      {/* <Navbar />
      <Hero />
      <WhyChooseUs />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Footer /> */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route
              path="/student/*"
              element={
                <DashboardLayout
                  sidebarOpen={sidebarOpen}
                  toggleSidebar={toggleSidebar}
                  role="student"
                >
                  <Routes>
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="search-classes" element={<SearchClasses />} />
                    {/* Add other student routes */}
                  </Routes>
                </DashboardLayout>
              }
            />
            <Route
              path="/teacher/*"
              element={
                <DashboardLayout
                  sidebarOpen={sidebarOpen}
                  toggleSidebar={toggleSidebar}
                  role="teacher"
                >
                  <Routes>
                    {/* <Route path="dashboard" element={<TeacherDashboard />} /> */}
                    {/* <Route path="manage-classes" element={<ManageClasses />} /> */}
                    {/* Add other teacher routes */}
                  </Routes>
                </DashboardLayout>
              }
            />
            {/* Add a default route if needed */}
            <Route path="/" element={<Navigate to="/signup" replace />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/teacher-signup" element={<TeacherSignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

