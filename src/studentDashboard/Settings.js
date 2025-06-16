import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Switch } from '@mui/material';

const Settings = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>Settings</Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Notifications" secondary="Receive email notifications" />
                    <Switch defaultChecked />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Dark Mode" secondary="Switch to dark theme" />
                    <Switch />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Language" secondary="English" />
                </ListItem>
            </List>
        </Box>
    );
};

export default Settings;