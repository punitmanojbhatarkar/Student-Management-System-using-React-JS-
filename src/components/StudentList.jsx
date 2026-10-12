import React from 'react';
import StudentRow from './StudentRow';

const StudentList = ({ students, setEditingStudent, deleteStudent }) => {
  return (
    <div className="glass-panel">
      <div className="flex justify-between items-center mb-6">
        <h2>Enrolled Students</h2>
        <span className="badge badge-blue">{students.length} Total</span>
      </div>

      {students.length === 0 ? (
        <div className="text-center" style={{padding: '3rem 1rem', color: 'var(--text-muted)'}}>
          <svg style={{width: '3rem', height: '3rem', margin: '0 auto 1rem', opacity: 0.5}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <p>No students enrolled yet. Add a student to get started.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Email</th>
                <th>Major</th>
                <th>Enrolled</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <StudentRow 
                  key={student.id} 
                  student={student} 
                  setEditingStudent={setEditingStudent}
                  deleteStudent={deleteStudent}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;
