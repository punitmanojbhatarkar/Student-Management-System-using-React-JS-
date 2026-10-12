import React, { useState } from 'react';

const AcademicsManager = () => {
  const [selectedCourse, setSelectedCourse] = useState('DAA');
  
  const courses = [
    { id: 'DAA', name: 'Design Analysis of Algorithms', teacher: 'Mrs. Ritu Dudhmal' },
    { id: 'DL', name: 'Deep Learning and Large Language Models', teacher: 'Mrs. Laxmi Kale' },
    { id: 'AgAI', name: 'Agentic AI Foundation', teacher: 'Mr. Pankaj Vishwakarma' },
    { id: 'FD', name: 'AI-Powered Full Stack Development', teacher: 'Mrs. Aparna Kulkarni' },
    { id: 'MAD', name: 'AI-First Mobile App Development', teacher: 'Mr. Jayant Devare' }
  ];

  // Dummy mock grades for demonstration
  const dummyGrades = [
    { id: 1, name: 'Alice Johnson', assign1: 95, assign2: 90, midterm: 88, final: 92 },
    { id: 2, name: 'Bob Smith', assign1: 70, assign2: 65, midterm: 60, final: 72 },
    { id: 3, name: 'Charlie Davis', assign1: 85, assign2: 80, midterm: 78, final: 82 },
  ];

  const activeCourse = courses.find(c => c.id === selectedCourse);

  return (
    <section>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        
        {/* Sidebar for Course Selection */}
        <div style={{ width: '250px', background: 'white', borderRadius: 'var(--radius-lg)', padding: '1rem', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #edf2f7' }}>My Courses</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {courses.map(course => (
              <li key={course.id}>
                <button 
                  onClick={() => setSelectedCourse(course.id)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', border: 'none',
                    background: selectedCourse === course.id ? 'var(--color-green)' : 'transparent',
                    color: selectedCourse === course.id ? 'white' : '#4a5568',
                    fontWeight: selectedCourse === course.id ? 'bold' : 'normal',
                  }}
                >
                  {course.id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ margin: 0, color: '#2d3748' }}>{activeCourse.name}</h2>
              <p style={{ margin: 0, color: '#718096' }}>Instructor: {activeCourse.teacher}</p>
            </div>
            <button className="btn btn-primary">+ Add Assignment</button>
          </div>

          <table className="prof-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Assignment 1 (100)</th>
                <th>Assignment 2 (100)</th>
                <th>Midterm Exam (100)</th>
                <th>Final Exam (100)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyGrades.map(g => (
                <tr key={g.id} className="prof-row hover-bg">
                  <td style={{ fontWeight: 600 }}>{g.name}</td>
                  <td><input type="number" defaultValue={g.assign1} style={{ width: '60px', padding: '4px', border: '1px solid #cbd5e0', borderRadius: '4px' }}/></td>
                  <td><input type="number" defaultValue={g.assign2} style={{ width: '60px', padding: '4px', border: '1px solid #cbd5e0', borderRadius: '4px' }}/></td>
                  <td><input type="number" defaultValue={g.midterm} style={{ width: '60px', padding: '4px', border: '1px solid #cbd5e0', borderRadius: '4px' }}/></td>
                  <td><input type="number" defaultValue={g.final} style={{ width: '60px', padding: '4px', border: '1px solid #cbd5e0', borderRadius: '4px' }}/></td>
                  <td>
                    <button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.75rem' }}>Save Row</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  );
};

export default AcademicsManager;
