import React from 'react';
import PropTypes from 'prop-types';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '', body: '', archived: false, remainingChar: 50,
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onArchivedChangeEventHandler = this.onArchivedChangeEventHandler.bind(this);

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onTitleChangeEventHandler(event) {
        if (event.target.value.length < 51){
          this.setState(() => {
            return {
              title: event.target.value,
              remainingChar:50-event.target.value.length,
            }
          });}
      }
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      
      onArchivedChangeEventHandler(event) {
        this.setState(() => {
          return {
            archived: event.target.value,
          }
        });
      }

      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }

 render() {
   return (
    <form className="note-input" onSubmit={this.onSubmitEventHandler}>
    <input type="text" placeholder={this.props.locale === 'id' ? 'Judul':'Title'} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
    <p>{this.props.locale === 'id' ? 'Karakter sisa: ':'Remaining character: '}{this.state.remainingChar}</p>
    <textarea placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
    
  
         <br /><br />
    <button type="submit">{this.props.locale === 'id' ? 'Tambah':'Add'}</button>
    
     </form>
   )
 }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
 }
 
export default NoteInput;