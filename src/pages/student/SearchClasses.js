import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users } from 'lucide-react';
import './SearchClasses.css';

const SearchClasses = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const classes = [
        {
            id: 1,
            title: 'Advanced Mathematics',
            teacher: 'Dr. Smith',
            rating: 4.8,
            students: 15,
            duration: '1 hour',
            price: '$25',
            image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 2,
            title: 'Physics Fundamentals',
            teacher: 'Prof. Johnson',
            rating: 4.9,
            students: 22,
            duration: '45 mins',
            price: '$20',
            image: 'https://images.pexels.com/photos/159306/science-chemistry-lab-test-159306.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 3,
            title: 'English Literature',
            teacher: 'Ms. Davis',
            rating: 4.7,
            students: 18,
            duration: '1.5 hours',
            price: '$30',
            image: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    ];

    return (
        <div className="search-classes-container">
            <div className="search-classes-header">
                <h1 className="search-classes-title">Search Classes</h1>
                <p className="search-classes-subtitle">Find the perfect class for your learning goals.</p>
            </div>

            {/* Search and Filter */}
            <div className="search-classes-controls">
                <div className="search-classes-input-container">
                    <Search className="search-classes-search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search classes, subjects, or teachers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-classes-input"
                    />
                </div>
                <button className="search-classes-filter-button">
                    <Filter size={20} />
                    <span>Filters</span>
                </button>
            </div>

            {/* Classes Grid */}
            <div className="search-classes-grid">
                {classes.map((classItem) => (
                    <div key={classItem.id} className="search-classes-card">
                        <img
                            src={classItem.image}
                            alt={classItem.title}
                            className="search-classes-card-image"
                        />
                        <div className="search-classes-card-content">
                            <h3 className="search-classes-card-title">{classItem.title}</h3>
                            <p className="search-classes-card-teacher">by {classItem.teacher}</p>

                            <div className="search-classes-card-meta">
                                <div className="search-classes-meta-items">
                                    <div className="search-classes-meta-item">
                                        <Star className="search-classes-rating-icon" />
                                        <span className="search-classes-meta-text">{classItem.rating}</span>
                                    </div>
                                    <div className="search-classes-meta-item">
                                        <Users className="search-classes-meta-icon" />
                                        <span className="search-classes-meta-text">{classItem.students}</span>
                                    </div>
                                    <div className="search-classes-meta-item">
                                        <Clock className="search-classes-meta-icon" />
                                        <span className="search-classes-meta-text">{classItem.duration}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="search-classes-card-footer">
                                <span className="search-classes-card-price">{classItem.price}</span>
                                <button className="search-classes-request-button">
                                    Request Class
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchClasses;