import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { Search, Bell, Menu, Settings, LogOut, User, Sun, Moon, GraduationCap, Users, Shield } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import './Topbar.css';

const Topbar = memo(({ onToggleSidebar }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentRole, user, setCurrentRole } = useAuth();
  const dropdownRef = useRef(null);

  const getTopbarActions = () => {
    const commonActions = [
      {
        id: 'profile',
        label: 'Profile',
        action: () => console.log('Navigate to profile'),
        icon: <User size={16} className="topbar-dropdown-icon" />,
      },
      {
        id: 'settings',
        label: 'Settings',
        action: () => console.log('Navigate to settings'),
        icon: <Settings size={16} className="topbar-dropdown-icon" />,
      },
      {
        id: 'divider1',
        label: '',
        action: () => { },
        divider: true,
      },
      {
        id: 'logout',
        label: 'Log out',
        action: () => console.log('Logout'),
        icon: <LogOut size={16} className="topbar-dropdown-icon topbar-dropdown-icon-logout" />,
        isLogout: true,
      },
    ];

    if (currentRole === 'teacher') {
      return [
        {
          id: 'create-class',
          label: 'Create Class',
          action: () => console.log('Create new class'),
        },
        {
          id: 'grade-assignments',
          label: 'Grade Assignments',
          action: () => console.log('Grade assignments'),
        },
        {
          id: 'divider-teacher',
          label: '',
          action: () => { },
          divider: true,
        },
        ...commonActions,
      ];
    }

    if (currentRole === 'admin') {
      return [
        {
          id: 'add-user',
          label: 'Add User',
          action: () => console.log('Add new user'),
        },
        {
          id: 'system-status',
          label: 'System Status',
          action: () => console.log('View system status'),
        },
        {
          id: 'backup',
          label: 'Backup Data',
          action: () => console.log('Backup system data'),
        },
        {
          id: 'divider-admin',
          label: '',
          action: () => { },
          divider: true,
        },
        ...commonActions,
      ];
    }

    return [
      {
        id: 'join-class',
        label: 'Join Live Class',
        action: () => console.log('Join live class'),
      },
      {
        id: 'divider-student',
        label: '',
        action: () => { },
        divider: true,
      },
      ...commonActions,
    ];
  };

  const topbarActions = getTopbarActions();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProfileDropdown = useCallback(() => {
    setIsProfileDropdownOpen(prev => !prev);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsProfileDropdownOpen(false);
    }
  }, []);

  const getRoleDisplayName = (role) => {
    switch (role) {
      case 'teacher':
        return 'Teacher';
      case 'admin':
        return 'Administrator';
      default:
        return 'Student';
    }
  };

  const roles = [
    { role: 'student', label: 'Student', icon: GraduationCap },
    { role: 'teacher', label: 'Teacher', icon: Users },
    { role: 'admin', label: 'Admin', icon: Shield },
  ];

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <button
          onClick={onToggleSidebar}
          className="topbar-menu-button"
          aria-label="Toggle sidebar"
          type="button"
        >
          <Menu size={20} />
        </button>

        <div className="topbar-search">
          <Search
            size={20}
            className="topbar-search-icon"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search"
            className="topbar-search-input"
            aria-label="Search"
          />
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-role-switcher">
          <span className="topbar-role-label">Role:</span>
          {roles.map((roleItem) => {
            const Icon = roleItem.icon;
            return (
              <button
                key={roleItem.role}
                onClick={() => setCurrentRole(roleItem.role)}
                className={`topbar-role-button ${currentRole === roleItem.role ? 'topbar-role-button-active' : 'topbar-role-button-inactive'}`}
              >
                <Icon size={12} />
                <span>{roleItem.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={toggleTheme}
          className="topbar-theme-button"
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          type="button"
        >
          <div className="topbar-theme-icons">
            <Sun
              size={20}
              className={`topbar-theme-icon ${isDarkMode ? 'topbar-theme-icon-hidden' : 'topbar-theme-icon-visible'}`}
            />
            <Moon
              size={20}
              className={`topbar-theme-icon ${isDarkMode ? 'topbar-theme-icon-visible' : 'topbar-theme-icon-hidden'}`}
            />
          </div>
        </button>

        <button
          className="topbar-notification-button"
          aria-label="Notifications"
          type="button"
        >
          <Bell size={20} />
        </button>

        <div className="topbar-profile-dropdown-container" ref={dropdownRef}>
          <button
            onClick={toggleProfileDropdown}
            onKeyDown={handleKeyDown}
            className="topbar-profile-button"
            aria-label="User menu"
            aria-expanded={isProfileDropdownOpen}
            aria-haspopup="true"
            type="button"
          >
            <span className="topbar-profile-initial">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </button>

          {isProfileDropdownOpen && (
            <div className="topbar-dropdown" role="menu">
              <div className="topbar-dropdown-header">
                <div className="topbar-dropdown-user">
                  <div className="topbar-dropdown-avatar">
                    <span className="topbar-dropdown-avatar-initial">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <div>
                    <p className="topbar-dropdown-name">
                      {user?.name || 'User Name'}
                    </p>
                    <p className="topbar-dropdown-email">
                      {user?.email || 'user@example.com'}
                    </p>
                    <p className="topbar-dropdown-role">
                      {getRoleDisplayName(currentRole)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="topbar-dropdown-menu" role="none">
                {topbarActions.map((action) => {
                  if (action.divider) {
                    return (
                      <div key={action.id} className="topbar-dropdown-divider" />
                    );
                  }

                  return (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className={`topbar-dropdown-item ${action.isLogout ? 'topbar-dropdown-item-logout' : 'topbar-dropdown-item-regular'}`}
                      role="menuitem"
                    >
                      {action.icon}
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

Topbar.displayName = 'Topbar';

export default Topbar;