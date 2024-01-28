import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/InputLogin';
import GuestAccount from '../components/GuestAccount';
import { login } from '../utils/network-data';

 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <br></br>
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
      <GuestAccount login={onLogin} />
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;