import React, { useState, useEffect } from 'react';

//component for managing and editing member details
const MemberForm = ({ currentMember, onSave }) => {
  const [member, setMember] = useState({ name: '', position: '', tenure: '', goals: '' });

//below is the effect to update the form when the currentMember prop changes
  useEffect(() => {
    if (currentMember) {
      setMember(currentMember);
    } else {
      setMember({ name: '', position: '', tenure: '', goals: ''});
    }
  }, [currentMember]);

//below is a function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

//below is a function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(member);
    clearForm();
  };

  //below resets the form fields to empty values upon submission
  const clearForm = () => {
    setMember({ name: '', position: '', tenure: '', goals: ''});
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{member.id ? 'Edit Member' : 'Add Member'}</h2>
      <input
        type="text"
        name="name"
        value={member.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="position"
        value={member.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="text"
        name="tenure"
        value={member.tenure}
        onChange={handleChange}
        placeholder="Years With Team"
        required
      />
      <input
        type="text"
        name="goals"
        value={member.goals}
        onChange={handleChange}
        placeholder="Goals"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default MemberForm;