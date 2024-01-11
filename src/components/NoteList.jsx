import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
 
function NoteList({ notes, onDelete }) {
 return (
  notes.length!=0 ?(
   <div className="notes-list">
     { 
       notes.map((note) => (
         <NoteItem key={note.id} 
         id={note.id}
         onDelete={onDelete}
         {...note} />
       ))
        
     }
   </div>): (<div className=''><h3 className='h3-empty-notes'>Tidak ada catatan</h3></div>)
 );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}
 
export default NoteList;