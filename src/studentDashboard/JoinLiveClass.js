import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const JoinLiveClass = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>Join Live Class</Typography>
            <Box sx={{ maxWidth: 500 }}>
                <TextField
                    fullWidth
                    label="Class Code"
                    variant="outlined"
                    margin="normal"
                />
                <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                >
                    Join Class
                </Button>
            </Box>
        </Box>
    );
};

export default JoinLiveClass;