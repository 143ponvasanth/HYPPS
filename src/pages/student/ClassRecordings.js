import React, { useState } from 'react';
import { Play, Download, Clock, Calendar, Search } from 'lucide-react';
import './ClassRecordings.css';

const ClassRecordings = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const recordings = [
        {
            id: 1,
            title: 'Algebra Fundamentals - Lesson 5',
            teacher: 'Dr. Smith',
            course: 'Mathematics',
            duration: '45:32',
            recordedDate: '2024-01-18',
            thumbnail: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 234
        },
        {
            id: 2,
            title: 'Physics: Newton\'s Laws of Motion',
            teacher: 'Prof. Johnson',
            course: 'Physics',
            duration: '38:15',
            recordedDate: '2024-01-17',
            thumbnail: 'https://images.pexels.com/photos/159306/science-chemistry-lab-test-159306.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 189
        },
        {
            id: 3,
            title: 'Shakespeare\'s Hamlet - Analysis',
            teacher: 'Ms. Davis',
            course: 'English Literature',
            duration: '52:28',
            recordedDate: '2024-01-16',
            thumbnail: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 167
        },
        {
            id: 4,
            title: 'Chemical Reactions and Equations',
            teacher: 'Dr. Wilson',
            course: 'Chemistry',
            duration: '41:07',
            recordedDate: '2024-01-15',
            thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
            views: 203
        }
    ];

    const filteredRecordings = recordings.filter(recording =>
        recording.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recording.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recording.teacher.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="recordings-container">
            <div className="recordings-header">
                <h1 className="recordings-title">Class Recordings</h1>
                <p className="recordings-subtitle">Watch recorded lessons anytime, anywhere.</p>
            </div>

            {/* Search */}
            <div className="recordings-search">
                <div className="recordings-search-container">
                    <Search className="recordings-search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search recordings..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="recordings-search-input"
                    />
                </div>
            </div>

            {/* Recordings Grid */}
            <div className="recordings-grid">
                {filteredRecordings.map((recording) => (
                    <div key={recording.id} className="recordings-card">
                        <div className="recordings-thumbnail-container">
                            <img
                                src={recording.thumbnail}
                                alt={recording.title}
                                className="recordings-thumbnail"
                            />
                            <div className="recordings-play-overlay">
                                <Play className="recordings-play-icon" />
                            </div>
                            <div className="recordings-duration-badge">
                                {recording.duration}
                            </div>
                        </div>

                        <div className="recordings-card-content">
                            <h3 className="recordings-card-title">
                                {recording.title}
                            </h3>

                            <p className="recordings-card-meta">
                                {recording.course} • {recording.teacher}
                            </p>

                            <div className="recordings-card-footer">
                                <div className="recordings-date">
                                    <Calendar className="recordings-date-icon" />
                                    <span>{new Date(recording.recordedDate).toLocaleDateString()}</span>
                                </div>
                                <span className="recordings-views">{recording.views} views</span>
                            </div>

                            <div className="recordings-card-actions">
                                <button className="recordings-watch-button">
                                    <Play className="recordings-action-icon" />
                                    <span>Watch</span>
                                </button>
                                <button className="recordings-download-button">
                                    <Download className="recordings-action-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassRecordings;