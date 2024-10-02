import React, { useState } from 'react';
import { FaFileAlt, FaBell, FaCog, FaSignOutAlt, FaUser, FaStar } from 'react-icons/fa';
import logo from './img/logo.jpg'; // Logo image
import status from './img/status.png'; // Example status image

const LeftCornerBar = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 p-5 space-y-6 h-full border 2 p-5">
      {/* Chat Application Icon */}
      <div className="text-center mb-4">
        <img
          src={logo}
          alt="Chat Icon"
          className="w-12 h-12 mx-auto mb-2 rounded-full shadow-md cursor-pointer"
          onClick={() => openImageModal(logo)} // Open modal with logo image
        />
        <h6 className="text-white px-2 font-bold text-lg relative group">
          Ananta Network
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-2xl md:text-3xl lg:text-4xl bg-gray-800 text-white p-2 rounded-lg">
              Ananta Network
            </span>
          </span>
        </h6>
      </div>

      {/* User Avatar with hover effect */}
      <div className="relative">
        <button
          className="block"
          onClick={() => openImageModal(status)} // Open modal with status image
        >
          <img
            src={status}
            alt="User Avatar"
            className="w-12 h-12 rounded-full mx-auto shadow-md cursor-pointer transform hover:scale-110 transition-transform"
          />
        </button>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative bg-transparent p-4">
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors duration-300"
              onClick={closeImageModal} // Close modal on click
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.414 6.586a2 2 0 00-2.828 2.828L10.828 10l-1.414 1.414a2 2 0 102.828 2.828L13.414 12l1.414 1.414a2 2 0 102.828-2.828L16.828 10l1.414-1.414a2 2 0 00-2.828-2.828L12 7.172 10.586 5.758a2 2 0 00-2.172-.344l-.656.344a2 2 0 00-.688 2.47l.115.227L10 9.172l-1.768 1.768 1.414 1.414L11.414 10l1.414-1.414L10 7.172l-1.768 1.768-1.414-1.414L9.172 5.758a2 2 0 00-.227-.115l-.227-.115a2 2 0 00-2.47.688l-.344.656a2 2 0 00.344 2.172L7.172 12l1.414 1.414a2 2 0 002.828 0l1.414-1.414 1.414 1.414a2 2 0 002.828-2.828L13.414 6.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Enlarged View"
              className="max-w-full max-h-screen object-contain" // Adjust to fit within the screen
            />
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="space-y-4">
        <button className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <FaStar className="text-white text-xl" />
          <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Favorites</span>
        </button>
        <button className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <FaFileAlt className="text-white text-xl" />
          <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Documents</span>
        </button>
        <button className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <FaUser className="text-white text-xl" />
          <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Contacts</span>
        </button>
        <button className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <FaBell className="text-white text-xl" />
          <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Notifications</span>
        </button>
        <button className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <FaCog className="text-white text-xl" />
          <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Settings</span>
        </button>
        <button className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <FaSignOutAlt className="text-white text-xl" />
          <span className="absolute left-full ml-3 bg-gray-800 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default LeftCornerBar;
