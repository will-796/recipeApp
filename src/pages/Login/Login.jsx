import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="Login">
      <label htmlFor="email">
        <input
          id="email"
          type="text"
          data-testid="email-input"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button type="button" data-testid="login-submit-btn" onClick={ () => {} }>
        Login
      </button>
    </div>
  );
};

export default Login;
