import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    contrasena: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3040/session/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log(data);
      onLogin(); 
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          {error}
        </div>
      )}

      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="contrasena" onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
