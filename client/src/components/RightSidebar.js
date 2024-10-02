import React from 'react';

const RightSidebar = () => {
  return (
    <div className="bg-gray-800 h-full p-4">
      <div className="flex flex-col space-y-4">
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Files</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Notes</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Todo</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Reminder</button>
      </div>
    </div>
  );
};

export default RightSidebar;
