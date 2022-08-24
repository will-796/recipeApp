import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context';
import './style.css';

const Login = () => {
  const { setShowFooter, setShowHeader } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(false);
  const history = useHistory();

  const validateEmail = () => /\S+@\S+\.\S+/.test(email);
  const validatePassword = password.length > +'6';

  useEffect(() => {
    setShowHeader({
      showName: false,
      showSearch: false,
      showProfile: false,
    });
    setShowFooter(false);
  }, []);

  useEffect(() => {
    if (validateEmail() && validatePassword) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [email, password]);

  const handleClick = () => {
    const saveUserLocalStorage = {
      email,
    };

    localStorage.setItem('user', JSON.stringify(saveUserLocalStorage));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');

    history.push('/foods');
  };

  return (
    <div className="Login">
      <label htmlFor="email">
        Usuário
        <input
          id="email"
          type="text"
          data-testid="email-input"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
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
        onClick={ handleClick }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
