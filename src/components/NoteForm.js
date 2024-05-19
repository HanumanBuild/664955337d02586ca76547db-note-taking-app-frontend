import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ fetchNotes }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    axios.post(`${process.env.NOTE_TAKING_APP_BACKEND_URL}/notes`, { content }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        setContent('');
        fetchNotes();
      })
      .catch(error => console.error('Error creating note:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a note..."
        className="w-full p-2 border border-gray-300 rounded mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Note</button>
    </form>
  );
};

export default NoteForm;