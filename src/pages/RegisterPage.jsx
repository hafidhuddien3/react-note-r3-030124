import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import { register as registerContent } from '../utils/locale-content';
 
function RegisterPage() {
    const navigate = useNavigate();

    const { locale } = React.useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
        navigate('/');
      }
  }
 
  return (
    <section className='register-page'>
      <br></br>
      <h2>{ registerContent[locale].h2 }</h2>
      <RegisterInput register={onRegisterHandler} locale={locale} />
      <p>{ registerContent[locale].p }<Link to="/">{ registerContent[locale].link }</Link></p>
    </section>
  )
}
 
export default RegisterPage;