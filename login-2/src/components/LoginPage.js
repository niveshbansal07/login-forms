import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, ArrowRight } from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Handle login logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-header">USER LOGIN</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <div className="input-wrapper">
              <User className="input-icon left-icon" size={20} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="login-input"
                aria-label="Username"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
                aria-label="Password"
                required
              />
              <Lock className="input-icon right-icon" size={20} />
            </div>
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        <div className="signup-link">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="link-text">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 