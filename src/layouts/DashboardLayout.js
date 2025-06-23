import { Box, Toolbar, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children, role, sidebarOpen, toggleSidebar }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Auto-close sidebar when switching to mobile view
    useEffect(() => {
        if (isMobile && sidebarOpen) {
            toggleSidebar();
        }
    }, [isMobile]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box sx={{ display: 'flex' }}>
            <Topbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} role={role} />
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} role={role} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: isMobile ? '100%' : `calc(100% - ${sidebarOpen ? 280 : 72}px)`,
                    marginLeft: isMobile ? 0 : sidebarOpen ? '20px' : '12px',
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                }}
            >
                <Toolbar />
                {children}
            </Box>

        </Box>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
    role: PropTypes.oneOf(['student', 'teacher', 'admin']).isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default DashboardLayout;