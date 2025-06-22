import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    Avatar,
    Menu,
    MenuItem,
    Select,
    FormControl,
    Box,
    Divider,
    ListItemIcon,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    Groups as GroupsIcon,
    Assessment as AssessmentIcon,
    ExpandMore as ExpandMoreIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
    Person as PersonIcon,
    School as SchoolIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const userData = {
    student: {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        email: "alex.johnson@student.edu"
    },
    teacher: {
        name: "Dr. Smith",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        email: "smith@university.edu",
        department: "Computer Science"
    },
    admin: {
        name: "Admin User",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        email: "admin@hypps.edu",
        role: "Administrator"
    }
};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const roleBasedFilters = {
    student: [
        { value: 'all', label: 'All Courses' },
        { value: 'active', label: 'Active' },
        { value: 'completed', label: 'Completed' },
    ],
    teacher: [
        { value: 'all', label: 'All Classes' },
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'completed', label: 'Completed' },
    ],
    admin: [
        { value: 'all', label: 'All Users' },
        { value: 'active', label: 'Active Users' },
        { value: 'inactive', label: 'Inactive Users' },
    ]
};

const Topbar = ({ sidebarOpen, toggleSidebar, role }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const currentUser = userData[role];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: 'white',
                color: 'text.primary',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
                height: '64px',
                width: isMobile ? '100%' : sidebarOpen ? 'calc(100% - 280px)' : 'calc(100% - 72px)',
                ml: isMobile ? 0 : sidebarOpen ? '280px' : '72px',
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleSidebar}
                        edge="start"
                        sx={{ mr: 2, color: 'text.primary' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {!isMobile && (
                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                            <Select
                                defaultValue="all"
                                IconComponent={ExpandMoreIcon}
                                sx={{
                                    '&:before, &:after': { display: 'none' },
                                    '& .MuiSelect-select': { paddingRight: '32px !important' },
                                }}
                            >
                                {(roleBasedFilters[role] || []).map((filter) => (  // Added fallback to empty array
                                    <MenuItem key={filter.value} value={filter.value}>
                                        {filter.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {!isMobile && (
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    )}

                    <IconButton color="inherit" sx={{ color: 'text.primary' }}>
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                        onClick={handleClick}
                    >
                        <Avatar
                            alt={currentUser.name}
                            src={currentUser.avatar}
                            sx={{ width: 40, height: 40 }}
                        />
                        {!isMobile && (
                            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                                {currentUser.name}
                            </Typography>
                        )}
                    </Box>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            width: 220,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {/* Profile header with user info */}
                    <Box sx={{ px: 2, py: 1 }}>
                        <Typography variant="subtitle1" fontWeight={500}>
                            {currentUser.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {currentUser.email}
                        </Typography>
                        {role === 'teacher' && (
                            <Typography variant="body2" color="text.secondary">
                                {currentUser.department}
                            </Typography>
                        )}
                    </Box>
                    <Divider sx={{ my: 1 }} />

                    {/* Student-specific menu */}
                    {role === 'student' && (
                        <>
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonIcon fontSize="small" />
                                </ListItemIcon>
                                Student Profile
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <SchoolIcon fontSize="small" />
                                </ListItemIcon>
                                My Courses
                            </MenuItem>
                        </>
                    )}

                    {/* Teacher-specific menu */}
                    {role === 'teacher' && (
                        <>
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonIcon fontSize="small" />
                                </ListItemIcon>
                                Teacher Profile
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <SchoolIcon fontSize="small" />
                                </ListItemIcon>
                                My Classes
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <NotificationsIcon fontSize="small" />
                                </ListItemIcon>
                                Teaching Schedule
                            </MenuItem>
                        </>
                    )}

                    {role === 'admin' && (
                        <>
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonIcon fontSize="small" />
                                </ListItemIcon>
                                Admin Profile
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <GroupsIcon fontSize="small" />
                                </ListItemIcon>
                                User Management
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <AssessmentIcon fontSize="small" />
                                </ListItemIcon>
                                System Analytics
                            </MenuItem>
                        </>
                    )}

                    <Divider />

                    {/* Common menu items */}
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;