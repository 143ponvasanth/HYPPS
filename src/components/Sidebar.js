import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    useTheme,
    Avatar,
    Typography,
    Box,
    useMediaQuery,
    Tooltip,
    IconButton,
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Search as SearchIcon,
    AssignmentTurnedIn as AssignmentTurnedInIcon,
    Groups as GroupsIcon,
    School as SchoolIcon,
    Class as ClassIcon,
    VideoLibrary as VideoLibraryIcon,
    CalendarToday as CalendarTodayIcon,
    Chat as ChatIcon,
    MenuBook as MenuBookIcon,
    WorkspacePremium as WorkspacePremiumIcon,
    MonetizationOn as MonetizationOnIcon,
    Star as StarIcon,
    Assessment as AssessmentIcon,
    Description as DescriptionIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const roleBasedMenuItems = {
    student: [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/student/dashboard' },
        { text: 'Search Classes', icon: <SearchIcon />, path: '/student/search-classes' },
        { text: 'My Requests', icon: <AssignmentTurnedInIcon />, path: '/student/my-requests' },
        { text: 'My Classes', icon: <ClassIcon />, path: '/student/my-classes' },
        { text: 'Live Chat', icon: <ChatIcon />, path: '/student/live-chat' },
        { text: 'Resources', icon: <MenuBookIcon />, path: '/student/resources' },
        { text: 'Class Recordings', icon: <VideoLibraryIcon />, path: '/student/class-recordings' },
        { text: 'Certificates', icon: <WorkspacePremiumIcon />, path: '/student/certificates' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/student/settings' },
    ],
    teacher: [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/teacher/dashboard' },
        { text: 'My Courses', icon: <ClassIcon />, path: '/teacher/courses' },
        { text: 'Student Requests', icon: <AssignmentTurnedInIcon />, path: '/teacher/requests' },
        { text: 'My Students', icon: <GroupsIcon />, path: '/teacher/students' },
        { text: 'Live Classes', icon: <VideoLibraryIcon />, path: '/teacher/live-classes' },
        { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/teacher/calendar' },
        { text: 'Messages', icon: <ChatIcon />, path: '/teacher/messages' },
        { text: 'Earnings & Payouts', icon: <MonetizationOnIcon />, path: '/teacher/earnings' },
        { text: 'Reviews & Ratings', icon: <StarIcon />, path: '/teacher/reviews' },
        { text: 'Analytics & Insights', icon: <AssessmentIcon />, path: '/teacher/analytics' },
        { text: 'Reports & Downloads', icon: <DescriptionIcon />, path: '/teacher/reports' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/teacher/settings' },
    ],
    admin: [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard' },
        { text: 'Manage Teachers', icon: <GroupsIcon />, path: '/admin/manage-teachers' },
        { text: 'Manage Students', icon: <SchoolIcon />, path: '/admin/manage-students' },
        { text: 'Manage Classes', icon: <ClassIcon />, path: '/admin/manage-classes' },
        { text: 'Chat Monitor', icon: <ChatIcon />, path: '/admin/chat-monitor' },
        { text: 'Resources & Recordings', icon: <VideoLibraryIcon />, path: '/admin/resources' },
        { text: 'Reports & Analytics', icon: <AssessmentIcon />, path: '/admin/reports' },
        { text: 'Payments', icon: <MonetizationOnIcon />, path: '/admin/payments' },
        { text: 'AI Moderation Flags', icon: <StarIcon />, path: '/admin/moderation' },
        { text: 'Platform Settings', icon: <SettingsIcon />, path: '/admin/platform-settings' },
        { text: 'Support Requests', icon: <AssignmentTurnedInIcon />, path: '/admin/support' },
    ]
};

const Sidebar = ({ sidebarOpen, toggleSidebar, role }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const menuItems = roleBasedMenuItems[role];
    const listRef = useRef(null);
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const handleNavigation = () => {
        if (isMobile) {
            toggleSidebar();
        }
    };

    const checkScroll = () => {
        if (listRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listRef.current;
            setShowScrollUp(scrollTop > 0);
            setShowScrollDown(scrollTop + clientHeight < scrollHeight);
        }
    };

    const scrollUp = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ top: -100, behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ top: 100, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const listElement = listRef.current;
        if (listElement) {
            listElement.addEventListener('scroll', checkScroll);
            // Initial check
            checkScroll();
        }
        return () => {
            if (listElement) {
                listElement.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

    // Also check scroll when sidebar opens/closes or when menu items change
    useEffect(() => {
        const timer = setTimeout(() => {
            checkScroll();
        }, 100);
        return () => clearTimeout(timer);
    }, [sidebarOpen, menuItems]);

    const drawerContent = (
        <Box sx={{
            p: sidebarOpen ? 3 : 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            {/* Logo Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: sidebarOpen ? 'flex-start' : 'center',
                    gap: sidebarOpen ? 2 : 0,
                    mb: 3,
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: 'white',
                        color: theme.palette.primary.main,
                        width: 58,
                        height: 58,
                    }}
                >
                    LEO
                </Avatar>
                {sidebarOpen && (
                    <Typography variant="h6" fontWeight="bold" noWrap>
                        {role === 'admin' ? 'HYPPS Admin' : role === 'student' ? 'Student Portal' : 'Teacher Portal'}
                    </Typography>
                )}
            </Box>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />

            {/* Scroll Up Button */}
            {showScrollUp && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <IconButton
                        onClick={scrollUp}
                        size="small"
                        sx={{
                            color: 'white',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            },
                        }}
                    >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </Box>
            )}

            {/* Menu Items */}
            <List 
                ref={listRef}
                sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    position: 'relative',
                }}
            >
                {menuItems.map((item) => (
                    <ListItem
                        key={item.text}
                        disablePadding
                        sx={{
                            display: 'block',
                            mb: 1,
                        }}
                    >
                        <Tooltip
                            title={item.text}
                            placement="right"
                            disableHoverListener={sidebarOpen}
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                        color: 'white',
                                        fontSize: '0.875rem',
                                        transition: 'none !important',
                                        transform: 'none !important',
                                    }
                                },
                                popper: {
                                    sx: {
                                        animation: 'none !important',
                                        transition: 'none !important',
                                    }
                                }
                            }}
                        >
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                end
                                onClick={handleNavigation}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: sidebarOpen ? 'initial' : 'center',
                                    px: sidebarOpen ? 3 : 2,
                                    borderRadius: '8px',
                                    border: '1px solid transparent',
                                    position: 'relative',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    '&.active': {
                                        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                            color: 'white',
                                            opacity: 1,
                                            fontWeight: 'bold',
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: '2px',
                                            backgroundColor: 'white',
                                            borderRadius: '0 4px 4px 0'
                                        }
                                    },
                                    '&:not(.active)': {
                                        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                            opacity: 0.7,
                                        }
                                    },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                            opacity: 0.9,
                                        }
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: sidebarOpen ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: 'inherit',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        color: 'inherit',
                                        fontWeight: 'medium',
                                    }}
                                    sx={{
                                        opacity: sidebarOpen ? 1 : 0,
                                        width: 'calc(100% - 48px)',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            {/* Scroll Down Button */}
            {showScrollDown && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                    <IconButton
                        onClick={scrollDown}
                        size="small"
                        sx={{
                            color: 'white',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            },
                        }}
                    >
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </Box>
            )}

            {/* Logout Section */}
            <Box sx={{ mt: 'auto', pb: 2 }}>
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <Tooltip
                        title="Logout"
                        placement="right"
                        disableHoverListener={sidebarOpen}
                        componentsProps={{
                            tooltip: {
                                sx: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    color: 'white',
                                    fontSize: '0.875rem',
                                    transition: 'none !important',
                                    transform: 'none !important',
                                }
                            },
                            popper: {
                                sx: {
                                    animation: 'none !important',
                                    transition: 'none !important',
                                }
                            }
                        }}
                    >
                        <ListItemButton
                            onClick={handleNavigation}
                            sx={{
                                minHeight: 48,
                                justifyContent: sidebarOpen ? 'initial' : 'center',
                                px: sidebarOpen ? 3 : 2,
                                borderRadius: '8px',
                                border: '1px solid transparent',
                                maxWidth: '100%',
                                overflow: 'hidden',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: sidebarOpen ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'inherit',
                                }}
                            >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Logout"
                                primaryTypographyProps={{ color: 'inherit' }}
                                sx={{
                                    opacity: sidebarOpen ? 1 : 0,
                                    width: 'calc(100% - 48px)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            />
                        </ListItemButton>
                    </Tooltip>
                </ListItem>
            </Box>
        </Box>
    );

    if (isMobile) {
        return (
            <Drawer
                variant="temporary"
                open={sidebarOpen}
                onClose={toggleSidebar}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 280,
                        background: 'linear-gradient(180deg, #0072ff 0%, #00c6ff 100%)',
                        borderRight: 'none',
                        color: 'white',
                        zIndex: theme.zIndex.appBar + 1,
                        top: '64px',
                        height: 'calc(100% - 64px)',
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        );
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sidebarOpen ? 280 : 72,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                '& .MuiDrawer-paper': {
                    width: sidebarOpen ? 280 : 72,
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    background: 'linear-gradient(180deg, #0072ff 0%, #00c6ff 100%)',
                    borderRight: 'none',
                    color: 'white',
                },
            }}
        >
            {drawerContent}
        </Drawer>
    );
};

export default Sidebar;