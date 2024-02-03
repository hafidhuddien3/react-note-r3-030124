import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { detail } from '../utils/locale-content';
 
function DetailPageWrapper() {
const navigate = useNavigate();
const { locale } = React.useContext(LocaleContext);

async function onDeleteHandler(id) {    
  await deleteNote(id);
        navigate('/');
}

  const { id } = useParams();
  return <DetailPage id={id} onDelete={onDeleteHandler} locale={locale} />;
}

class DetailPage extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        note: 0,
        locale: props.locale || 'en',
        notFound:false
      };

      this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    async componentDidMount() {
      const { data } = await getNote(this.props.id);
      
      this.setState(() => {
        return {
          note: data
        }
      })
    }

    async componentDidUpdate(prevProp, prevState) {
      if (prevProp.locale !== this.props.locale) {
        this.setState(() => {
          return { locale:this.props.locale };
        });
      }
    }

    onDeleteHandler(id) {
        this.props.onDelete(id);
      }    
   
    render() {
      if (this.state.note === 0) {
        return (<div className=''><h3 className=''>Loading</h3></div>);
      }
   
      if (this.state.note === null) {
        return <section>
        <br/><h2 className=''>{detail[this.state.locale].notFound}</h2>
        </section>;
      }

      return (
        <section>
          <NoteDetail {...this.state.note} onDelete={this.onDeleteHandler} locale={this.state.locale} />
        </section>
      );
    }
  }
 
export default DetailPageWrapper;