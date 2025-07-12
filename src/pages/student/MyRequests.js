import React from 'react';
import { Clock, CheckCircle, XCircle, Calendar } from 'lucide-react';
import './MyRequests.css';

const MyRequests = () => {
    const requests = [
        {
            id: 1,
            className: 'Advanced Mathematics',
            teacher: 'Dr. Smith',
            requestDate: '2024-01-15',
            status: 'pending',
            scheduledDate: '2024-01-20',
            price: '$25'
        },
        {
            id: 2,
            className: 'Physics Fundamentals',
            teacher: 'Prof. Johnson',
            requestDate: '2024-01-14',
            status: 'approved',
            scheduledDate: '2024-01-18',
            price: '$20'
        },
        {
            id: 3,
            className: 'English Literature',
            teacher: 'Ms. Davis',
            requestDate: '2024-01-13',
            status: 'rejected',
            scheduledDate: null,
            price: '$30'
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'pending':
                return <Clock className="myrequests-status-icon myrequests-status-icon-pending" />;
            case 'approved':
                return <CheckCircle className="myrequests-status-icon myrequests-status-icon-approved" />;
            case 'rejected':
                return <XCircle className="myrequests-status-icon myrequests-status-icon-rejected" />;
            default:
                return <Clock className="myrequests-status-icon myrequests-status-icon-default" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'myrequests-status-badge-pending';
            case 'approved':
                return 'myrequests-status-badge-approved';
            case 'rejected':
                return 'myrequests-status-badge-rejected';
            default:
                return 'myrequests-status-badge-default';
        }
    };

    return (
        <div className="myrequests-container">
            <div className="myrequests-header">
                <h1 className="myrequests-title">My Requests</h1>
                <p className="myrequests-subtitle">Track your class requests and their status.</p>
            </div>

            <div className="myrequests-card">
                <div className="myrequests-card-content">
                    <div className="myrequests-list">
                        {requests.map((request) => (
                            <div key={request.id} className="myrequests-item">
                                <div className="myrequests-item-header">
                                    <div className="myrequests-item-info">
                                        {getStatusIcon(request.status)}
                                        <h3 className="myrequests-item-title">{request.className}</h3>
                                        <span className={`myrequests-status-badge ${getStatusColor(request.status)}`}>
                                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                        </span>
                                    </div>
                                    <span className="myrequests-item-price">{request.price}</span>
                                </div>

                                <div className="myrequests-item-details">
                                    <div className="myrequests-item-detail">
                                        <span className="myrequests-detail-label">Teacher:</span> {request.teacher}
                                    </div>
                                    <div className="myrequests-item-detail">
                                        <span className="myrequests-detail-label">Requested:</span> {new Date(request.requestDate).toLocaleDateString()}
                                    </div>
                                    {request.scheduledDate && (
                                        <div className="myrequests-item-detail">
                                            <Calendar className="myrequests-calendar-icon" />
                                            <span><span className="myrequests-detail-label">Scheduled:</span> {new Date(request.scheduledDate).toLocaleDateString()}</span>
                                        </div>
                                    )}
                                </div>

                                {request.status === 'approved' && (
                                    <div className="myrequests-approved-actions">
                                        <button className="myrequests-join-button">
                                            Join Class
                                        </button>
                                        <button className="myrequests-reschedule-button">
                                            Reschedule
                                        </button>
                                    </div>
                                )}

                                {request.status === 'pending' && (
                                    <div className="myrequests-pending-actions">
                                        <button className="myrequests-cancel-button">
                                            Cancel Request
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRequests;