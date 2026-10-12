import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown, Edit2, Trash2, AlertCircle } from 'lucide-react';
import { CharacterAvatar } from '../utils/avatars.jsx';
import { SparkleStar, DoodleBadge } from './Doodles';
import { fireConfetti } from '../utils/confetti';

const StudentDirectory = ({ students, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  // Sort and Filter logic
  const processedStudents = useMemo(() => {
    let result = [...students];
    
    if (searchTerm) {
      result = result.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.major.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [students, searchTerm, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  // The row background color depends on status (Active = Green, Grad = Yellow, Probation = Red)
  const getRowClass = (status) => {
    if (status === 'Probation') return 'red';
    if (status === 'Graduated') return 'yellow';
    return 'green';
  };

  // The progress bar color depends on Risk (Low = Green, Med = Yellow, High = Red)
  const getProgressClass = (risk) => {
    if (risk === 'High') return 'red';
    if (risk === 'Medium') return 'yellow';
    return 'green';
  };

  return (
    <section>
      <div className="proficiency-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <h2>Student Information System</h2>
          <DoodleBadge variant="purple" icon="✨" rotation="-1.5deg">
            {processedStudents.length} Active Records
          </DoodleBadge>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div className="search-bar" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <Search size={16} color="#a0aec0" />
            <input type="text" placeholder="Search by name, email, major..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
        </div>
      </div>

      <table className="prof-table">
        <thead>
          <tr>
            <th className="cursor-pointer" onClick={() => requestSort('name')}>Student Profile <ArrowUpDown size={10} style={{display: 'inline'}} /></th>
            <th className="cursor-pointer" onClick={() => requestSort('major')}>Major <ArrowUpDown size={10} style={{display: 'inline'}} /></th>
            <th className="cursor-pointer" onClick={() => requestSort('gpa')}>GPA / Academic Standing <ArrowUpDown size={10} style={{display: 'inline'}} /></th>
            <th className="cursor-pointer" onClick={() => requestSort('attendance')}>Attendance <ArrowUpDown size={10} style={{display: 'inline'}} /></th>
            <th className="cursor-pointer" onClick={() => requestSort('risk')}>Risk Level <ArrowUpDown size={10} style={{display: 'inline'}} /></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {processedStudents.map(student => {
             const progressColorClass = getProgressClass(student.risk);
             return (
              <tr key={student.id} className={`prof-row ${getRowClass(student.status)}`}>
                <td style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    fireConfetti((rect.left + rect.width / 2) / window.innerWidth, (rect.top + rect.height / 2) / window.innerHeight);
                  }}>
                    <CharacterAvatar id={student.id} size={42} />
                  </div>
                  <div>
                    <div style={{fontWeight: 700, fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '6px'}}>
                      {student.name}
                      {student.gpa >= 3.8 && <SparkleStar size={14} color="#fcb721" />}
                    </div>
                    <div style={{fontSize: '0.75rem', color: '#718096'}}>{student.email}</div>
                  </div>
                </td>
                <td>
                  <span style={{ fontWeight: 600, color: '#4a5568', fontSize: '0.85rem' }}>{student.major}</span>
                </td>
                <td>
                  <div className="progress-cell-container">
                    <div className="progress-bar-wrapper">
                      <div className="progress-bar-fill" style={{
                        width: `${(student.gpa / 4) * 100}%`,
                        backgroundColor: student.risk === 'High' ? 'var(--color-coral)' : student.risk === 'Medium' ? 'var(--color-yellow)' : 'var(--color-green)'
                      }}></div>
                      <div className="progress-bar-text" style={{color: student.risk === 'High' ? 'white' : '#2d3748', fontWeight: 700}}>
                        {Number(student.gpa).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'}}>
                    {student.attendance < 75 && <AlertCircle size={14} color="var(--color-coral)" />}
                    <span style={{fontWeight: student.attendance < 75 ? 700 : 600, color: student.attendance < 75 ? 'var(--color-coral)' : 'inherit'}}>
                      {student.attendance}%
                    </span>
                  </div>
                </td>
                <td>
                  <span className={`badge-risk ${student.risk.toLowerCase()}`}>
                    {student.risk}
                  </span>
                </td>
                <td>
                  <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center'}}>
                    <button 
                      onClick={() => onEdit(student)} 
                      style={{background: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px 8px', cursor: 'pointer', color: '#4a5568', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600, boxShadow: '0 1px 3px rgba(0,0,0,0.04)'}}
                      title="Edit student record"
                    >
                      <Edit2 size={13} /> Edit
                    </button>
                    <button 
                      onClick={() => onDelete(student.id)} 
                      style={{background: '#fff5f5', border: '1px solid #fed7d7', borderRadius: '6px', padding: '6px 8px', cursor: 'pointer', color: '#e53e3e', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600}}
                      title="Delete student record"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
          {processedStudents.length === 0 && (
            <tr>
              <td colSpan="6" style={{textAlign: 'center', padding: '2.5rem', color: '#718096'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🔍</div>
                <div style={{fontWeight: 600}}>No students found matching your criteria.</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default StudentDirectory;
