import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Box
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  HelpOutline as HelpIcon
} from '@mui/icons-material';
import { drawerWidth, collapsedWidth } from '../studentDashboard/constants';

const Topbar = ({ handleDrawerToggle, collapsed }) => {
  return (
    <AppBar
      position="fixed"
      className="smooth-transition"
      sx={{
        width: {
          sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`
        },
        ml: {
          sm: `${collapsed ? collapsedWidth : drawerWidth}px`
        },
        backgroundColor: '#ffffff',
        color: '#5f6368',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        willChange: 'width, margin', // Optimize for performance
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          className="smooth-transition"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            gap: 2,
            willChange: 'width, margin',
          }}
        >
          {/* Search Box */}
          <Box
            className="smooth-transition"
            sx={{
              position: 'relative',
              borderRadius: '8px',
              backgroundColor: 'rgba(0,0,0,0.05)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.08)' },
              flexGrow: collapsed ? 0 : 1,
              minWidth: collapsed ? '150px' : '300px',
              maxWidth: collapsed ? '200px' : '600px',
              willChange: 'width, flex-grow',
            }}
          >
            <Box sx={{
              padding: '8px',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              sx={{
                color: 'inherit',
                padding: '8px 8px 8px 40px',
                width: '100%',
              }}
            />
          </Box>

          {/* Icons - will push to the right */}
          <Box
            className="smooth-transition"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              ml: 'auto',
              willChange: 'margin',
            }}
          >
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <HelpIcon />
            </IconButton>
            <Avatar
              alt="User Profile"
              src="/static/images/avatar/1.jpg"
              sx={{
                width: 32,
                height: 32,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': { transform: 'scale(1.1)' }
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;