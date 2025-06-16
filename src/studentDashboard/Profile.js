import React from 'react';
import { Box, Typography, Avatar, TextField, Button } from '@mui/material';

const Profile = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>Profile</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 600 }}>
                <Avatar sx={{ width: 120, height: 120, mb: 2 }} />
                <TextField fullWidth label="Name" margin="normal" defaultValue="John Doe" />
                <TextField fullWidth label="Email" margin="normal" defaultValue="john@example.com" />
                <TextField fullWidth label="Bio" margin="normal" multiline rows={4} />
                <Button variant="contained" sx={{ mt: 2 }}>Save Changes</Button>
            </Box>
        </Box>
    );
};

export default Profile;