import React from 'react';
import { BookOpen, Users, Clock, Award, TrendingUp, Calendar, Video, MessageSquare } from 'lucide-react';
import './StudentDashboard.css';

const Dashboard = () => {
    const stats = [
        { label: 'Active Classes', value: '4', icon: <BookOpen size={20} />, color: 'blue' },
        { label: 'Total Hours', value: '127', icon: <Clock size={20} />, color: 'green' },
        { label: 'Certificates', value: '2', icon: <Award size={20} />, color: 'purple' },
        { label: 'Progress', value: '78%', icon: <TrendingUp size={20} />, color: 'orange' },
    ];

    const recentClasses = [
        { name: 'Advanced React Development', instructor: 'John Smith', time: '2:00 PM - 4:00 PM', status: 'ongoing' },
        { name: 'UI/UX Design Principles', instructor: 'Sarah Johnson', time: '10:00 AM - 12:00 PM', status: 'completed' },
        { name: 'JavaScript Fundamentals', instructor: 'Mike Wilson', time: '3:00 PM - 5:00 PM', status: 'upcoming' },
    ];

    const upcomingEvents = [
        { title: 'React Workshop', date: 'Today, 3:00 PM', type: 'workshop' },
        { title: 'Design Review', date: 'Tomorrow, 10:00 AM', type: 'meeting' },
        { title: 'Final Project Due', date: 'Friday, 11:59 PM', type: 'deadline' },
    ];

    return (
        <div className="dashboard-container">
            {/* Header */}
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Dashboard</h1>
                    <p className="dashboard-subtitle">Welcome back! Here's your learning overview.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="join-button">
                        Join Live Class
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-content">
                            <div>
                                <p className="stat-label">{stat.label}</p>
                                <p className="stat-value">{stat.value}</p>
                            </div>
                            <div className={`stat-icon-container ${stat.color}`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="main-content-grid">
                {/* Recent Classes */}
                <div className="recent-classes-card">
                    <div className="card-header">
                        <h2 className="card-title">Recent Classes</h2>
                    </div>
                    <div className="card-body">
                        {recentClasses.map((cls, index) => (
                            <div key={index} className="class-item">
                                <div className="class-info">
                                    <div className="class-icon-container">
                                        <BookOpen size={20} className="class-icon" />
                                    </div>
                                    <div className="class-details">
                                        <h3>{cls.name}</h3>
                                        <p>{cls.instructor} • {cls.time}</p>
                                    </div>
                                </div>
                                <span className={`status-badge ${cls.status === 'ongoing' ? 'status-ongoing' :
                                        cls.status === 'completed' ? 'status-completed' :
                                            'status-upcoming'
                                    }`}>
                                    {cls.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Events */}
                <div className="events-card">
                    <div className="card-header">
                        <h2 className="card-title">Upcoming Events</h2>
                    </div>
                    <div className="card-body">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="event-item">
                                <div className={`event-dot ${event.type === 'workshop' ? 'blue' :
                                        event.type === 'meeting' ? 'green' : 'red'
                                    }`} />
                                <div className="event-content">
                                    <h3>{event.title}</h3>
                                    <p>{event.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="actions-grid">
                <div className="action-card">
                    <div className="action-content">
                        <div className="action-icon-container blue">
                            <Video size={24} className="action-icon blue" />
                        </div>
                        <div className="action-text">
                            <h3>Join Live Session</h3>
                            <p>Connect with ongoing classes</p>
                        </div>
                    </div>
                </div>

                <div className="action-card">
                    <div className="action-content">
                        <div className="action-icon-container green">
                            <MessageSquare size={24} className="action-icon green" />
                        </div>
                        <div className="action-text">
                            <h3>Live Chat</h3>
                            <p>Chat with instructors</p>
                        </div>
                    </div>
                </div>

                <div className="action-card">
                    <div className="action-content">
                        <div className="action-icon-container purple">
                            <Calendar size={24} className="action-icon purple" />
                        </div>
                        <div className="action-text">
                            <h3>Schedule</h3>
                            <p>View your timetable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;