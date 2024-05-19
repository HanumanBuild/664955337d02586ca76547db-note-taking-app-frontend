import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import axios from 'axios';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    const token = localStorage.getItem('token');
    axios.get(`${process.env.NOTE_TAKING_APP_BACKEND_URL}/notes`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <NoteForm fetchNotes={fetchNotes} />
      <NoteList notes={notes} fetchNotes={fetchNotes} />
    </div>
  );
};

export default Dashboard;