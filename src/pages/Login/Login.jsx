import React, { useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(false);

  const validateEmail = () => /\S+@\S+\.\S+/.test(email);
  const validatePassword = password.length > +'6';

  useEffect(() => {
    if (validateEmail() && validatePassword) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [email, password]);

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
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !isDisable }
        onClick={ () => {} }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
