import React from 'react';

const Chat = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white">Chat</h3>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4 w-full">Start New Conversation</button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between text-white">
          <div>Josephin water</div>
          <span className="text-xs text-gray-500">22/10/19</span>
        </div>
        <div className="flex items-center justify-between text-white">
          <div>Sufiya Elija</div>
          <span className="text-xs text-gray-500">15/06/19</span>
        </div>
        <div className="flex items-center justify-between text-white">
          <div>Mukrani Pabelo</div>
          <span className="text-xs text-gray-500">04/06/19</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
