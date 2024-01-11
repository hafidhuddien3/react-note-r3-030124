import React from 'react';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
 
function AddPage() {
    const navigate = useNavigate();

  function onAddNoteHandler(note) {
    if (note.title && note.body){
      addNote(note);
      navigate('/');
    }
      else {
        alert("mohon isi Judul dan Body");
      }
  }
 
  return (
    <section>
      <br/>
      <h2 className='h2add'>Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
 
export default AddPage;