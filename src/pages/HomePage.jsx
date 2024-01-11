import React from 'react';
import NoteList from '../components/NoteList';
import { deleteNote, getAllNotes } from '../utils/local-data';
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
      notes: getAllNotes(),
      keyword: props.defaultKeyword || '',
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
 
  onDeleteHandler(id) {
    deleteNote(id);
 
    this.setState(() => {
      return {
        notes: getAllNotes(),
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