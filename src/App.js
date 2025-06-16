import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Assignments from './studentDashboard/Assignments';
import Certificates from './studentDashboard/Certificates';
import ClassRecordings from './studentDashboard/ClassRecordings';
import Dashboard from './studentDashboard/Dashboard';
import JoinLiveClass from './studentDashboard/JoinLiveClass';
import Logout from './studentDashboard/Logout';
import Messages from './studentDashboard/Messages';
import MyClasses from './studentDashboard/MyClasses';
import Profile from './studentDashboard/Profile';
import Resources from './studentDashboard/Resources';
import Settings from './studentDashboard/Settings';
import Layout from './layouts/Layout';
// import Categories from './landingPage/Categories';
// import CTABanner from './landingPage/CTABanner';
// import Footer from './landingPage/Footer';
// import Hero from './landingPage/Hero';
// import HowItWorks from './landingPage/HowItWorks';
// import Navbar from './landingPage/Navbar';
// import Testimonials from './landingPage/Testimonials';
// import WhyChooseUs from './landingPage/WhyUs';
// import Sidebar from './studentDashboard/Sidebar';


function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Hero />
      <WhyChooseUs />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Footer />
      <Sidebar /> */}

      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-classes" element={<MyClasses />} />
            <Route path="/join-live-class" element={<JoinLiveClass />} />
            <Route path="/class-recordings" element={<ClassRecordings />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
