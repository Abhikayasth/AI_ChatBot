import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full text-white">
      <div className="flex items-center p-4 border-b border-gray-700">
        <div className="flex-1">
          <h2 className="text-lg font-bold">Recent</h2>
          <p className="text-sm">Chat from your friends <span role="img" aria-label="emoji">😘</span></p>
        </div>
        <button className="p-2 bg-gray-600 rounded">
          <i className="fas fa-th"></i>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <img className="w-10 h-10 rounded-full mr-2" src="https://via.placeholder.com/40" alt="John" />
            <div>John</div>
          </div>
          <div className="flex items-center mb-2">
            <img className="w-10 h-10 rounded-full mr-2" src="https://via.placeholder.com/40" alt="John Deo" />
            <div>John Deo</div>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-2" src="https://via.placeholder.com/40" alt="John" />
            <div>John</div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Chat</h3>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4 w-full">Start New Conversation</button>
          <div>
            <div className="flex items-center mb-2">
              <div className="flex-1">Josephin water</div>
              <span className="text-xs text-gray-500">22/10/19</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="flex-1">Sufiya Elija</div>
              <span className="text-xs text-gray-500">15/06/19</span>
            </div>
            <div className="flex items-center">
              <div className="flex-1">Mukrani Pabelo</div>
              <span className="text-xs text-gray-500">04/06/19</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
