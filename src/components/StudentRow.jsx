import React from 'react';

const StudentRow = ({ student, setEditingStudent, deleteStudent }) => {
  return (
    <tr>
      <td>
        <div style={{fontWeight: 500}}>{student.name}</div>
        <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>{student.id}</div>
      </td>
      <td>{student.email}</td>
      <td>
        <span className="badge badge-blue">{student.major}</span>
      </td>
      <td>{student.enrollmentDate}</td>
      <td>
        <div className="flex gap-2">
          <button 
            className="btn btn-outline" 
            style={{padding: '0.25rem 0.5rem', fontSize: '0.75rem'}}
            onClick={() => setEditingStudent(student)}
          >
            Edit
          </button>
          <button 
            className="btn btn-danger" 
            style={{padding: '0.25rem 0.5rem', fontSize: '0.75rem'}}
            onClick={() => {
              if (window.confirm(`Are you sure you want to remove ${student.name}?`)) {
                deleteStudent(student.id);
              }
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
