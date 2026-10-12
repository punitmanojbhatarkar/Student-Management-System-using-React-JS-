import React, { useState } from 'react';
import { Search, UserPlus, MessageCircle, X } from 'lucide-react';

const StudentsView = ({ students, setStudents }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  // We are using 'students' as the community roster
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="gradient-text">Community</h2>
        <div className="flex gap-4">
          <div className="glass-search" style={{ width: '300px' }}>
            <Search size={16} className="text-muted" />
            <input 
              type="text" 
              placeholder="Find classmates..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn-glow" onClick={() => setShowModal(true)}>
            <UserPlus size={16} style={{display: 'inline', marginRight: '8px'}} /> Invite
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredStudents.length === 0 ? (
          <div className="col-span-3 text-center py-8 text-muted">No students found.</div>
        ) : filteredStudents.map((student, i) => (
          <div key={student.id} className="glass-card flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%', 
                background: `linear-gradient(135deg, ${i % 2 === 0 ? 'var(--accent-1), var(--accent-2)' : 'var(--accent-3), var(--accent-4)'})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}>
                {student.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold">{student.name}</div>
                <div className="text-xs text-muted">{student.course}</div>
              </div>
            </div>
            <button style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '0.5rem', color: 'var(--accent-3)', cursor: 'pointer', transition: 'var(--transition)'}} className="hover:bg-white/10">
              <MessageCircle size={16} />
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 100
        }}>
          <div className="glass-card" style={{width: '400px', position: 'relative'}}>
            <button 
              onClick={() => setShowModal(false)}
              style={{position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer'}}
            >
              <X size={18} />
            </button>
            <h2 className="mb-2">Invite Classmate</h2>
            <p className="text-sm text-muted mb-6">Send an invitation to join the learning platform.</p>
            
            <div className="form-group mb-6">
              <label className="text-sm text-muted mb-2 block">Email Address</label>
              <input 
                type="email" 
                style={{width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', color: 'white', outline: 'none'}} 
                placeholder="student@university.edu"
              />
            </div>
            <button className="btn-glow w-full" onClick={() => setShowModal(false)}>Send Invitation</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsView;
