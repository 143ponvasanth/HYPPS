import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Logout = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Typography variant="h4" gutterBottom>Are you sure you want to logout?</Typography>
            <Button variant="contained" color="error" size="large">
                Logout
            </Button>
        </Box>
    );
};

export default Logout;