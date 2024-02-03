import React from 'react';
import PropTypes from 'prop-types';
 
function SearchBar({ keyword, keywordChange, locale }) {
  return (<div className="search-bar">
    <input
      type="text"
      placeholder={locale === 'id' ? 'Cari judul atau body' : 'Search the title or body'}
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)} /></div>
  )
}
 
SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}
 
export default SearchBar;