import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-lg">UserDatagram</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getUsers}
        >
          Get Users
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
