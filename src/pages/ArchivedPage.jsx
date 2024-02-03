import React from 'react';
import NoteList from '../components/NoteList';
import { deleteNote, getArchivedNotes, unarchiveNote } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { archived } from '../utils/locale-content';
 
function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const { locale } = React.useContext(LocaleContext);
  
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} locale={locale} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      notes: [],
      keyword: props.defaultKeyword || '',
      locale: 'en' ,
      loading: true,
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onUnarchived = this.onUnarchived.bind(this);
  }
 
  async componentDidMount() {
    const { data } = await getArchivedNotes();

    
    this.setState(() => {
      return {
        notes: data,
        locale:this.props.locale,
        loading: false
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

  async onDeleteHandler(id) {
    await deleteNote(id);
 
    const { data  } = await getArchivedNotes();
    this.setState(() => {
      return {
        notes: data,
      }
    });
  }

  async onUnarchived(id) {
    await unarchiveNote(id);
 
    const { data  } = await getArchivedNotes();
    this.setState(() => {
      return {
        notes: data,
      }
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }
 
  render() {

    const notes = this.state.notes.filter((note) => {
      if (note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) || 
      note.body.toLowerCase().includes(this.state.keyword.toLowerCase()))
      {return note;}
    });

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} 
        locale={this.state.locale} />
        <h2>{archived[this.state.locale].header}</h2>
        <NoteList notes={notes} onDelete={this.onDeleteHandler} loading={this.state.loading} type='archived'
        onUnarchived={this.onUnarchived}
        />
      </section>
    )
  }
}
 
export default ArchivedPageWrapper;