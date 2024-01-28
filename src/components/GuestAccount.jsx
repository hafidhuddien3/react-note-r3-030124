import React from 'react';
import PropTypes from 'prop-types';

function GuestAccount({ login }) {
  return (
    <div className="guest"><br/>
      Atau menggunakan akun guest<br/>
      <button
        type="button"
        onClick={() => login({
          email: 'shubuhshubuh3@gmail.com',
          password: 'passwordtamu',
        })}
      >
        Menggunakan Akun Guest
      </button>
    </div>
  );
}

GuestAccount.propTypes = {
  login: PropTypes.func.isRequired,
};

export default GuestAccount;
