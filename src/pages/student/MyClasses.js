import React from 'react';
import { Calendar, Clock, Users, Video, FileText } from 'lucide-react';
import './MyClasses.css';

const MyClasses = () => {
    const classes = [
        {
            id: 1,
            title: 'Advanced Mathematics',
            teacher: 'Dr. Smith',
            nextSession: '2024-01-20T14:00:00',
            duration: '1 hour',
            students: 15,
            progress: 75,
            status: 'active'
        },
        {
            id: 2,
            title: 'Physics Fundamentals',
            teacher: 'Prof. Johnson',
            nextSession: '2024-01-22T10:00:00',
            duration: '45 mins',
            students: 22,
            progress: 60,
            status: 'active'
        },
        {
            id: 3,
            title: 'English Literature',
            teacher: 'Ms. Davis',
            nextSession: null,
            duration: '1.5 hours',
            students: 18,
            progress: 100,
            status: 'completed'
        }
    ];

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
    };

    return (
        <div className="myclasses-container">
            <div className="myclasses-header">
                <h1 className="myclasses-title">My Classes</h1>
                <p className="myclasses-subtitle">Manage your enrolled classes and track progress.</p>
            </div>

            <div className="myclasses-grid">
                {classes.map((classItem) => (
                    <div key={classItem.id} className="myclasses-card">
                        <div className="myclasses-card-content">
                            <div className="myclasses-card-header">
                                <h3 className="myclasses-card-title">{classItem.title}</h3>
                                <span className={`myclasses-status myclasses-status-${classItem.status}`}>
                                    {classItem.status}
                                </span>
                            </div>

                            <p className="myclasses-teacher">by {classItem.teacher}</p>

                            {classItem.nextSession && (
                                <div className="myclasses-next-session">
                                    <div className="myclasses-next-session-header">
                                        <Calendar className="myclasses-next-session-icon" />
                                        <span className="myclasses-next-session-label">Next Session</span>
                                    </div>
                                    <div className="myclasses-next-session-time">
                                        {formatDateTime(classItem.nextSession).date} at {formatDateTime(classItem.nextSession).time}
                                    </div>
                                </div>
                            )}

                            <div className="myclasses-details">
                                <div className="myclasses-meta">
                                    <div className="myclasses-meta-item">
                                        <Clock className="myclasses-meta-icon" />
                                        <span className="myclasses-meta-text">Duration: {classItem.duration}</span>
                                    </div>
                                    <div className="myclasses-meta-item">
                                        <Users className="myclasses-meta-icon" />
                                        <span className="myclasses-meta-text">{classItem.students} students</span>
                                    </div>
                                </div>

                                <div className="myclasses-progress">
                                    <div className="myclasses-progress-header">
                                        <span className="myclasses-progress-label">Progress</span>
                                        <span className="myclasses-progress-value">{classItem.progress}%</span>
                                    </div>
                                    <div className="myclasses-progress-bar">
                                        <div
                                            className="myclasses-progress-fill"
                                            style={{ width: `${classItem.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="myclasses-actions">
                                {classItem.status === 'active' && classItem.nextSession && (
                                    <button className="myclasses-join-button">
                                        <Video className="myclasses-action-icon" />
                                        <span>Join Class</span>
                                    </button>
                                )}
                                <button className="myclasses-materials-button">
                                    <FileText className="myclasses-action-icon" />
                                    <span>Materials</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyClasses;