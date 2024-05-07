import React, { useState, useEffect } from 'react';

function VoiceChat() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dummy function to simulate adding a new user
  const addUser = () => {
    setIsLoading(true);
    // Simulate an API request to add a new user
    setTimeout(() => {
      setUsers([...users, { id: users.length + 1, name: newUser }]);
      setNewUser('');
      setIsLoading(false);
    }, 1000); // Simulate a delay of 1 second
  };

  useEffect(() => {
    // Fetch list of users from backend API or WebSocket connection
    // For demonstration, we can initialize with dummy data
    setUsers([
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' }
    ]);
  }, []);

  return (
    <div>
      <h2>Voice Chat</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter username"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={addUser} disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add User'}
        </button>
      </div>
    </div>
  );
}

export default VoiceChat;
