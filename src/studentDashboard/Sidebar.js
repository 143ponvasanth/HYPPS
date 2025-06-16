import React, { useState } from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    useMediaQuery,
    useTheme,
    Toolbar,
    IconButton,
    Typography,
    Divider
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    School as SchoolIcon,
    LiveTv as LiveTvIcon,
    VideoLibrary as VideoLibraryIcon,
    Assignment as AssignmentIcon,
    Email as EmailIcon,
    Folder as FolderIcon,
    CardMembership as CardMembershipIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const collapsedWidth = 72;

const SidebarBox = styled(Box)(({ theme }) => ({
    background: '#ffffff',
    height: '100%',
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '4px 0 10px rgba(0,0,0,0.05)',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
    borderRadius: '0 12px 12px 0',
    marginBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(active ? 2 : 3),
    position: 'relative',
    transition: 'all 0.2s ease',
    backgroundColor: active ? '#F0F7FF' : 'transparent',
    '&:hover': {
        backgroundColor: '#F0F7FF',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: active ? '4px' : '0px',
        backgroundColor: '#1976d2',
        borderRadius: '0 4px 4px 0',
        transition: 'all 0.2s ease',
    },
    '& .MuiListItemIcon-root': {
        minWidth: '36px',
        color: active ? '#1976d2' : '#5f6368',
    },
    '& .MuiTypography-root': {
        fontWeight: active ? '600' : '400',
        color: active ? '#1976d2' : '#5f6368',
        fontSize: '0.875rem',
    },
}));

const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: true },
    { text: 'My Classes', icon: <SchoolIcon /> },
    { text: 'Join Live Class', icon: <LiveTvIcon /> },
    { text: 'Class Recordings', icon: <VideoLibraryIcon /> },
    { text: 'Assignments', icon: <AssignmentIcon /> },
    { text: 'Messages', icon: <EmailIcon /> },
    { text: 'Resources', icon: <FolderIcon /> },
    { text: 'Certificates', icon: <CardMembershipIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> },
];

const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');

    const handleDrawerToggle = () => {
        if (isMobile) {
            setMobileOpen(!mobileOpen);
        } else {
            setCollapsed(!collapsed);
        }
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        if (isMobile) {
            setMobileOpen(false);
        }
    };

    const drawerContent = (
        <SidebarBox>
            <Toolbar sx={{
                justifyContent: 'space-between',
                minHeight: '64px !important',
                px: collapsed ? 2 : 3,
            }}>
                {!collapsed && (
                    <Typography variant="h6" noWrap component="div" sx={{
                        color: '#1976d2',
                        fontWeight: '700',
                        fontSize: '1.25rem'
                    }}>
                        Logo
                    </Typography>
                )}
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                        color: '#5f6368',
                        '&:hover': {
                            backgroundColor: 'rgba(25, 118, 210, 0.08)'
                        }
                    }}
                >
                    {collapsed ? <MenuIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </Toolbar>
            <Divider sx={{ borderColor: 'rgba(0,0,0,0.08)', mb: 1 }} />
            <List sx={{ flexGrow: 1 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <StyledListItemButton
                            component={Link}
                            to={`/${item.text.toLowerCase().replace(/\s+/g, '-')}`}
                            active={activeTab === item.text ? 1 : 0}
                            sx={{
                                justifyContent: collapsed ? 'center' : 'initial',
                                px: collapsed ? 2 : 3,
                            }}
                            onClick={() => handleTabClick(item.text)}
                        >
                            <ListItemIcon
                                sx={{
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            {!collapsed && <ListItemText primary={item.text} />}
                        </StyledListItemButton>
                    </ListItem>
                ))}
            </List>
        </SidebarBox>
    );

    return (
        <Box
            component="nav"
            sx={{
                width: { sm: collapsed ? collapsedWidth : drawerWidth },
                flexShrink: { sm: 0 },
            }}
        >
            {/* Mobile drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        border: 'none',
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Desktop drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: collapsed ? collapsedWidth : drawerWidth,
                        border: 'none',
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
};

export default Sidebar;