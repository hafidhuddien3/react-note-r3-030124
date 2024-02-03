import React from 'react';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

import LocaleContext from '../contexts/LocaleContext';
import { add } from '../utils/locale-content';

//addNote({ title, body })
 
function AddPage() {
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext);

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
      <h2 className='h2add'>{add[locale].header}</h2>
      <NoteInput addNote={onAddNoteHandler} locale={locale} />
    </section>
  )
}
 
export default AddPage;