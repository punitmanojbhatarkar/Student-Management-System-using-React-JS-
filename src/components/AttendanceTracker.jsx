import React, { useState } from 'react';
import { Check, X, Clock, CalendarCheck } from 'lucide-react';
import { CharacterAvatar } from '../utils/avatars.jsx';
import { WashiTape, DoodleBadge, SparkleStar } from './Doodles';
import { fireConfetti } from '../utils/confetti';

const AttendanceTracker = ({ students, setStudents }) => {
  const [currentDate] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  const [markedToday, setMarkedToday] = useState(false);

  const handleMarkAttendance = (id, statusType, e) => {
    if (statusType === 'present' && e) {
      const rect = e.currentTarget.getBoundingClientRect();
      fireConfetti((rect.left + rect.width / 2) / window.innerWidth, (rect.top + rect.height / 2) / window.innerHeight);
    }

    setStudents(students.map(s => {
      if (s.id === id) {
        let newAttendance = s.attendance;
        if (statusType === 'absent') {
          newAttendance = Math.max(0, newAttendance - 5);
        } else if (statusType === 'present') {
          newAttendance = Math.min(100, newAttendance + 1);
        }
        
        return { ...s, attendance: newAttendance, todayStatus: statusType };
      }
      return s;
    }));
  };

  const handleSaveAll = () => {
    setMarkedToday(true);
    fireConfetti(0.5, 0.4);
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h2 style={{ margin: 0, color: '#2d3748' }}>Daily Attendance Log</h2>
            <DoodleBadge variant="green" icon="📅" rotation="1deg">Real-Time Roll Call</DoodleBadge>
          </div>
          <p style={{ margin: '0.25rem 0 0 0', color: '#718096', fontSize: '0.9rem' }}>{currentDate}</p>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={handleSaveAll} 
          disabled={markedToday}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(114, 195, 33, 0.3)' }}
        >
          <CalendarCheck size={16} />
          {markedToday ? '✓ Attendance Saved' : 'Submit Day Attendance'}
        </button>
      </div>

      <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
        <WashiTape color="rgba(114, 195, 33, 0.4)" rotation="-2.5deg" style={{ top: '-8px', left: '40px' }} />
        <table className="prof-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>Student Profile</th>
              <th>Current Global Attendance %</th>
              <th>Mark Today's Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="prof-row hover-bg">
                <td style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CharacterAvatar id={student.id} size={40} />
                  <div>
                    <div style={{fontWeight: 700, fontSize: '0.95rem'}}>{student.name}</div>
                    <div style={{fontSize: '0.75rem', color: '#718096'}}>{student.email}</div>
                  </div>
                </td>
                <td>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                    <div style={{width: '120px', height: '8px', background: '#edf2f7', borderRadius: '4px', overflow: 'hidden'}}>
                      <div style={{
                        height: '100%', 
                        width: `${student.attendance}%`, 
                        background: student.attendance < 75 ? 'var(--color-coral)' : 'var(--color-green)',
                        borderRadius: '4px',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </div>
                    <span style={{fontSize: '0.875rem', fontWeight: 700, color: student.attendance < 75 ? 'var(--color-coral)' : '#2d3748', minWidth: '40px'}}>
                      {student.attendance}%
                    </span>
                  </div>
                </td>
                <td>
                  <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center'}}>
                    <button 
                      onClick={(e) => handleMarkAttendance(student.id, 'present', e)}
                      style={{
                        padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                        background: student.todayStatus === 'present' ? '#c6f6d5' : 'white',
                        border: `1.5px solid ${student.todayStatus === 'present' ? '#38a169' : '#e2e8f0'}`,
                        color: student.todayStatus === 'present' ? '#276749' : '#4a5568',
                        fontWeight: 600, fontSize: '0.8rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Check size={14} /> Present
                    </button>
                    
                    <button 
                      onClick={(e) => handleMarkAttendance(student.id, 'late', e)}
                      style={{
                        padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                        background: student.todayStatus === 'late' ? '#feebc8' : 'white',
                        border: `1.5px solid ${student.todayStatus === 'late' ? '#dd6b20' : '#e2e8f0'}`,
                        color: student.todayStatus === 'late' ? '#9c4221' : '#4a5568',
                        fontWeight: 600, fontSize: '0.8rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Clock size={14} /> Late
                    </button>

                    <button 
                      onClick={(e) => handleMarkAttendance(student.id, 'absent', e)}
                      style={{
                        padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                        background: student.todayStatus === 'absent' ? '#fed7d7' : 'white',
                        border: `1.5px solid ${student.todayStatus === 'absent' ? '#e53e3e' : '#e2e8f0'}`,
                        color: student.todayStatus === 'absent' ? '#9b2c2c' : '#4a5568',
                        fontWeight: 600, fontSize: '0.8rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <X size={14} /> Absent
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AttendanceTracker;
