import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
 
function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete' onClick={() => onDelete(id)}><FaTrashAlt size={20}/></button>
}
 
DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;