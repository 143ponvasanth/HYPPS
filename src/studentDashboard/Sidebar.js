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
    Divider,
    AppBar,
    InputBase,
    Badge,
    Avatar,
    CssBaseline
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
    ChevronLeft as ChevronLeftIcon,
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    HelpOutline as HelpIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { alpha } from '@mui/material/styles';

const drawerWidth = 240;
const collapsedWidth = 80;

const transitionConfig = '300ms cubic-bezier(0.25, 0.8, 0.25, 1)';

const SidebarBox = styled(Box)(({ theme }) => ({
    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`,
    height: '100vh',
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '4px 0 10px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    willChange: 'transform',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, active, collapsed }) => ({
    borderRadius: '8px',
    margin: theme.spacing(0.5, 1),
    paddingLeft: collapsed ? theme.spacing(2.5) : theme.spacing(active ? 2 : 2.5),
    position: 'relative',
    transition: `all ${transitionConfig}`,
    backgroundColor: active ? '#F0F7FF' : 'transparent',
    minHeight: '44px',
    '&:hover': {
        backgroundColor: '#F0F7FF',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        left: collapsed ? '4px' : '0',
        top: '50%',
        transform: 'translateY(-50%)',
        height: '60%',
        width: active ? '4px' : '0px',
        backgroundColor: '#1976d2',
        borderRadius: '0 4px 4px 0',
        transition: `all ${transitionConfig}`,
    },
    '& .MuiListItemIcon-root': {
        minWidth: '36px',
        color: active ? '#1976d2' : '#5f6368',
        transition: `color ${transitionConfig}`,
        marginLeft: collapsed ? '4px' : '0',
    },
    '& .MuiTypography-root': {
        fontWeight: active ? '600' : '400',
        color: active ? '#1976d2' : '#5f6368',
        fontSize: '0.875rem',
        transition: `opacity ${transitionConfig}, transform ${transitionConfig}`,
        whiteSpace: 'nowrap',
        opacity: collapsed ? 0 : 1,
        transform: collapsed ? 'translateX(10px)' : 'translateX(0)',
        marginLeft: theme.spacing(1),
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

const NavigationLayout = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Changed from 'sm' to 'md' for better tablet support
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
                transition: `padding ${transitionConfig}`,
            }}>
                {!collapsed && (
                    <Typography variant="h6" noWrap component="div" sx={{
                        color: '#1976d2',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        transition: `opacity ${transitionConfig}`,
                        opacity: collapsed ? 0 : 1,
                    }}>
                        HYPPS
                    </Typography>
                )}
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                        color: '#5f6368',
                        '&:hover': {
                            backgroundColor: 'rgba(25, 118, 210, 0.08)'
                        },
                        transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: `transform ${transitionConfig}`,
                        display: { xs: 'none', sm: 'flex' } // Hide on mobile, show on tablet/desktop
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider sx={{
                borderColor: 'rgba(0,0,0,0.08)',
                mx: collapsed ? 2 : 3,
                transition: `margin ${transitionConfig}`,
            }} />
            <List sx={{
                flexGrow: 1,
                overflow: 'hidden',
            }}>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.text}
                        disablePadding
                        sx={{
                            display: 'block',
                            overflow: 'hidden',
                        }}
                    >
                        <StyledListItemButton
                            component={Link}
                            to={`/${item.text.toLowerCase().replace(/\s+/g, '-')}`}
                            active={activeTab === item.text ? 1 : 0}
                            collapsed={collapsed ? 1 : 0}
                            sx={{
                                justifyContent: collapsed ? 'center' : 'flex-start',
                                px: collapsed ? 2 : 3,
                            }}
                            onClick={() => handleTabClick(item.text)}
                        >
                            <ListItemIcon
                                sx={{
                                    justifyContent: 'center',
                                    minWidth: '36px',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                            />
                        </StyledListItemButton>
                    </ListItem>
                ))}
            </List>
        </SidebarBox>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: {
                        xs: '100%', // Full width on mobile
                        sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`
                    },
                    ml: {
                        xs: 0, // No margin on mobile
                        sm: `${collapsed ? collapsedWidth : drawerWidth}px`
                    },
                    backgroundColor: '#ffffff',
                    color: '#5f6368',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: 300,
                    }),
                    zIndex: theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar sx={{
                    minHeight: '64px !important',
                    paddingLeft: { xs: '16px', sm: '24px' }, // Smaller padding on mobile
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { sm: 'none' },
                            marginLeft: { xs: '-4px', sm: '-8px' } // Adjusted for mobile
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            gap: { xs: 1, sm: 2 }, // Smaller gap on mobile
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(0,0,0,0.05)',
                                '&:hover': { backgroundColor: 'rgba(0,0,0,0.08)' },
                                flexGrow: 1,
                                minWidth: { xs: '100px', sm: '150px' }, // Smaller min-width on mobile
                                maxWidth: '600px',
                                transition: theme.transitions.create(['width', 'flex-grow'], {
                                    easing: theme.transitions.easing.sharp,
                                    duration: 300,
                                }),
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
                                    fontSize: { xs: '0.875rem', sm: '1rem' } // Smaller font on mobile
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: { xs: '8px', sm: '16px' }, // Smaller gap on mobile
                                ml: 'auto',
                            }}
                        >
                            <IconButton color="inherit" size="small">
                                <Badge badgeContent={4} color="error">
                                    <NotificationsIcon fontSize="small" />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit" size="small">
                                <HelpIcon fontSize="small" />
                            </IconButton>
                            <Avatar
                                alt="User Profile"
                                src="/static/images/avatar/1.jpg"
                                sx={{
                                    width: { xs: 28, sm: 32 },
                                    height: { xs: 28, sm: 32 },
                                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': { transform: 'scale(1.1)' }
                                }}
                            />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{
                    width: { sm: collapsed ? collapsedWidth : drawerWidth },
                    flexShrink: { sm: 0 },
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: 300,
                    }),
                }}
            >
                {/* Mobile drawer */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile
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

                {/* Desktop/tablet drawer */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: collapsed ? collapsedWidth : drawerWidth,
                            border: 'none',
                            overflowX: 'hidden',
                            transition: theme.transitions.create('width', {
                                easing: theme.transitions.easing.sharp,
                                duration: 300,
                            }),
                        },
                    }}
                    open
                >
                    {drawerContent}
                </Drawer>
            </Box>

            {/* <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: { xs: 2, sm: 3 }, 
                    width: {
                        xs: '100%',
                        sm: `calc(100% - ${collapsed ? collapsedWidth : drawerWidth}px)`
                    },
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: 300,
                    }),
                    ml: {
                        xs: 0, 
                        sm: `${collapsed ? collapsedWidth : drawerWidth}px`
                    },
                    mt: '64px', 
                }}
            >
                <Toolbar />
                {children}
            </Box> */}
        </Box>
    );
};

export default NavigationLayout;