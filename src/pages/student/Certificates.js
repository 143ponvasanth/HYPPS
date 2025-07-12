import React from 'react';
import { Award, Download, Calendar, Share } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: 'Advanced Mathematics Completion',
            course: 'Advanced Mathematics',
            issueDate: '2024-01-15',
            teacher: 'Dr. Smith',
            grade: 'A+',
            credentialId: 'CERT-MATH-2024-001'
        },
        {
            id: 2,
            title: 'Physics Fundamentals Certificate',
            course: 'Physics Fundamentals',
            issueDate: '2024-01-10',
            teacher: 'Prof. Johnson',
            grade: 'A',
            credentialId: 'CERT-PHYS-2024-002'
        },
        {
            id: 3,
            title: 'English Literature Achievement',
            course: 'English Literature',
            issueDate: '2024-01-05',
            teacher: 'Ms. Davis',
            grade: 'A+',
            credentialId: 'CERT-ENG-2024-003'
        }
    ];

    const getGradeColor = (grade) => {
        switch (grade) {
            case 'A+':
                return 'certificates-grade-aplus';
            case 'A':
                return 'certificates-grade-a';
            case 'B+':
                return 'certificates-grade-bplus';
            default:
                return 'certificates-grade-default';
        }
    };

    return (
        <div className="certificates-container">
            <div className="certificates-header">
                <h1 className="certificates-title">Certificates</h1>
                <p className="certificates-subtitle">Your earned certificates and achievements.</p>
            </div>

            {/* Stats */}
            <div className="certificates-stats">
                <div className="certificates-stat-card">
                    <div className="certificates-stat-content">
                        <div className="certificates-stat-icon certificates-stat-icon-yellow">
                            <Award className="certificates-stat-icon-svg" />
                        </div>
                        <div className="certificates-stat-text">
                            <p className="certificates-stat-label">Total Certificates</p>
                            <p className="certificates-stat-value">{certificates.length}</p>
                        </div>
                    </div>
                </div>

                <div className="certificates-stat-card">
                    <div className="certificates-stat-content">
                        <div className="certificates-stat-icon certificates-stat-icon-green">
                            <Award className="certificates-stat-icon-svg" />
                        </div>
                        <div className="certificates-stat-text">
                            <p className="certificates-stat-label">A+ Grades</p>
                            <p className="certificates-stat-value">
                                {certificates.filter(cert => cert.grade === 'A+').length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="certificates-stat-card">
                    <div className="certificates-stat-content">
                        <div className="certificates-stat-icon certificates-stat-icon-blue">
                            <Calendar className="certificates-stat-icon-svg" />
                        </div>
                        <div className="certificates-stat-text">
                            <p className="certificates-stat-label">This Month</p>
                            <p className="certificates-stat-value">2</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificates List */}
            <div className="certificates-list">
                {certificates.map((certificate) => (
                    <div key={certificate.id} className="certificates-item">
                        <div className="certificates-item-content">
                            <div className="certificates-item-header">
                                <div className="certificates-item-info">
                                    <div className="certificates-item-badge">
                                        <Award className="certificates-item-badge-icon" />
                                    </div>
                                    <div>
                                        <h3 className="certificates-item-title">{certificate.title}</h3>
                                        <p className="certificates-item-course">{certificate.course}</p>
                                        <p className="certificates-item-teacher">Instructor: {certificate.teacher}</p>
                                    </div>
                                </div>
                                <div className="certificates-item-grade">
                                    <div className={`certificates-grade-value ${getGradeColor(certificate.grade)}`}>
                                        {certificate.grade}
                                    </div>
                                    <div className="certificates-item-date">
                                        {new Date(certificate.issueDate).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>

                            <div className="certificates-item-footer">
                                <div className="certificates-item-id">
                                    Credential ID: <span className="certificates-item-id-value">{certificate.credentialId}</span>
                                </div>
                                <div className="certificates-item-actions">
                                    <button className="certificates-download-button">
                                        <Download className="certificates-button-icon" />
                                        <span>Download</span>
                                    </button>
                                    <button className="certificates-share-button">
                                        <Share className="certificates-button-icon" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;