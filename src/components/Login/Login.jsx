import React, { useState } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        sessionStorage.setItem('token', result.token);
        setSuccess('Login successful!');
        alert('Login successful!');
        window.location.href = '/';
      } else {
        const result = await response.json();
        setError(result.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="LoginDiv">
        <form className="LoginForm" onSubmit={handleLogin}>
          <div className="LoginHeadDiv">
            <h2 className="LoginFormHead">Login</h2>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="loginbutton">Login</button>
          </div>
          {error && <div className="errorMessage">{error}</div>}
          {success && <div className="successMessage">{success}</div>}
          <div className="SignupLink">
            Don't have an account? <a href="/register">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
