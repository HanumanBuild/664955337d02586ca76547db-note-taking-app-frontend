import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ fetchNotes }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.EXAMPLE_REPO_NOTE_TAKING_APP_BACKEND_URL}/notes`, { content })
      .then(() => {
        setContent('');
        fetchNotes();
      })
      .catch(error => console.error('Error creating note:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a note..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;