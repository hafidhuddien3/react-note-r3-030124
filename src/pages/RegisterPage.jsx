import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
 
function RegisterPage() {
    const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
        navigate('/');
      }
  }
 
  return (
    <section className='register-page'>
      <br></br>
      <h2>Nggak perlu serius ya isinya...</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>Kembali ke <Link to="/">Masuk</Link></p>
    </section>
  )
}
 
export default RegisterPage;