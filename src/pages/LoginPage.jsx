import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/InputLogin';
import GuestAccount from '../components/GuestAccount';
import { login } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import { login as loginContent } from '../utils/locale-content';

 
function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <br></br>
      <h2>{loginContent[locale].h2}</h2>
      <LoginInput login={onLogin} locale={locale} />
      <p>{loginContent[locale].p}<Link to="/register">{loginContent[locale].link}</Link></p>
      <GuestAccount login={onLogin} locale={locale} />
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;