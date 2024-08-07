import React, { useState, useEffect } from 'react';

const MemberForm = ({ currentMember, onSave }) => {
  const [member, setMember] = useState({ name: '', position: '', tenure: '', goals: '' });

  useEffect(() => {
    if (currentMember) {
      setMember(currentMember);
    } else {
      setMember({ name: '', position: '', tenure: '', goals: ''});
    }
  }, [currentMember]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(member);
    clearForm();
  };

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