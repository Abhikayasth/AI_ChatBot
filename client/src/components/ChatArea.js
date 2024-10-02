import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const ChatArea = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      socket.emit('sendMessage', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full text-white">
      <div className="flex items-center justify-between mb-4 p-4 bg-gray-800 rounded">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-2" src="https://via.placeholder.com/40" alt="Josephin water" />
          <div>
            <div className="font-bold">Josephin water</div>
            <div className="text-sm text-green-500">Active</div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-gray-600 p-2 rounded-full mx-1">
            <i className="fas fa-phone"></i>
          </button>
          <button className="bg-gray-600 p-2 rounded-full mx-1">
            <i className="fas fa-video"></i>
          </button>
          <button className="bg-gray-600 p-2 rounded-full mx-1">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-800 p-4 rounded mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <div className="text-sm text-gray-400">01:35 AM</div>
            <div className="bg-blue-500 text-white p-2 rounded">{message}</div>
          </div>
        ))}
      </div>
      <div className="p-2 flex items-center">
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-600 text-white"
          placeholder="Write your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white py-2 px-4 rounded ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
