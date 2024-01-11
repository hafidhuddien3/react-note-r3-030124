import React from 'react';
import { showFormattedDate } from '../utils/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
function NoteItemBody({ id, title, body, createdAt, archived }) {
 return (
   <div className="note-item__content"><Link to={`/notes/${id}`}>
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__body">Body: {body}</p>
     <p className="note-item__date">Date: {showFormattedDate(createdAt)}</p>
     <p className="note-item__body">Archived Status: {archived?"archived":"not yet archived"}</p>
     </Link>
   </div>
 );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  createdAt: PropTypes.string.isRequired, 
  archived: PropTypes.bool.isRequired,
}
 
export default NoteItemBody;