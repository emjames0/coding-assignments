import React, { useState, useEffect } from 'react';
import RosterList from './components/RosterList';
import MemberForm from './components/MemberForm';
import './App.css'; // Assuming you have some basic styling

const API_URL = 'https://66b3ee979f9169621ea16d29.mockapi.io/member';

const App = () => {
  // State to hold the list of team members
  const [members, setMembers] = useState([]);
  // State to handle the form input
  const [currentMember, setCurrentMember] = useState(null);

  // Fetch members from the API
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  // Add or update a member
  const handleSave = async (member) => {
    try {
      if (member.id) {
        // Update existing member
        await fetch(`${API_URL}/${member.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(member),
        });
        setMembers(members.map(m => (m.id === member.id ? member : m)));
      } else {
        // Add new member
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(member),
        });
        const newMember = await response.json();
        setMembers([...members, newMember]);
      }
      setCurrentMember(null); // Clear form
    } catch (error) {
      console.error('Error saving member:', error);
    }
  };

  // Delete a member
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setMembers(members.filter(m => m.id !== id));
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  return (
    <div className="App">
      <h1>YVC Team Roster</h1>
      <MemberForm currentMember={currentMember} onSave={handleSave} />
      <RosterList members={members} onEdit={setCurrentMember} onDelete={handleDelete} />
    </div>
  );
};

export default App;