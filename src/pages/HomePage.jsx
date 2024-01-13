import React from 'react';
import NoteList from '../components/NoteList';
import { deleteNote, getActiveNotes } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
 
function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      notes: [],
      keyword: props.defaultKeyword || '',
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
 
  async componentDidMount() {
    const { data } = await getActiveNotes();
    
    this.setState(() => {
      return {
        notes: data
      }
    })
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
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <h2>Daftar Catatan</h2>
        <NoteList notes={notes} onDelete={this.onDeleteHandler} />
      </section>
    )
  }
}
 
export default HomePageWrapper;