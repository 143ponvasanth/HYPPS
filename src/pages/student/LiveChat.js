import React, { useState } from 'react';
import { Send, Paperclip, Smile, Users } from 'lucide-react';
import './LiveChat.css';

const LiveChat = () => {
    const [message, setMessage] = useState('');
    const [selectedChat, setSelectedChat] = useState(1);

    const chats = [
        { id: 1, name: 'Mathematics Class', lastMessage: 'Thanks for the explanation!', time: '2m ago', unread: 2 },
        { id: 2, name: 'Physics Study Group', lastMessage: 'See you tomorrow for the lab', time: '5m ago', unread: 0 },
        { id: 3, name: 'Dr. Smith', lastMessage: 'Your assignment looks great', time: '1h ago', unread: 1 },
    ];

    const messages = [
        { id: 1, sender: 'Dr. Smith', content: 'Good afternoon everyone! Ready for today\'s lesson?', time: '2:00 PM', isOwn: false },
        { id: 2, sender: 'You', content: 'Yes, I\'m ready!', time: '2:01 PM', isOwn: true },
        { id: 3, sender: 'Alice', content: 'I have a question about yesterday\'s homework.', time: '2:02 PM', isOwn: false },
        { id: 4, sender: 'Dr. Smith', content: 'Of course! What would you like to know?', time: '2:03 PM', isOwn: false },
    ];

    const handleSendMessage = () => {
        if (message.trim()) {
            // Add message logic here
            setMessage('');
        }
    };

    return (
        <div className="livechat-container">
            {/* Chat List */}
            <div className="livechat-sidebar">
                <div className="livechat-sidebar-header">
                    <h2 className="livechat-sidebar-title">Live Chat</h2>
                </div>

                <div className="livechat-chat-list">
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => setSelectedChat(chat.id)}
                            className={`livechat-chat-item ${selectedChat === chat.id ? 'livechat-chat-item-selected' : ''}`}
                        >
                            <div className="livechat-chat-header">
                                <h3 className="livechat-chat-name">{chat.name}</h3>
                                <div className="livechat-chat-meta">
                                    <span className="livechat-chat-time">{chat.time}</span>
                                    {chat.unread > 0 && (
                                        <span className="livechat-unread-badge">
                                            {chat.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <p className="livechat-chat-preview">{chat.lastMessage}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Messages */}
            <div className="livechat-main">
                {/* Chat Header */}
                <div className="livechat-header">
                    <div className="livechat-header-info">
                        <h3 className="livechat-header-title">Mathematics Class</h3>
                        <div className="livechat-header-members">
                            <Users className="livechat-members-icon" />
                            <span>15 members</span>
                        </div>
                    </div>
                    <div className="livechat-status-indicator"></div>
                </div>

                {/* Messages */}
                <div className="livechat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`livechat-message-container ${msg.isOwn ? 'livechat-message-own' : 'livechat-message-other'}`}>
                            <div className={`livechat-message ${msg.isOwn ? 'livechat-message-own-style' : 'livechat-message-other-style'}`}>
                                {!msg.isOwn && (
                                    <p className="livechat-message-sender">{msg.sender}</p>
                                )}
                                <p className="livechat-message-content">{msg.content}</p>
                                <p className={`livechat-message-time ${msg.isOwn ? 'livechat-message-time-own' : 'livechat-message-time-other'}`}>
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="livechat-input-area">
                    <div className="livechat-input-container">
                        <button className="livechat-attachment-button">
                            <Paperclip className="livechat-icon" />
                        </button>
                        <div className="livechat-input-wrapper">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="livechat-input"
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button className="livechat-emoji-button">
                                <Smile className="livechat-icon-sm" />
                            </button>
                        </div>
                        <button
                            onClick={handleSendMessage}
                            className="livechat-send-button"
                        >
                            <Send className="livechat-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveChat;