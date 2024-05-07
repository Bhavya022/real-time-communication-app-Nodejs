import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { username, password }); // Make a POST request to /register
      console.log(response.data); // Log the response data (newUser)
      // Handle successful registration, e.g., display a success message to the user, redirect to login page, etc.
      history.push('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
