import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Avatar } from '@mui/material';

const Messages = () => {
    const messages = [
        { sender: 'Dr. Smith', preview: 'About your assignment question...', time: '10:30 AM' },
        { sender: 'Prof. Johnson', preview: 'Class cancelled tomorrow', time: 'Yesterday' },
        { sender: 'Classmate', preview: 'Study group this weekend?', time: '2 days ago' },
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Messages</Typography>
            <List>
                {messages.map((message, index) => (
                    <ListItem key={index} sx={{ borderBottom: '1px solid #eee' }}>
                        <Avatar sx={{ mr: 2 }}>{message.sender.charAt(0)}</Avatar>
                        <ListItemText
                            primary={message.sender}
                            secondary={message.preview}
                        />
                        <Typography variant="caption">{message.time}</Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Messages;