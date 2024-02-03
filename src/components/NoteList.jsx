import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
 
function NoteList({ notes, onDelete, loading, type, onArchived, onUnarchived }) {
  const noNoteMessage=type ? 'Arsip kosong':'Tidak ada catatan';

  if (loading==true) {
    return (<div className=''><h3 className='h3-empty-notes'>Loading</h3></div>);
  }

  else if (notes.length==0){
    return (<div className=''><h3 className='h3-empty-notes'>{noNoteMessage}</h3></div>);}

 else{return(
  <div className="notes-list">
    { 
      notes.map((note) => (
        <NoteItem key={note.id} 
        id={note.id}
        onDelete={onDelete}

        type={type}
        onArchived={onArchived}
        onUnarchived={onUnarchived}
        
        {...note} />
      ))
       
    }
  </div>);}
  
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}
 
export default NoteList;