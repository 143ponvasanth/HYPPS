import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';

const Assignments = () => {
    const assignments = [
        { title: 'Math Homework', course: 'Mathematics', due: 'Due Tomorrow', status: 'Pending' },
        { title: 'Programming Project', course: 'Computer Science', due: 'Due in 3 days', status: 'In Progress' },
        { title: 'Physics Lab Report', course: 'Physics', due: 'Due next week', status: 'Completed' },
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Assignments</Typography>
            <List>
                {assignments.map((assignment, index) => (
                    <ListItem key={index} sx={{ borderBottom: '1px solid #eee' }}>
                        <ListItemText
                            primary={assignment.title}
                            secondary={`${assignment.course} • ${assignment.due}`}
                        />
                        <Chip
                            label={assignment.status}
                            color={
                                assignment.status === 'Completed' ? 'success' :
                                    assignment.status === 'In Progress' ? 'warning' : 'error'
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Assignments;