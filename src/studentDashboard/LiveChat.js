import React, { useState } from 'react';
import {
    Send as SendIcon,
    Message as MessageIcon,
    Person as PersonIcon,
    Phone as PhoneIcon,
    Videocam as VideoIcon,
    Circle as CircleIcon
} from '@mui/icons-material';
import {
    Box,
    Typography,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    Badge,
    Divider,
    TextField,
    IconButton,
    Button,
    useTheme,
    styled
} from '@mui/material';

const LiveChat = () => {
    const theme = useTheme();
    const [selectedChat, setSelectedChat] = useState(1);
    const [newMessage, setNewMessage] = useState('');

    const conversations = [
        {
            id: 1,
            teacher: 'Sarah Johnson',
            className: 'Advanced React Development',
            lastMessage: 'Great question about useEffect!',
            timestamp: '2 min ago',
            unread: 2,
            online: true
        },
        {
            id: 2,
            teacher: 'David Thompson',
            className: 'Guitar Masterclass',
            lastMessage: 'Practice the chord progression we covered today',
            timestamp: '1 hour ago',
            unread: 0,
            online: false
        },
        {
            id: 3,
            teacher: 'Mike Chen',
            className: 'Digital Marketing Mastery',
            lastMessage: 'The assignment deadline is tomorrow',
            timestamp: '3 hours ago',
            unread: 1,
            online: true
        }
    ];

    const messages = [
        {
            id: 1,
            sender: 'teacher',
            message: 'Hi Alex! How are you finding the React hooks lesson?',
            timestamp: '10:30 AM',
            senderName: 'Sarah Johnson'
        },
        {
            id: 2,
            sender: 'student',
            message: 'Hi Sarah! It\'s really helpful. I have a question about useEffect dependencies.',
            timestamp: '10:32 AM',
            senderName: 'You'
        },
        {
            id: 3,
            sender: 'teacher',
            message: 'Great question! The dependency array tells React when to re-run the effect. If you pass an empty array [], it runs only once after the initial render.',
            timestamp: '10:33 AM',
            senderName: 'Sarah Johnson'
        },
        {
            id: 4,
            sender: 'student',
            message: 'That makes sense! So if I want it to run every time a state variable changes, I include that variable in the array?',
            timestamp: '10:35 AM',
            senderName: 'You'
        },
        {
            id: 5,
            sender: 'teacher',
            message: 'Exactly right! You\'re getting it. Try the practice exercise and let me know if you need help.',
            timestamp: '10:36 AM',
            senderName: 'Sarah Johnson'
        }
    ];

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Here you would typically send the message to your backend
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    };

    const selectedConversation = conversations.find(conv => conv.id === selectedChat);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.main,
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '1px solid currentColor',
                content: '""',
            },
        },
    }));

    return (
        <Box sx={{
            height: 'calc(100vh - 8rem)',
            display: 'flex',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
            border: '1px solid',
            borderColor: 'divider'
        }}>
            {/* Chat List Sidebar */}
            <Box sx={{
                width: '33%',
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid',
                borderColor: 'divider'
            }}>
                <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Live Chat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Connect with your teachers
                    </Typography>
                </Box>

                <List sx={{ flex: 1, overflow: 'auto', p: 0 }}>
                    {conversations.map((conversation) => (
                        <ListItem
                            key={conversation.id}
                            onClick={() => setSelectedChat(conversation.id)}
                            sx={{
                                p: 2,
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                                cursor: 'pointer',
                                '&:hover': { bgcolor: 'action.hover' },
                                transition: 'background-color 0.3s ease',
                                bgcolor: selectedChat === conversation.id ? 'primary.light' : 'inherit',
                                borderRight: selectedChat === conversation.id ? `4px solid ${theme.palette.primary.main}` : 'none'
                            }}
                        >
                            <ListItemAvatar>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant={conversation.online ? 'dot' : 'standard'}
                                >
                                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                                        <PersonIcon sx={{ color: 'common.white' }} />
                                    </Avatar>
                                </StyledBadge>
                            </ListItemAvatar>
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle2" noWrap>
                                        {conversation.teacher}
                                    </Typography>
                                    {conversation.unread > 0 && (
                                        <Box sx={{
                                            bgcolor: 'primary.main',
                                            color: 'common.white',
                                            borderRadius: 10,
                                            px: 1,
                                            minWidth: 20,
                                            height: 20,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.75rem'
                                        }}>
                                            {conversation.unread}
                                        </Box>
                                    )}
                                </Box>
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {conversation.className}
                                </Typography>
                                <Typography variant="body2" noWrap sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                                    {conversation.lastMessage}
                                </Typography>
                                <Typography variant="caption" color="text.disabled">
                                    {conversation.timestamp}
                                </Typography>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Chat Content */}
            <Box sx={{
                flex: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {selectedConversation ? (
                    <>
                        {/* Chat Header */}
                        <Box sx={{
                            p: 2,
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant={selectedConversation.online ? 'dot' : 'standard'}
                                >
                                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                                        <PersonIcon sx={{ color: 'common.white' }} />
                                    </Avatar>
                                </StyledBadge>
                                <Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                                        {selectedConversation.teacher}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {selectedConversation.online ? 'Online now' : 'Last seen 2 hours ago'}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <IconButton sx={{ color: 'text.secondary' }}>
                                    <PhoneIcon />
                                </IconButton>
                                <IconButton sx={{ color: 'text.secondary' }}>
                                    <VideoIcon />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Messages */}
                        <Box sx={{
                            flex: 1,
                            overflow: 'auto',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}>
                            {messages.map((message) => (
                                <Box
                                    key={message.id}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: message.sender === 'student' ? 'flex-end' : 'flex-start'
                                    }}
                                >
                                    <Box sx={{
                                        maxWidth: { xs: '80%', md: '60%' },
                                        px: 2,
                                        py: 1,
                                        borderRadius: 4,
                                        bgcolor: message.sender === 'student' ? 'primary.main' : 'action.hover',
                                        color: message.sender === 'student' ? 'common.white' : 'text.primary'
                                    }}>
                                        <Typography variant="body2">{message.message}</Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: 'block',
                                                mt: 0.5,
                                                color: message.sender === 'student' ? 'primary.light' : 'text.secondary'
                                            }}
                                        >
                                            {message.timestamp}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* Message Input */}
                        <Box sx={{
                            p: 2,
                            borderTop: '1px solid',
                            borderColor: 'divider'
                        }}>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <TextField
                                    fullWidth
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Type your message..."
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 4,
                                            bgcolor: 'background.paper'
                                        }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSendMessage}
                                    sx={{
                                        minWidth: 'auto',
                                        px: 2,
                                        borderRadius: 4
                                    }}
                                >
                                    <SendIcon />
                                </Button>
                            </Box>
                        </Box>
                    </>
                ) : (
                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <MessageIcon sx={{
                                fontSize: 48,
                                color: 'action.disabled',
                                mb: 2
                            }} />
                            <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 1 }}>
                                Select a conversation
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Choose a teacher to start chatting
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default LiveChat;