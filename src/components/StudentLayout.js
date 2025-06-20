import { Box, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const StudentLayout = ({ children, sidebarOpen, toggleSidebar, theme }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Topbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <Sidebar sidebarOpen={sidebarOpen} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: sidebarOpen ? 'calc(100% - 280px)' : 'calc(100% - 72px)',
                    marginLeft: sidebarOpen ? '280px' : '72px',
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: sidebarOpen
                            ? theme.transitions.duration.enteringScreen
                            : theme.transitions.duration.leavingScreen,
                    }),
                }}
            >
                <Toolbar /> {/* Spacer for fixed AppBar */}
                {children}
            </Box>
        </Box>
    );
};

StudentLayout.propTypes = {
    children: PropTypes.node.isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};

export default StudentLayout;