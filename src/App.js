import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
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
import StudentLayout from './components/StudentLayout';
import { useState } from 'react';

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
          <StudentLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} theme={theme}>
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
          </StudentLayout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
