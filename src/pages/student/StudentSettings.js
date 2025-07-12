import React, { useState } from 'react';
import { User, Bell, Shield, Palette, Globe, Camera } from 'lucide-react';
import './StudentSettings.css';

const StudentSettings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'privacy', label: 'Privacy & Security', icon: Shield },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'language', label: 'Language & Region', icon: Globe }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="settings-profile-content">
                        <div className="settings-profile-picture">
                            <div className="settings-avatar">
                                <User className="settings-avatar-icon" />
                            </div>
                            <button className="settings-avatar-edit">
                                <Camera className="settings-avatar-edit-icon" />
                            </button>
                            <div className="settings-profile-info">
                                <h3 className="settings-profile-title">Profile Picture</h3>
                                <p className="settings-profile-description">Upload a profile picture</p>
                            </div>
                        </div>

                        <div className="settings-profile-form">
                            <div className="settings-form-group">
                                <label className="settings-form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="John"
                                    className="settings-form-input"
                                />
                            </div>
                            <div className="settings-form-group">
                                <label className="settings-form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Doe"
                                    className="settings-form-input"
                                />
                            </div>
                            <div className="settings-form-group">
                                <label className="settings-form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    defaultValue="john.doe@example.com"
                                    className="settings-form-input"
                                />
                            </div>
                            <div className="settings-form-group">
                                <label className="settings-form-label">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    defaultValue="+1 (555) 123-4567"
                                    className="settings-form-input"
                                />
                            </div>
                        </div>
                    </div>
                );

            case 'notifications':
                return (
                    <div className="settings-notifications-content">
                        <h3 className="settings-notifications-title">Notification Preferences</h3>
                        <div className="settings-notifications-list">
                            {[
                                { id: 'email', label: 'Email notifications', description: 'Receive updates via email' },
                                { id: 'push', label: 'Push notifications', description: 'Receive push notifications in browser' },
                                { id: 'class', label: 'Class reminders', description: 'Get notified before classes start' },
                                { id: 'assignments', label: 'Assignment updates', description: 'Notifications about new assignments' }
                            ].map((setting) => (
                                <div key={setting.id} className="settings-notification-item">
                                    <div className="settings-notification-info">
                                        <h4 className="settings-notification-label">{setting.label}</h4>
                                        <p className="settings-notification-description">{setting.description}</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="settings-notification-toggle"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="settings-coming-soon">
                        <h3 className="settings-coming-soon-title">Coming Soon</h3>
                        <p className="settings-coming-soon-text">This settings page is under development.</p>
                    </div>
                );
        }
    };

    return (
        <div className="settings-container">
            <div className="settings-header">
                <h1 className="settings-title">Settings</h1>
                <p className="settings-subtitle">Manage your account preferences and settings.</p>
            </div>

            <div className="settings-layout">
                {/* Sidebar */}
                <div className="settings-sidebar">
                    <nav className="settings-nav">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`settings-nav-button ${activeTab === tab.id ? 'settings-nav-button-active' : 'settings-nav-button-inactive'}`}
                            >
                                <tab.icon className="settings-nav-icon" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content */}
                <div className="settings-main">
                    <div className="settings-content">
                        {renderTabContent()}

                        <div className="settings-actions">
                            <button className="settings-cancel-button">
                                Cancel
                            </button>
                            <button className="settings-save-button">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentSettings;