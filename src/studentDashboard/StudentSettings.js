import React, { useState } from 'react';
import {
    Person as UserIcon,
    Notifications as BellIcon,
    Security as ShieldIcon,
    Palette as PaletteIcon,
    HelpOutline as HelpCircleIcon,
    Email as MailIcon,
    Phone as PhoneIcon
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Button,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Switch,
    Select,
    MenuItem,
    TextareaAutosize,
    useTheme,
    Avatar
} from '@mui/material';

const StudentSettings = () => {
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState('profile');
    const [notifications, setNotifications] = useState({
        classReminders: true,
        newMessages: true,
        assignmentDeadlines: true,
        certificateUpdates: true,
        weeklyDigest: false
    });

    const tabs = [
        { id: 'profile', label: 'Profile', icon: UserIcon },
        { id: 'notifications', label: 'Notifications', icon: BellIcon },
        { id: 'privacy', label: 'Privacy & Security', icon: ShieldIcon },
        { id: 'preferences', label: 'Preferences', icon: PaletteIcon },
        { id: 'help', label: 'Help & Support', icon: HelpCircleIcon }
    ];

    const handleNotificationChange = (key) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const renderProfileTab = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Avatar sx={{
                    width: 96,
                    height: 96,
                    bgcolor: 'primary.main',
                    fontSize: 40
                }}>
                    <UserIcon fontSize="inherit" />
                </Avatar>
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: 'primary.main',
                            '&:hover': { bgcolor: 'primary.dark' }
                        }}
                    >
                        Change Photo
                    </Button>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        JPG, PNG max 2MB
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        defaultValue="Alex"
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        defaultValue="Johnson"
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        defaultValue="alex.johnson@email.com"
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Phone"
                        defaultValue="+1 (555) 123-4567"
                        variant="outlined"
                    />
                </Grid>
            </Grid>

            <TextField
                fullWidth
                label="Bio"
                multiline
                rows={4}
                defaultValue="Passionate learner interested in technology, music, and creative arts. Always looking to expand my skills and connect with amazing teachers."
                variant="outlined"
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: 'primary.main',
                        '&:hover': { bgcolor: 'primary.dark' },
                        px: 4,
                        py: 1.5
                    }}
                >
                    Save Changes
                </Button>
            </Box>
        </Box>
    );

    const renderNotificationsTab = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Email Notifications
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {Object.entries(notifications).map(([key, value]) => (
                        <Card key={key} variant="outlined">
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ textTransform: 'capitalize' }}>
                                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                        </Typography>
                                    }
                                    secondary={
                                        key === 'classReminders' && 'Get notified 30 minutes before class starts' ||
                                        key === 'newMessages' && 'Receive notifications for new chat messages' ||
                                        key === 'assignmentDeadlines' && 'Reminders for upcoming assignment deadlines' ||
                                        key === 'certificateUpdates' && 'Updates on certificate processing and availability' ||
                                        key === 'weeklyDigest' && 'Weekly summary of your learning progress'
                                    }
                                />
                                <Switch
                                    checked={value}
                                    onChange={() => handleNotificationChange(key)}
                                    color="primary"
                                />
                            </ListItem>
                        </Card>
                    ))}
                </List>
            </Box>

            <Box>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Push Notifications
                </Typography>
                <Card variant="outlined">
                    <ListItem>
                        <ListItemText
                            primary="Browser Notifications"
                            secondary="Get instant notifications in your browser"
                        />
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: 'primary.main',
                                '&:hover': { bgcolor: 'primary.dark' }
                            }}
                        >
                            Enable
                        </Button>
                    </ListItem>
                </Card>
            </Box>
        </Box>
    );

    const renderPrivacyTab = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Account Security
                    </Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemText
                                primary="Change Password"
                                secondary="Update your account password"
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: 'primary.main',
                                    '&:hover': { bgcolor: 'primary.dark' }
                                }}
                            >
                                Change
                            </Button>
                        </ListItem>

                        <ListItem sx={{ px: 0 }}>
                            <ListItemText
                                primary="Two-Factor Authentication"
                                secondary="Add an extra layer of security"
                            />
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'primary.main',
                                    borderColor: 'primary.main',
                                    '&:hover': {
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText'
                                    }
                                }}
                            >
                                Enable
                            </Button>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>

            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Privacy Settings
                    </Typography>
                    <ListItem sx={{ px: 0 }}>
                        <ListItemText
                            primary="Profile Visibility"
                            secondary="Control who can see your profile"
                        />
                        <Select
                            defaultValue="Public"
                            size="small"
                            sx={{ minWidth: 120 }}
                        >
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Teachers Only">Teachers Only</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                        </Select>
                    </ListItem>
                </CardContent>
            </Card>

            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Data Management
                    </Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Button variant="text" sx={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                            <ListItemText
                                primary="Download My Data"
                                secondary="Get a copy of all your LearnHub data"
                            />
                        </Button>

                        <Button variant="text" sx={{
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            color: 'error.main',
                            '&:hover': { bgcolor: 'error.light' }
                        }}>
                            <ListItemText
                                primary="Delete Account"
                                secondary="Permanently delete your account and all data"
                                primaryTypographyProps={{ color: 'error.main' }}
                                secondaryTypographyProps={{ color: 'error.main' }}
                            />
                        </Button>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );

    const renderPreferencesTab = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Display Preferences
                    </Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemText
                                primary="Theme"
                                secondary="Choose your preferred theme"
                            />
                            <Select
                                defaultValue="Light"
                                size="small"
                                sx={{ minWidth: 120 }}
                            >
                                <MenuItem value="Light">Light</MenuItem>
                                <MenuItem value="Dark">Dark</MenuItem>
                                <MenuItem value="Auto">Auto</MenuItem>
                            </Select>
                        </ListItem>

                        <ListItem sx={{ px: 0 }}>
                            <ListItemText
                                primary="Language"
                                secondary="Select your preferred language"
                            />
                            <Select
                                defaultValue="English"
                                size="small"
                                sx={{ minWidth: 120 }}
                            >
                                <MenuItem value="English">English</MenuItem>
                                <MenuItem value="Spanish">Spanish</MenuItem>
                                <MenuItem value="French">French</MenuItem>
                                <MenuItem value="German">German</MenuItem>
                            </Select>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>

            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Learning Preferences
                    </Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemText
                                primary="Default Class View"
                                secondary="Choose your preferred class layout"
                            />
                            <Select
                                defaultValue="Grid View"
                                size="small"
                                sx={{ minWidth: 120 }}
                            >
                                <MenuItem value="Grid View">Grid View</MenuItem>
                                <MenuItem value="List View">List View</MenuItem>
                            </Select>
                        </ListItem>

                        <ListItem sx={{ px: 0 }}>
                            <ListItemText
                                primary="Auto-join Classes"
                                secondary="Automatically join scheduled classes"
                            />
                            <Switch color="primary" />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );

    const renderHelpTab = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Contact Support
                    </Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <ListItem sx={{ bgcolor: 'action.hover', borderRadius: 1 }}>
                            <ListItemIcon>
                                <MailIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Email Support"
                                secondary="support@learnhub.com"
                            />
                        </ListItem>

                        <ListItem sx={{ bgcolor: 'action.hover', borderRadius: 1 }}>
                            <ListItemIcon>
                                <PhoneIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Phone Support"
                                secondary="+1 (800) 123-4567"
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>

            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Resources
                    </Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Button variant="text" sx={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                            <ListItemText
                                primary="Getting Started Guide"
                                secondary="Learn how to make the most of LearnHub"
                            />
                        </Button>

                        <Button variant="text" sx={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                            <ListItemText
                                primary="FAQs"
                                secondary="Frequently asked questions and answers"
                            />
                        </Button>

                        <Button variant="text" sx={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                            <ListItemText
                                primary="Video Tutorials"
                                secondary="Watch step-by-step tutorials"
                            />
                        </Button>
                    </List>
                </CardContent>
            </Card>

            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Send Feedback
                    </Typography>
                    <TextareaAutosize
                        minRows={4}
                        placeholder="Tell us about your experience or suggest improvements..."
                        style={{
                            width: '100%',
                            padding: '16px',
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: '12px',
                            marginBottom: '16px',
                            fontFamily: theme.typography.fontFamily,
                            fontSize: '0.875rem'
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: 'primary.main',
                            '&:hover': { bgcolor: 'primary.dark' },
                            px: 4,
                            py: 1.5
                        }}
                    >
                        Send Feedback
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Header */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Settings
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Manage your account preferences and settings
                    </Typography>
                </CardContent>
            </Card>

            {/* Settings Content */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
                {/* Sidebar */}
                <Box sx={{ width: { xs: '100%', lg: '25%' } }}>
                    <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                        <List>
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <ListItem
                                        key={tab.id}
                                        button
                                        onClick={() => setActiveTab(tab.id)}
                                        sx={{
                                            borderRadius: 3,
                                            bgcolor: activeTab === tab.id ? 'primary.main' : 'inherit',
                                            color: activeTab === tab.id ? 'primary.contrastText' : 'text.primary',
                                            '&:hover': {
                                                bgcolor: activeTab === tab.id ? 'primary.dark' : 'action.hover'
                                            }
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: activeTab === tab.id ? 'primary.contrastText' : 'inherit' }}>
                                            <Icon />
                                        </ListItemIcon>
                                        <ListItemText primary={tab.label} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Card>
                </Box>

                {/* Content */}
                <Box sx={{ width: { xs: '100%', lg: '75%' } }}>
                    <Card sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
                        <CardContent>
                            {activeTab === 'profile' && renderProfileTab()}
                            {activeTab === 'notifications' && renderNotificationsTab()}
                            {activeTab === 'privacy' && renderPrivacyTab()}
                            {activeTab === 'preferences' && renderPreferencesTab()}
                            {activeTab === 'help' && renderHelpTab()}
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default StudentSettings;