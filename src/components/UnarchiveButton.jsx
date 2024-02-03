import React from 'react';
import { FaUpload } from 'react-icons/fa';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
 
function UnarchiveButton({ id, onUnarchive }) {
  const { locale } = React.useContext(LocaleContext);

  return <button className='note-item__delete' onClick={() => onUnarchive(id)}><FaUpload size={20}/>
  {locale=== 'id'?' Batalkan pengarsipan':' Unarchive'}</button>
}
 
UnarchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveButton;