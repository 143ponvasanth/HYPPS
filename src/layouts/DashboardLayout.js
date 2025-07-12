import React, { useState, useEffect, useCallback, memo } from 'react';
import Topbar from '../components/layout/Topbar';
import Sidebar from '../components/layout/Sidebar';
import { useTheme } from '../contexts/ThemeContext';
import './DashboardLayout.css';

const DashboardLayout = memo(({ children, currentPage, onPageChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const { isDarkMode } = useTheme();

  const checkScreenSize = useCallback(() => {
    const width = window.innerWidth;
    const mobile = width < 768;
    const tablet = width >= 768 && width < 1024;
    const desktop = width >= 1024;

    setIsMobile(mobile);
    setIsTablet(tablet);
    setIsDesktop(desktop);

    if (mobile) {
      setIsSidebarOpen(false);
      setIsSidebarCollapsed(false);
    } else if (tablet) {
      setIsSidebarOpen(true);
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarOpen(true);
      setIsSidebarCollapsed(true);
    }
  }, []);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setIsSidebarOpen(prev => !prev);
    } else {
      setIsSidebarCollapsed(prev => !prev);
    }
  }, [isMobile]);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className={`dashboard-layout-container ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        isMobile={isMobile}
        currentPage={currentPage}
        onPageChange={onPageChange}
        onClose={closeSidebar}
      />
      <div className="dashboard-layout-content">
        <Topbar onToggleSidebar={toggleSidebar} />
        <main className={`dashboard-layout-main ${isDarkMode ? 'dark' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
});

DashboardLayout.displayName = 'DashboardLayout';

export default DashboardLayout;