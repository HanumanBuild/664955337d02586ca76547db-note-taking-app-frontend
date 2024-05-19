import React, { useState } from 'react';
import axios from 'axios';

const NoteItem = ({ note, fetchNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  const handleUpdate = () => {
    const token = localStorage.getItem('token');
    axios.patch(`${process.env.NOTE_TAKING_APP_BACKEND_URL}/notes/${note._id}`, { content }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        setIsEditing(false);
        fetchNotes();
      })
      .catch(error => console.error('Error updating note:', error));
  };

  const handleDelete = () => {
    const token = localStorage.getItem('token');
    axios.delete(`${process.env.NOTE_TAKING_APP_BACKEND_URL}/notes/${note._id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => fetchNotes())
      .catch(error => console.error('Error deleting note:', error));
  };

  return (
    <li className="mb-2">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white p-2 rounded mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
        </div>
      ) : (
        <div>
          <span>{note.content}</span>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 rounded ml-2">Edit</button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded ml-2">Delete</button>
        </div>
      )}
    </li>
  );
};

export default NoteItem;