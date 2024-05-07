import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import axios from 'axios'; // Import Axios library

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Get the history object from React Router

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { username, password }); // Make a POST request to /login
      console.log(response.data); // Log the response data (accessToken)
      // Handle successful login, e.g., store accessToken in localStorage
      localStorage.setItem('accessToken', response.data.accessToken);
      // Redirect to another page
      history.push('/Home');
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
