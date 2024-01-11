import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import { showFormattedDate } from '../utils/index';

function NoteDetail({ title, body, createdAt, archived, id, onDelete }) {
  return (
    <div className='NoteDetail'>
      <h2>{title}</h2>
      <p>&nbsp;&nbsp;&nbsp;{body}</p>
      <br />
      <p>createdAt: {showFormattedDate(createdAt)}</p>
      <br />
      <p>Archived Status: {archived?"archived":"not yet archived"}</p>
      <br />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  createdAt: PropTypes.string.isRequired, 
  archived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
