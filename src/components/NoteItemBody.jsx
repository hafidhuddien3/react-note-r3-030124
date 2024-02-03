import React from 'react';
import { showFormattedDate } from '../utils/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
 
function NoteItemBody({ id, title, body, createdAt, archived }) {
  const { locale } = React.useContext(LocaleContext);

 return (
   <div className="note-item__content"><Link to={`/notes/${id}`}>
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__body">Body: {body}</p>
     <p className="note-item__date"></p>
     <p className="note-item__date">{locale=== 'id'?'Tanggal: ':'Date: '}{showFormattedDate(createdAt,locale)}</p>
     <p className="note-item__body">{locale=== 'id'?'Status Diarsipkan: ':'Archived Status: '}
     {locale==='id'? archived? "diarsipkan":"tidak diarsipkan" : archived?"archived":"not yet archived"}</p>
     </Link>
   </div>
 );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  createdAt: PropTypes.string.isRequired, 
  archived: PropTypes.bool.isRequired,
}
 
export default NoteItemBody;