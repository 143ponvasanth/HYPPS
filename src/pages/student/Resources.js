import React, { useState } from 'react';
import { Search, Download, FileText, Video, Image, Book, Filter } from 'lucide-react';
import './Resources.css';

const Resources = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const resources = [
        {
            id: 1,
            title: 'Algebra Basics - Chapter 1',
            type: 'pdf',
            size: '2.5 MB',
            downloads: 234,
            uploadDate: '2024-01-15',
            course: 'Mathematics'
        },
        {
            id: 2,
            title: 'Physics Lab Demonstration',
            type: 'video',
            size: '45.2 MB',
            downloads: 156,
            uploadDate: '2024-01-14',
            course: 'Physics'
        },
        {
            id: 3,
            title: 'Chemistry Periodic Table',
            type: 'image',
            size: '1.8 MB',
            downloads: 89,
            uploadDate: '2024-01-13',
            course: 'Chemistry'
        },
        {
            id: 4,
            title: 'English Grammar Guide',
            type: 'pdf',
            size: '3.1 MB',
            downloads: 201,
            uploadDate: '2024-01-12',
            course: 'English'
        }
    ];

    const getFileIcon = (type) => {
        switch (type) {
            case 'pdf':
                return <FileText className="resources-file-icon resources-file-icon-pdf" />;
            case 'video':
                return <Video className="resources-file-icon resources-file-icon-video" />;
            case 'image':
                return <Image className="resources-file-icon resources-file-icon-image" />;
            default:
                return <Book className="resources-file-icon resources-file-icon-default" />;
        }
    };

    const filters = [
        { key: 'all', label: 'All Resources' },
        { key: 'pdf', label: 'PDF Documents' },
        { key: 'video', label: 'Videos' },
        { key: 'image', label: 'Images' }
    ];

    const filteredResources = activeFilter === 'all'
        ? resources
        : resources.filter(resource => resource.type === activeFilter);

    return (
        <div className="resources-container">
            <div className="resources-header">
                <h1 className="resources-title">Resources</h1>
                <p className="resources-subtitle">Access and download course materials and study resources.</p>
            </div>

            {/* Search and Filters */}
            <div className="resources-controls">
                <div className="resources-search-container">
                    <Search className="resources-search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="resources-search-input"
                    />
                </div>

                <div className="resources-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`resources-filter-button ${activeFilter === filter.key ? 'resources-filter-button-active' : 'resources-filter-button-inactive'}`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Resources Grid */}
            <div className="resources-list">
                {filteredResources.map((resource) => (
                    <div key={resource.id} className="resources-item">
                        <div className="resources-item-content">
                            <div className="resources-item-info">
                                {getFileIcon(resource.type)}
                                <div className="resources-item-details">
                                    <h3 className="resources-item-title">{resource.title}</h3>
                                    <div className="resources-item-meta">
                                        <span className="resources-meta-item">{resource.course}</span>
                                        <span className="resources-meta-separator">•</span>
                                        <span className="resources-meta-item">{resource.size}</span>
                                        <span className="resources-meta-separator">•</span>
                                        <span className="resources-meta-item">{resource.downloads} downloads</span>
                                        <span className="resources-meta-separator">•</span>
                                        <span className="resources-meta-item">{new Date(resource.uploadDate).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="resources-download-button">
                                <Download className="resources-download-icon" />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;