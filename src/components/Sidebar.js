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
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Search as SearchIcon,
    AssignmentTurnedIn as AssignmentTurnedInIcon,
    Groups as GroupsIcon,
    Class as ClassIcon,
    Chat as ChatIcon,
    MenuBook as MenuBookIcon,
    VideoLibrary as VideoLibraryIcon,
    WorkspacePremium as WorkspacePremiumIcon,
    Schedule as ScheduleIcon,
    Assessment as AssessmentIcon,
    MonetizationOn as MonetizationOnIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

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
    ],
    teacher: [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/teacher/dashboard' },
        { text: 'Students', icon: <GroupsIcon />, path: '/teacher/students' },
        { text: 'Classes', icon: <ClassIcon />, path: '/teacher/classes' },
        { text: 'Activities', icon: <AssignmentTurnedInIcon />, path: '/teacher/activities' },
        { text: 'Schedule', icon: <ScheduleIcon />, path: '/teacher/schedule' },
        { text: 'Messages', icon: <ChatIcon />, path: '/teacher/messages' },
        { text: 'Reports', icon: <AssessmentIcon />, path: '/teacher/reports' },
        { text: 'Resources', icon: <MenuBookIcon />, path: '/teacher/resources' },
        { text: 'Earnings', icon: <MonetizationOnIcon />, path: '/teacher/earnings' },
    ],
    common: [
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    ]
};

const Sidebar = ({ sidebarOpen, toggleSidebar, role }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const menuItems = [...roleBasedMenuItems[role], ...roleBasedMenuItems.common];

    const drawerContent = (
        <Box sx={{ p: sidebarOpen ? 3 : 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Logo Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: sidebarOpen ? 'flex-start' : 'center',
                    gap: sidebarOpen ? 2 : 0,
                    mb: 4,
                    overflow: 'hidden',
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: 'white',
                        color: theme.palette.primary.main,
                        width: 78,
                        height: 78,
                    }}
                >
                    HYPPS
                </Avatar>
                {sidebarOpen && (
                    <Typography variant="h6" fontWeight="bold">
                        {role === 'student' ? 'Student Portal' : 'Teacher Portal'}
                    </Typography>
                )}
            </Box>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />

            {/* Menu Items */}
            <List sx={{ flexGrow: 1 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 1 }}>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            end
                            sx={{
                                minHeight: 48,
                                justifyContent: sidebarOpen ? 'initial' : 'center',
                                px: sidebarOpen ? 3 : 2,
                                borderRadius: '12px',
                                '&.active': {
                                    backgroundColor: 'white',
                                    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                        color: theme.palette.primary.main,
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
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
                                sx={{ opacity: sidebarOpen ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* Logout Section */}
            <Box sx={{ mt: 'auto', pb: 2 }}>
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: sidebarOpen ? 'initial' : 'center',
                            px: sidebarOpen ? 3 : 2,
                            borderRadius: '12px',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                            sx={{ opacity: sidebarOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
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
                        zIndex: theme.zIndex.appBar + 1, // Ensure it appears above the app bar
                        top: '64px', // Position below the app bar
                        height: 'calc(100% - 64px)', // Adjust height to account for app bar
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