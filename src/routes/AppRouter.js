// import React from "react";
// import { Routes, Route, Navigate } from 'react-router-dom';
// import LandingPage from '../pages/landingpage/LandingPage';
// import DashboardLayout from '../layouts/DashboardLayout';
// import StudentDashboard from '../pages/student/StudentDashboard';
// import SearchClasses from '../pages/student/SearchClasses';
// // import TeacherSignupForm from './components/auth/SignupPage';
// import SignUpForm from '../components/auth/SignupPage';
// import LoginForm from '../components/auth/LoginPage';
// import TeacherDashboard from '../pages/teacher/TeacherDashboard';
// import AdminDashboard from '../pages/admin/AdminDashboard';
// import MyRequests from '../pages/student/MyRequests';
// import MyClasses from '../pages/student/MyClasses';
// import LiveChat from '../pages/student/LiveChat';
// import Resources from '../pages/student/Resources';
// import ClassRecordings from '../pages/student/ClassRecordings';
// import Certificates from '../pages/student/Certificates';
// import StudentSettings from '../pages/student/StudentSettings';

// const AppRouter = () => (
//     <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<SignUpForm />} />
//         {/* <Route path="/teacher-signup" element={<TeacherSignupForm />} /> */}
//         <Route path="/login" element={<LoginForm />} />
//         <Route
//             path="/student/*"
//             element={
//                 <DashboardLayout
//                     role="student"
//                 >
//                     <Routes>
//                         <Route path="dashboard" element={<StudentDashboard />} />
//                         <Route path="search-classes" element={<SearchClasses />} />
//                         <Route path="my-requests" element={<MyRequests />} />
//                         <Route path="my-classes" element={<MyClasses />} />
//                         <Route path="live-chat" element={<LiveChat />} />
//                         <Route path="resources" element={<Resources />} />
//                         <Route path="class-recordings" element={<ClassRecordings />} />
//                         <Route path="certificates" element={<Certificates />} />
//                         <Route path="settings" element={<StudentSettings />} />
//                     </Routes>
//                 </DashboardLayout>
//             }
//         />
//         <Route
//             path="/teacher/*"
//             element={
//                 <DashboardLayout
//                     role="teacher"
//                 >
//                     <Routes>
//                         <Route path="dashboard" element={<TeacherDashboard />} />
//                         {/* <Route path="courses" element={<MyCourses />} /> */}
//                         {/* <Route path="requests" element={<StudentRequests />} /> */}
//                         {/*<Route path="students" element={<MyStudents />} />
//                     <Route path="live-classes" element={<LiveClasses />} />
//                     <Route path="calendar" element={<TeacherCalendar />} />
//                     <Route path="messages" element={<Messages />} />
//                     <Route path="earnings" element={<EarningsPayouts />} />
//                     <Route path="reviews" element={<ReviewsRatings />} />
//                     <Route path="analytics" element={<AnalyticsInsights />} />
//                     <Route path="reports" element={<ReportsDownloads />} />
//                     <Route path="settings" element={<TeacherSettings />} /> */}
//                     </Routes>
//                 </DashboardLayout>
//             }
//         />
//         <Route
//             path="/admin/*"
//             element={
//                 <DashboardLayout
//                     role="admin"
//                 >
//                     <Routes>
//                         <Route path="dashboard" element={<AdminDashboard />} />
//                         {/* <Route path="manage-teachers" element={<ManageTeachers />} />
//                     <Route path="manage-students" element={<ManageStudents />} />
//                     <Route path="manage-classes" element={<ManageClasses />} />
//                     <Route path="chat-monitor" element={<ChatMonitor />} />
//                     <Route path="resources" element={<ResourcesAndRecordings />} />
//                     <Route path="reports" element={<ReportsAnalytics />} />
//                     <Route path="payments" element={<Payments />} />
//                     <Route path="moderation" element={<AIModerationFlags />} />
//                     <Route path="platform-settings" element={<PlatformSettings />} />
//                     <Route path="support" element={<SupportRequests />} /> */}
//                     </Routes>
//                 </DashboardLayout>
//             }
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
// );

// export default AppRouter;

import React from 'react';
import { useAuth } from '../context/AuthContext';

import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/landingpage/LandingPage';
import DashboardLayout from '../layouts/DashboardLayout';
import StudentDashboard from '../pages/student/StudentDashboard';
import SearchClasses from '../pages/student/SearchClasses';
// import TeacherSignupForm from './components/auth/SignupPage';
import SignUpForm from '../components/auth/SignupPage';
import LoginForm from '../components/auth/LoginPage';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import MyRequests from '../pages/student/MyRequests';
import MyClasses from '../pages/student/MyClasses';
import LiveChat from '../pages/student/LiveChat';
import Resources from '../pages/student/Resources';
import ClassRecordings from '../pages/student/ClassRecordings';
import Certificates from '../pages/student/Certificates';
import StudentSettings from '../pages/student/StudentSettings';

import './AppRoutes.css';

const AppRoutes = () => {
    const { currentRole } = useAuth();
    const [currentPage, setCurrentPage] = React.useState(() => {
        // Set initial page based on role
        switch (currentRole) {
            case 'teacher':
                return 'teacher-dashboard';
            case 'admin':
                return 'admin-dashboard';
            default:
                return 'dashboard';
        }
    });

    // Update current page when role changes
    React.useEffect(() => {
        switch (currentRole) {
            case 'teacher':
                setCurrentPage('teacher-dashboard');
                break;
            case 'admin':
                setCurrentPage('admin-dashboard');
                break;
            default:
                setCurrentPage('dashboard');
                break;
        }
    }, [currentRole]);

    const renderPage = () => {
        // Student routes
        if (currentRole === 'student') {
            switch (currentPage) {
                case 'dashboard':
                    return <StudentDashboard />;
                case 'search-classes':
                    return <SearchClasses />;
                case 'my-requests':
                    return <MyRequests />;
                case 'my-classes':
                    return <MyClasses />;
                case 'live-chat':
                    return <LiveChat />;
                case 'resources':
                    return <Resources />;
                case 'class-recordings':
                    return <ClassRecordings />;
                case 'certificates':
                    return <Certificates />;
                case 'settings':
                    return <StudentSettings />;
                default:
                    return <StudentDashboard />;
            }
        }

        // Teacher routes
        if (currentRole === 'teacher') {
            switch (currentPage) {
                case 'teacher-dashboard':
                case 'dashboard':
                    return <TeacherDashboard />;
                case 'my-courses':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">My Courses</h1><p className="approutes-coming-soon-text">Manage your courses page coming soon...</p></div>;
                case 'student-requests':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Student Requests</h1><p className="approutes-coming-soon-text">Student requests page coming soon...</p></div>;
                case 'my-students':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">My Students</h1><p className="approutes-coming-soon-text">Students management page coming soon...</p></div>;
                case 'live-classes':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Live Classes</h1><p className="approutes-coming-soon-text">Live classes page coming soon...</p></div>;
                case 'teacher-calendar':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Calendar</h1><p className="approutes-coming-soon-text">Calendar page coming soon...</p></div>;
                case 'messages':
                    return <LiveChat />;
                case 'earnings-payouts':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Earnings & Payouts</h1><p className="approutes-coming-soon-text">Earnings page coming soon...</p></div>;
                case 'reviews-ratings':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Reviews & Ratings</h1><p className="approutes-coming-soon-text">Reviews page coming soon...</p></div>;
                case 'analytics-insights':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Analytics & Insights</h1><p className="approutes-coming-soon-text">Analytics page coming soon...</p></div>;
                case 'reports-downloads':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Reports & Downloads</h1><p className="approutes-coming-soon-text">Reports page coming soon...</p></div>;
                case 'teacher-settings':
                    return <StudentSettings />;
                default:
                    return <TeacherDashboard />;
            }
        }

        // Admin routes
        if (currentRole === 'admin') {
            switch (currentPage) {
                case 'admin-dashboard':
                case 'dashboard':
                    return <AdminDashboard />;
                case 'manage-teachers':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Manage Teachers</h1><p className="approutes-coming-soon-text">Teachers management page coming soon...</p></div>;
                case 'manage-students':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Manage Students</h1><p className="approutes-coming-soon-text">Students management page coming soon...</p></div>;
                case 'manage-classes':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Manage Classes</h1><p className="approutes-coming-soon-text">Class management page coming soon...</p></div>;
                case 'chat-monitor':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Chat Monitor</h1><p className="approutes-coming-soon-text">Chat monitoring page coming soon...</p></div>;
                case 'resources-recordings':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Resources & Recordings</h1><p className="approutes-coming-soon-text">Resources management page coming soon...</p></div>;
                case 'reports-analytics':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Reports & Analytics</h1><p className="approutes-coming-soon-text">Reports and analytics page coming soon...</p></div>;
                case 'payments':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Payments</h1><p className="approutes-coming-soon-text">Payments page coming soon...</p></div>;
                case 'ai-moderation-flags':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">AI Moderation Flags</h1><p className="approutes-coming-soon-text">AI moderation page coming soon...</p></div>;
                case 'platform-settings':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Platform Settings</h1><p className="approutes-coming-soon-text">Platform settings page coming soon...</p></div>;
                case 'support-requests':
                    return <div className="approutes-coming-soon"><h1 className="approutes-coming-soon-title">Support Requests</h1><p className="approutes-coming-soon-text">Support requests page coming soon...</p></div>;
                default:
                    return <AdminDashboard />;
            }
        }

        return <LandingPage />;
    };

    return (
        <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage}>
            {renderPage()}
        </DashboardLayout>
    );
};

export default AppRoutes;