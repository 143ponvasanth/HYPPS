import React, { useState } from 'react';
import { Box, CssBaseline, useMediaQuery, useTheme, Toolbar } from '@mui/material';
import Topbar from '../studentDashboard/Topbar';
import Sidebar from '../studentDashboard/Sidebar';
import { drawerWidth, collapsedWidth } from '../studentDashboard/constants';

const Layout = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        if (isMobile) {
            setMobileOpen(!mobileOpen);
        } else {
            setCollapsed(!collapsed);
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Topbar
                handleDrawerToggle={handleDrawerToggle}
                collapsed={collapsed}
            />
            <Sidebar
                collapsed={collapsed}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            <Box
                component="main"
                className="smooth-transition"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)` },
                    willChange: 'width, margin',
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;