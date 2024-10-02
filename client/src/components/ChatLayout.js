import React from 'react';
import LeftSidebar from './LeftSidebar';
import ChatArea from './ChatArea';
import RightSidebar from './RightSidebar';

const ChatLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-800 flex">
        <LeftSidebar />
      </div>
      <div className="w-2/4 bg-gray-700 p-4 flex flex-col">
        <ChatArea />
      </div>
      <div className="w-1/4 bg-gray-800">
        <RightSidebar />
      </div>
    </div>
  );
};

export default ChatLayout;
