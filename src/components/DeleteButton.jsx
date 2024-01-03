import React from 'react';
 
function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete' onClick={() => onDelete(id)}>X</button>
}
 
export default DeleteButton;