import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, fetchNotes }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Notes</h2>
      <ul>
        {notes.map(note => (
          <NoteItem key={note._id} note={note} fetchNotes={fetchNotes} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;