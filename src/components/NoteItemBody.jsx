import React from 'react';
import { showFormattedDate } from '../utils/index';
 
function NoteItemBody({ title, body, createdAt, archived }) {
 return (
   <div className="note-item__content">
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__body">Body: {body}</p>
     <p className="note-item__date">Date: {showFormattedDate(createdAt)}</p>
     <p className="note-item__body">Archived Status: {archived?"archived":"not yet archived"}</p>
   </div>
 );
}
 
export default NoteItemBody;