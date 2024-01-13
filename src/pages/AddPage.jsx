import React from 'react';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

//addNote({ title, body })
 
function AddPage() {
    const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    if (note.title && note.body){
      await addNote(note);
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