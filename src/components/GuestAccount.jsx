import React from 'react';
import PropTypes from 'prop-types';

function GuestAccount({ login, locale }) {
  return (
    <div className="guest"><br/>
      {locale === 'id' ? 'Atau menggunakan akun guest':'Or use a guest account'}<br/>
      <button
        type="button"
        onClick={() => login({
          email: 'shubuhshubuh3@gmail.com',
          password: 'passwordtamu',
        })}
      >
        {locale === 'id' ? 'Menggunakan Akun Guest' : 'Using a Guest Account'}
      </button>
    </div>
  );
}

GuestAccount.propTypes = {
  login: PropTypes.func.isRequired,
};

export default GuestAccount;
