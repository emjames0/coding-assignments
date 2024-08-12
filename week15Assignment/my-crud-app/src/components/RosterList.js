import React from 'react';
//below imports the RosterList component 
import './RosterList.css'; 

//below is the component to display a list of team members 
const RosterList = ({ members, onEdit, onDelete }) => {
  return (
    <div className="roster-list">
      <h2>Member List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Tenure</th>
            <th>Goals</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.position}</td>
              <td>{member.tenure}</td>
              <td>{member.goals}</td>
              <td>
                <button className="edit" onClick={() => onEdit(member)}>Edit</button>
                <button className="delete" onClick={() => onDelete(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RosterList;