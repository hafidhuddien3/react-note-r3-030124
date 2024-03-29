import React from 'react';
import NoteList from '../components/NoteList';
import { deleteNote, getActiveNotes, archiveNote } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { home } from '../utils/locale-content';
import { Link } from 'react-router-dom'; 

function HomePageWrapper() {
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
    this.onArchived = this.onArchived.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
 
  async componentDidMount() {
    const { data } = await getActiveNotes();

    
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
 
    const { data  } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data,
      }
    });
  }

  async onArchived(id) {
    await archiveNote(id);
 
    const { data  } = await getActiveNotes();
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
        <h2>{home[this.state.locale].header}</h2>
        <Link to={`/archived`}><button className='archive-page-button'>{home[this.state.locale].archived}</button></Link>
        <NoteList notes={notes} onDelete={this.onDeleteHandler} loading={this.state.loading}
        onArchived={this.onArchived}/>
      </section>
    )
  }
}
 
export default HomePageWrapper;