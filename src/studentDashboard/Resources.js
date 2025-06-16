import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Folder as FolderIcon, GetApp as DownloadIcon } from '@mui/icons-material';

const Resources = () => {
    const resources = [
        { name: 'Mathematics Textbook', type: 'PDF', size: '5.2 MB' },
        { name: 'Programming Exercises', type: 'ZIP', size: '2.1 MB' },
        { name: 'Physics Formulas', type: 'DOC', size: '1.5 MB' },
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Resources</Typography>
            <List>
                {resources.map((resource, index) => (
                    <ListItem key={index} sx={{ borderBottom: '1px solid #eee' }}>
                        <FolderIcon color="primary" sx={{ mr: 2 }} />
                        <ListItemText
                            primary={resource.name}
                            secondary={`${resource.type} • ${resource.size}`}
                        />
                        <IconButton>
                            <DownloadIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Resources;