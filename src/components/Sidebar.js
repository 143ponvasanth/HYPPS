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
} from '@mui/material';
import {
    DashboardCustomize as DashboardCustomizeIcon,
    Search as SearchIcon,
    AssignmentTurnedIn as AssignmentTurnedInIcon,
    Class as ClassIcon,
    Chat as ChatIcon,
    MenuBook as MenuBookIcon,
    VideoLibrary as VideoLibraryIcon,
    WorkspacePremium as WorkspacePremiumIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ sidebarOpen }) => {
    const theme = useTheme();

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardCustomizeIcon />, path: '/' },
        { text: 'Search Classes', icon: <SearchIcon />, path: '/search-classes' },
        { text: 'My Requests', icon: <AssignmentTurnedInIcon />, path: '/my-requests' },
        { text: 'My Classes', icon: <ClassIcon />, path: '/my-classes' },
        { text: 'Live Chat', icon: <ChatIcon />, path: '/live-chat' },
        { text: 'Resources', icon: <MenuBookIcon />, path: '/resources' },
        { text: 'Class Recordings', icon: <VideoLibraryIcon />, path: '/class-recordings' },
        { text: 'Certificates', icon: <WorkspacePremiumIcon />, path: '/certificates' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    ];

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
                            Student Portal
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
        </Drawer>
    );
};

export default Sidebar;