import React, { memo, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Home,
  Search,
  ClipboardList,
  Users,
  MessageSquare,
  BookOpen,
  Video,
  Award,
  Settings,
  Calendar,
  BarChart3,
  UserCheck,
  DollarSign,
  Star,
  Download,
  GraduationCap,
  CreditCard,
  AlertTriangle,
  HelpCircle
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = memo(({
  isOpen,
  isCollapsed,
  isMobile = false,
  currentPage,
  onPageChange,
  onClose
}) => {
  const { currentRole, user } = useAuth();

  const getMenuItems = () => {
    if (currentRole === 'student') {
      return [
        { id: 'dashboard', icon: Home, label: 'Dashboard', badge: null },
        { id: 'search-classes', icon: Search, label: 'Search Classes', badge: null },
        { id: 'my-requests', icon: ClipboardList, label: 'My Requests', badge: 3 },
        { id: 'my-classes', icon: Users, label: 'My Classes', badge: null },
        { id: 'live-chat', icon: MessageSquare, label: 'Live Chat', badge: 2 },
        { id: 'resources', icon: BookOpen, label: 'Resources', badge: null },
        { id: 'class-recordings', icon: Video, label: 'Class Recordings', badge: null },
        { id: 'certificates', icon: Award, label: 'Certificates', badge: null },
        { id: 'settings', icon: Settings, label: 'Settings', badge: null },
      ];
    }

    if (currentRole === 'teacher') {
      return [
        { id: 'teacher-dashboard', icon: Home, label: 'Teacher Dashboard', badge: null },
        { id: 'my-courses', icon: BookOpen, label: 'My Courses', badge: null },
        { id: 'student-requests', icon: ClipboardList, label: 'Student Requests', badge: 7 },
        { id: 'my-students', icon: Users, label: 'My Students', badge: null },
        { id: 'live-classes', icon: Video, label: 'Live Classes', badge: null },
        { id: 'teacher-calendar', icon: Calendar, label: 'Teacher Calendar', badge: null },
        { id: 'messages', icon: MessageSquare, label: 'Messages', badge: 12 },
        { id: 'earnings-payouts', icon: DollarSign, label: 'Earnings & Payouts', badge: null },
        { id: 'reviews-ratings', icon: Star, label: 'Reviews & Ratings', badge: null },
        { id: 'analytics-insights', icon: BarChart3, label: 'Analytics & Insights', badge: null },
        { id: 'reports-downloads', icon: Download, label: 'Reports & Downloads', badge: null },
        { id: 'teacher-settings', icon: Settings, label: 'Teacher Settings', badge: null },
      ];
    }

    if (currentRole === 'admin') {
      return [
        { id: 'admin-dashboard', icon: Home, label: 'Admin Dashboard', badge: null },
        { id: 'manage-teachers', icon: UserCheck, label: 'Manage Teachers', badge: null },
        { id: 'manage-students', icon: GraduationCap, label: 'Manage Students', badge: null },
        { id: 'manage-classes', icon: BookOpen, label: 'Manage Classes', badge: null },
        { id: 'chat-monitor', icon: MessageSquare, label: 'Chat Monitor', badge: 5 },
        { id: 'resources-recordings', icon: Video, label: 'Resources & Recordings', badge: null },
        { id: 'reports-analytics', icon: BarChart3, label: 'Reports & Analytics', badge: null },
        { id: 'payments', icon: CreditCard, label: 'Payments', badge: null },
        { id: 'ai-moderation-flags', icon: AlertTriangle, label: 'AI Moderation Flags', badge: 3 },
        { id: 'platform-settings', icon: Settings, label: 'Platform Settings', badge: null },
        { id: 'support-requests', icon: HelpCircle, label: 'Support Requests', badge: 8 },
      ];
    }

    return [];
  };

  const menuItems = getMenuItems();

  const handleItemClick = useCallback((itemId) => {
    onPageChange(itemId);
    if (isMobile && onClose) {
      onClose();
    }
  }, [onPageChange, isMobile, onClose]);

  const handleOverlayClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && onClose) {
      onClose();
    }
  }, [onClose]);

  const getRoleDisplayName = (role) => {
    switch (role) {
      case 'teacher':
        return 'Teacher';
      case 'admin':
        return 'Admin';
      default:
        return 'Student';
    }
  };

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="sidebar-overlay"
          onClick={handleOverlayClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
        />
      )}

      <div
        className={`
          sidebar-container
          ${isCollapsed && !isMobile ? 'sidebar-collapsed' : 'sidebar-expanded'}
          ${isMobile ? 'sidebar-mobile' : 'sidebar-desktop'}
          ${isOpen ? 'sidebar-open' : 'sidebar-closed'}
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="sidebar-profile-section">
          <div className="sidebar-profile-content">
            <div className="sidebar-profile-avatar">
              <span className="sidebar-profile-avatar-text">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>
            <div className={`
              sidebar-profile-info
              ${isCollapsed && !isMobile ? 'sidebar-profile-info-collapsed' : 'sidebar-profile-info-expanded'}
            `}>
              <div className="sidebar-profile-name">
                {user?.name || 'User'}
              </div>
              <div className="sidebar-profile-role">
                {getRoleDisplayName(currentRole)}
              </div>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav" role="menu">
          <div className="sidebar-menu">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <div
                  key={item.id}
                  className={`
                    sidebar-menu-item
                    ${isActive ? 'sidebar-menu-item-active' : 'sidebar-menu-item-inactive'}
                  `}
                  onClick={() => handleItemClick(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={item.label}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }
                  }}
                >
                  <div className="sidebar-menu-item-content">
                    <div className={`
                      sidebar-menu-item-icon
                      ${isActive ? 'sidebar-menu-item-icon-active' : 'sidebar-menu-item-icon-inactive'}
                    `}>
                      <Icon size={20} />
                    </div>
                    <div className={`
                      sidebar-menu-item-label-container
                      ${isCollapsed ? 'sidebar-menu-item-label-collapsed' : 'sidebar-menu-item-label-expanded'}
                    `}>
                      <span className={`
                        sidebar-menu-item-label
                        ${isActive ? 'sidebar-menu-item-label-active' : 'sidebar-menu-item-label-inactive'}
                      `}>
                        {item.label}
                      </span>
                      {item.badge && !isCollapsed && (
                        <span className="sidebar-menu-item-badge">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.badge && isCollapsed && (
                    <div className="sidebar-menu-item-collapsed-badge">
                      {typeof item.badge === 'number' && item.badge > 9 ? '9+' : item.badge}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;