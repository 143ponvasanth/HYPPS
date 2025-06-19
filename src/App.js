import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import Categories from './landingPage/Categories';
// import CTABanner from './landingPage/CTABanner';
// import Footer from './landingPage/Footer';
// import Hero from './landingPage/Hero';
// import HowItWorks from './landingPage/HowItWorks';
// import Navbar from './landingPage/Navbar';
// import Testimonials from './landingPage/Testimonials';
// import WhyChooseUs from './landingPage/WhyUs';
import Dashboard from './studentDashboard/Dashboard';
import SearchClasses from './studentDashboard/SearchClasses';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

const theme = createTheme();

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
          <Box sx={{ display: 'flex' }}>
            <Sidebar sidebarOpen={sidebarOpen} />
            <Topbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                marginTop: '64px',
                width: sidebarOpen ? 'calc(100% - 280px)' : 'calc(100% - 72px)',
                marginLeft: sidebarOpen ? '280px' : '72px',
                transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/search-classes" element={<SearchClasses />} />
                {/* <Route path="/my-requests" element={<MyRequests />} />
                <Route path="/my-classes" element={<MyClasses />} />
                <Route path="/live-chat" element={<LiveChat />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/class-recordings" element={<ClassRecordings />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/settings" element={<Settings />} /> */}
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
