import React from 'react';
import { FaArchive } from 'react-icons/fa';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

 
function ArchiveButton({ id, onArchive }) {
  const { locale } = React.useContext(LocaleContext);

  return <button className='note-item__delete' onClick={() => onArchive(id)}><FaArchive size={20}/>
  {locale=== 'id'?' Arsipkan':' Archive'}</button>
}
 
ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;