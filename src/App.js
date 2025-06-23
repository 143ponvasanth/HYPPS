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
import TeacherDashboard from './teacherDashboard/TeacherDashboard';
import AdminDashboard from './adminDashboard/AdminDashboard';
import MyRequests from './studentDashboard/MyRequests';
import MyClasses from './studentDashboard/MyClasses';
import LiveChat from './studentDashboard/LiveChat';
import Resources from './studentDashboard/Resources';
import ClassRecordings from './studentDashboard/ClassRecordings';
import Certificates from './studentDashboard/Certificates';
import StudentSettings from './studentDashboard/StudentSettings';
import MyCourses from './teacherDashboard/MyCourses'
import StudentRequests from './teacherDashboard/Student Requests'
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
                    <Route path="my-requests" element={<MyRequests />} />
                    <Route path="my-classes" element={<MyClasses />} />
                    <Route path="live-chat" element={<LiveChat />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="class-recordings" element={<ClassRecordings />} />
                    <Route path="certificates" element={<Certificates />} />
                    <Route path="settings" element={<StudentSettings />} />
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
                    <Route path="dashboard" element={<TeacherDashboard />} />
                     <Route path="courses" element={<MyCourses />} />
                    <Route path="requests" element={<StudentRequests />} />
                    {/*<Route path="students" element={<MyStudents />} />
                    <Route path="live-classes" element={<LiveClasses />} />
                    <Route path="calendar" element={<TeacherCalendar />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="earnings" element={<EarningsPayouts />} />
                    <Route path="reviews" element={<ReviewsRatings />} />
                    <Route path="analytics" element={<AnalyticsInsights />} />
                    <Route path="reports" element={<ReportsDownloads />} />
                    <Route path="settings" element={<TeacherSettings />} /> */}
                  </Routes>
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/*"
              element={
                <DashboardLayout
                  sidebarOpen={sidebarOpen}
                  toggleSidebar={toggleSidebar}
                  role="admin"
                >
                  <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    {/* <Route path="manage-teachers" element={<ManageTeachers />} />
                    <Route path="manage-students" element={<ManageStudents />} />
                    <Route path="manage-classes" element={<ManageClasses />} />
                    <Route path="chat-monitor" element={<ChatMonitor />} />
                    <Route path="resources" element={<ResourcesAndRecordings />} />
                    <Route path="reports" element={<ReportsAnalytics />} />
                    <Route path="payments" element={<Payments />} />
                    <Route path="moderation" element={<AIModerationFlags />} />
                    <Route path="platform-settings" element={<PlatformSettings />} />
                    <Route path="support" element={<SupportRequests />} /> */}
                  </Routes>
                </DashboardLayout>
              }
            />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/teacher-signup" element={<TeacherSignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Navigate to="/signup" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App