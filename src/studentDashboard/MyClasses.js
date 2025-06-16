import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const MyClasses = () => {
    const classes = [
        { name: 'Mathematics 101', instructor: 'Dr. Smith', time: 'Mon/Wed 10:00 AM' },
        { name: 'Computer Science', instructor: 'Prof. Johnson', time: 'Tue/Thu 2:00 PM' },
        { name: 'Physics', instructor: 'Dr. Williams', time: 'Fri 11:00 AM' },
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>My Classes</Typography>
            <List>
                {classes.map((cls, index) => (
                    <ListItem key={index} sx={{ borderBottom: '1px solid #eee' }}>
                        <ListItemText
                            primary={cls.name}
                            secondary={`${cls.instructor} • ${cls.time}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default MyClasses;