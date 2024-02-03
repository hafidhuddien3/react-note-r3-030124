import React from 'react';
import useInput from '../hooks/customHooks';
import PropTypes from 'prop-types';

function InputLogin({login, locale}) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();
 
    login({
      email,
      password
    });
  }

  return (
    <form onSubmit={onSubmitHandler} className="input-login">
      <label htmlFor="email">Email</label>
      <input className="inputLogin" type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">{locale === 'id' ? 'kata sandi' : 'Password'}</label>
      <input className="inputLogin" type="password" id="password" value={password} onChange={onPasswordChange} />
      <button>{locale === 'id' ? 'Masuk' : 'Log in'}</button>
    </form>
  );
}

InputLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

export default InputLogin;