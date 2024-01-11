import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
 
function DetailPageWrapper() {
const navigate = useNavigate();

function onDeleteHandler(id) {    
        deleteNote(id);
        navigate('/');
}

  const { id } = useParams();
  return <DetailPage id={id} onDelete={onDeleteHandler} />;
}

class DetailPage extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        note: getNote(props.id)
      };

      this.onDeleteHandler = this.onDeleteHandler.bind(this);

    }

    onDeleteHandler(id) {
        this.props.onDelete(id);
      }    
   
    render() {
      if (this.state.note === null) {
        return <p>Note is not found!</p>;
      }
   
      return (
        <section>
          <NoteDetail {...this.state.note} onDelete={this.onDeleteHandler}/>
        </section>
      );
    }
  }
 
export default DetailPageWrapper;