import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
 
function NoteItem({ title, body, createdAt, archived, id, onDelete }) {
 return (
   <div className="note-item">
     <NoteItemBody title={title}
          body={body}
          createdAt={createdAt}
          archived={archived}
          />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}

NoteItem.propTypes = {
}
 
export default NoteItem;
