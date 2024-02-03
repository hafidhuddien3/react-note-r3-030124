import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import UnarchiveButton from './UnarchiveButton';
import PropTypes from 'prop-types';
 
function NoteItem({ title, body, createdAt, archived, id, onDelete, 
  type,
  onArchived,
  onUnarchived

}) {
 return (
   <div className="note-item">
     <NoteItemBody title={title}
          body={body}
          createdAt={createdAt}
          archived={archived}
          id={id}
          />
{type?
<UnarchiveButton id={id} onUnarchive={onUnarchived} />:
<ArchiveButton id={id} onArchive={onArchived} />}
          <br/>
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  createdAt: PropTypes.string.isRequired, 
  archived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  type: PropTypes.string,
  onArchived: PropTypes.func,
  onUnarchived: PropTypes.func
};
 
export default NoteItem;
