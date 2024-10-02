import React from 'react';
import LeftCornerBar from './LeftCornerBar';
import profile from './img/profile.jpeg';

const LeftSidebar = () => {
  return (
    <div className="flex h-full bg-gray-900">
      <div className="w-16 bg-gray-900">
        <LeftCornerBar />
      </div>
      <div className="flex flex-col flex-1 p-4 border border-white p-2">
        <div className="pb-4">
          <div className="flex items-center justify-between mb-4 ">
            <div>
              <h2 className="text-lg font-bold text-white ">Recent</h2>
              <p className="text-sm text-gray-400">
                Chat from your friends <span role="img" aria-label="emoji">😘</span>
              </p>
            </div>
            <button className="p-2 bg-gray-600 rounded">
              <i className="fas fa-th text-white"></i>
            </button>
          </div>
          <div className="flex space-x-4">
            <div className="relative">
              <img
                className="w-16 h-16 rounded-lg object-cover"
                src={profile}
                alt="John"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
              <div className="text-white text-center mt-1">John</div>
            </div>
            <div className="relative">
              <img
                className="w-16 h-16 rounded-lg object-cover"
                src={profile}
                alt="Jpny"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 bg-yellow-500 border-2 border-gray-900 rounded-full"></span>
              <div className="text-white text-center mt-1">Jpny</div>
            </div>
            <div className="relative">
              <img
                className="w-16 h-16 rounded-lg object-cover"
                src={profile}
                alt="John Deo"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
              <div className="text-white text-center mt-1">John Deo</div>
            </div>
          </div>
        </div>
        <div className="pt-4 border border-white p-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-white">Chat</h2>
              <p className="text-sm text-gray-400">Start New Conversation</p>
            </div>
            <button className="p-2">
              <i className="fas fa-search text-white"></i>
            </button>
          </div>
          <div className="flex space-x-2 mb-4">
            <button className="flex-1 py-2 text-center bg-gray-700 text-white rounded">Chat</button>
            <button className="flex-1 py-2 text-center bg-gray-700 text-white rounded">Call</button>
            <button className="flex-1 py-2 text-center bg-gray-700 text-white rounded">Contact</button>
          </div>
          <div className="flex space-x-2 mb-4">
            <button className="flex-1 py-2 text-center bg-gray-700 text-white rounded">Direct</button>
            <button className="flex-1 py-2 text-center bg-gray-700 text-white rounded">Group</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full object-cover mr-2"
                  src={profile}
                  alt="Josephin water"
                />
                <div>
                  <div className="text-white">Josephin water</div>
                  <div className="text-sm text-gray-400">Hi, I am Josephin. How ar...</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 text-right">
                <div>22/10/19</div>
                <div className="text-green-500">Seen</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full object-cover mr-2"
                  src={profile}
                  alt="Sufiya Elija"
                />
                <div>
                  <div className="text-white">Sufiya Elija</div>
                  <div className="text-sm text-gray-400">I need job, please help me.</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 text-right">
                <div>15/06/19</div>
                <div className="text-yellow-500">Sending</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full object-cover mr-2"
                  src={profile}
                  alt="Mukrani Pabelo"
                />
                <div>
                  <div className="text-white">Mukrani Pabelo</div>
                  <div className="text-sm text-gray-400">Hi, I am josephin. How are you....</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 text-right">
                <div>04/06/19</div>
                <div className="text-blue-500">Sending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
