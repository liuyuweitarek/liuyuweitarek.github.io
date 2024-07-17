import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import Image from "@theme/IdealImage";
import UserIcon from "./assets/user-avatar.png"
import JubiIcon from "./assets/jubi.png";
import styles from './ChatBot.module.scss';

export interface ChatBotProps {
  config: ChatBotConfig;
}

export interface ChatBotConfig {
  socket_server: string;
}

interface Message {
    sender: 'user' | 'bot';
    content: string;
    timestamp?: Date | string;
  }

export const ChatBot: FunctionComponent<ChatBotProps> = ({ config 
}) => {
  const { 
    socket_server, 
  } = config;
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const sendMessage = () => {
    if (inputValue.trim() === '' || !socket) return;
  
    const newMessage: Message = { 
      sender: 'user', 
      content: inputValue, 
      timestamp: new Date().toISOString() // Store as ISO string
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    socket.emit('user_uttered', { message: inputValue });
    setInputValue('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    const newSocket = io(socket_server);
    
    newSocket.on('connect', () => {
      console.log('Socket.IO Connected');
    });

    newSocket.on('bot_uttered', (data) => {
        const botMessage: Message = { 
          sender: 'bot', 
          content: data.text, 
          timestamp: new Date().toISOString() // Store as ISO string
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      });

    newSocket.on('disconnect', () => {
      console.log('Socket.IO Disconnected');
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const formatTime = (timestamp?: Date | string): string => {
    if (!timestamp) return '';
    
    let date: Date;
    if (typeof timestamp === 'string') {
      date = new Date(timestamp);
    } else {
      date = timestamp;
    }

    if (isNaN(date.getTime())) {
      return ''; // Return empty string if date is invalid
    }

    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatIcon} onClick={toggleChat}>
        <Image img={JubiIcon} alt="Jubi" className={styles.chatIconImage} />
      </div>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Jubi</h3>
            <button onClick={toggleChat}><span>×</span></button>
          </div>
          <div className={styles.chatMessages}>
          {messages.map((message, index) => (
            <div key={index} className={`${styles.messageContainer} ${styles[message.sender]}`}>
              <div className={styles.avatarWrapper}>
                <Image
                  img={message.sender === 'user' ? UserIcon : JubiIcon}
                  alt={message.sender}
                  className={styles.chatAvatar}
                />
              </div>
              <div className={styles.messageContent}>
                <div className={styles.message}>
                  {message.content}
                </div>
                {message.timestamp && (
                  <div className={styles.messageTime}>
                    {formatTime(message.timestamp)}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};