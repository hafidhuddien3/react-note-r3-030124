import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete }) {
 return (
   <div className="note-list">
     { notes.length!=0?
       notes.map((note) => (
         <NoteItem key={note.id} 
         id={note.id}
         onDelete={onDelete}
         {...note} />
       )):
       <><br/><h3>Tidak ada catatan</h3></>
        
     }
   </div>
 );
}
 
export default NoteList;