import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import axios from 'axios';

const Home = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    axios.get(`${process.env.EXAMPLE_REPO_NOTE_TAKING_APP_BACKEND_URL}/notes`)
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Note Taking App</h1>
      <NoteForm fetchNotes={fetchNotes} />
      <NoteList notes={notes} />
    </div>
  );
};

export default Home;