import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
 
function NoteItem({ title, body, createdAt, archived, id, onDelete }) {
 return (
   <div className="note-item">
     <NoteItemBody title={title}
          body={body}
          createdAt={createdAt}
          archived={archived}
          id={id}
          />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  createdAt: PropTypes.string.isRequired, 
  archived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
 
export default NoteItem;
