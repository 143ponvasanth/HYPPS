import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ClassRecordings = () => {
    const recordings = [
        { title: 'Mathematics - Linear Algebra', date: 'May 15, 2023', duration: '1h 25m' },
        { title: 'Computer Science - Data Structures', date: 'May 10, 2023', duration: '1h 10m' },
        { title: 'Physics - Quantum Mechanics', date: 'May 5, 2023', duration: '1h 40m' },
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Class Recordings</Typography>
            <List>
                {recordings.map((recording, index) => (
                    <ListItem key={index} sx={{ borderBottom: '1px solid #eee' }}>
                        <ListItemText
                            primary={recording.title}
                            secondary={`${recording.date} • ${recording.duration}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ClassRecordings;