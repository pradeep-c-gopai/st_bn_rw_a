import React, { useState } from 'react';
import './Register.css';
import Navbar from '../Navbar/Navbar';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const data = {
      Firstname: firstName,
      Lastname: lastName,
      phno: phone,
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess('Registration successful!');
        alert('success')
        window.location.href = '/login';
      } else {
        const result = await response.json();
        setError(result.message || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="RegisterDiv">
        <form className="RegisterForm" onSubmit={handleRegister}>
          <div className="RegisterFormHead">
            <h2>Register</h2>
          </div>
          <div className="RegisterInputs">
            <div className="RegisterName">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="RegisterContact">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="RegisterPassword">
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="RegisterButtonDiv">
              <button type="submit" className="RegisterButton">
                Register
              </button>
            </div>
          </div>
          {error && <div className="errorMessage">{error}</div>}
          {success && <div className="successMessage">{success}</div>}
          <div className="alreadyHaveAccountDiv">
            <span>Already have an account? </span><a href="/login">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}
