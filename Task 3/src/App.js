import React, { useState } from 'react';
import Navbar from './component/Navbar';
import UserCard from './component/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar getUsers={getUsers} />
      <div className="container mx-auto p-4">
        {loading ? (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

