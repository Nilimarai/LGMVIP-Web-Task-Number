import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={user.avatar} alt={user.first_name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {user.first_name} {user.last_name}
        </div>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
