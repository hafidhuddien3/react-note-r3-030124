import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/index';
import NoteInput from './NoteInput'; 

class NoteApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getInitialData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }

 onAddNoteHandler({ title, body, archived }) {
  if (title && body){
  this.setState((prevState) => {
    return {
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date(),
          archived:archived=="true"?true:false,
        }
      ]
    }
  });}
  else {
    alert("mohon isi Judul dan Body");
  }
}
 
 render() {
   return (
     <div className="note-app">
       <h1>Aplikasi Catatan</h1>
       <h2>Tambah Catatan</h2>
       <NoteInput addNote={this.onAddNoteHandler} />
       <h2>Daftar Catatan</h2>
       <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
     </div>
   );
 }
}
 
export default NoteApp;
