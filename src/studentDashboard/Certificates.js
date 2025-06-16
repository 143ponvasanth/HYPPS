import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const Certificates = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>Certificates</Typography>
            <Card sx={{ maxWidth: 600, mb: 2 }}>
                <CardContent>
                    <Typography variant="h6">Mathematics Course Completion</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Awarded on May 15, 2023
                    </Typography>
                    <Button variant="outlined">Download Certificate</Button>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <Typography variant="h6">Computer Science Fundamentals</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Awarded on April 30, 2023
                    </Typography>
                    <Button variant="outlined">Download Certificate</Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Certificates;