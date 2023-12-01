import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    adminPassword: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleCreateUser = async () => {
    try {
      const response = await fetch('http://localhost:3040/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Error creating user');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error creating user:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="add-formR">
      {error && (
        <div className="form-errorR">
          {error}
        </div>
      )}

      <h1>Registration</h1>
      <form>
        <label className="form-labelR">
          Name:
          <input type="text" name="nombre" className="form-inputR" onChange={handleChange} />
        </label>
        <br />
        <label className="form-labelR">
          Email:
          <input type="email" name="email" className="form-inputR" onChange={handleChange} />
        </label>
        <br />
        <label className="form-labelR">
          Password:
          <input type="password" name="contrasena" className="form-inputR" onChange={handleChange} />
        </label>
        <br />
        <label className="form-labelR">
          Admin Password (Leave blank for regular user):
          <input type="password" name="adminPassword" className="form-inputR" onChange={handleChange} />
        </label>
        <br />
        <button type="button" className="form-buttonR" onClick={handleCreateUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default Registration;

