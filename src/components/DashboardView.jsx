import React, { useState, useMemo } from 'react';
import { ChevronDown, Info, LayoutGrid, Search, Plus, X, ArrowUpDown } from 'lucide-react';

const DashboardView = ({ classes, activeClassId, setActiveClassId, students, onUpdateStudent, onAddStudent }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  
  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  // New Student Form State
  const [newStudent, setNewStudent] = useState({
    name: '', workCompleted: 0, workAssigned: 36, avgScore: 0, needingAttention: 0, workingTowards: 0, mastered: 0
  });

  // Calculate dynamic metrics based on current students
  const metrics = useMemo(() => {
    if (!students || students.length === 0) return { overall: 0, workAssigned: 0, redCount: 0, yellowCount: 0, greenCount: 0 };
    
    let totalScore = 0;
    let redCount = 0;
    let yellowCount = 0;
    let greenCount = 0;

    students.forEach(s => {
      totalScore += s.avgScore;
      if (s.avgScore < 40) redCount++;
      else if (s.avgScore < 70) yellowCount++;
      else greenCount++;
    });

    return {
      overall: Math.round(totalScore / students.length),
      workAssigned: students[0]?.workAssigned || 36, // Assuming uniform assignment count
      redCount,
      yellowCount,
      greenCount,
      totalStudents: students.length
    };
  }, [students]);

  // Sort and Filter logic
  const processedStudents = useMemo(() => {
    let result = [...students];
    
    // Search
    if (searchTerm) {
      result = result.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort
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

  const handleSaveEdit = () => {
    onUpdateStudent(editingStudent);
    setIsEditModalOpen(false);
  };

  const handleSaveNew = () => {
    if (!newStudent.name) return;
    onAddStudent({
      ...newStudent,
      id: Date.now(),
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
    });
    setIsAddModalOpen(false);
    setNewStudent({ name: '', workCompleted: 0, workAssigned: 36, avgScore: 0, needingAttention: 0, workingTowards: 0, mastered: 0 });
  };

  const getRowClass = (score) => {
    if (score < 40) return 'red';
    if (score < 70) return 'yellow';
    return 'green';
  };

  const activeClass = classes.find(c => c.id === activeClassId);

  return (
    <>
      {/* 1. Header Section */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Dashboard</h1>
          
          <div className="class-dropdown" style={{position: 'relative'}} onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span style={{ fontSize: '1.2rem' }}>👨‍🏫</span>
            <span>{activeClass?.name}</span>
            <ChevronDown size={14} />
            {dropdownOpen && (
              <div className="dropdown-menu">
                {classes.map(c => (
                  <div key={c.id} className="dropdown-item" onClick={(e) => {
                    e.stopPropagation();
                    setActiveClassId(c.id);
                    setDropdownOpen(false);
                  }}>
                    {c.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="avatar-group">
            {students.slice(0, 4).map((s, i) => (
              <img key={s.id} src={s.avatar} className="avatar-small" alt={s.name} style={{zIndex: i+1}} />
            ))}
            {students.length > 4 && (
              <div className="avatar-small count" style={{zIndex: 5}}>+{students.length - 4}</div>
            )}
          </div>
        </div>

        <div className="header-right">
          <div className="alerts">
            <span>⚡ Alerts</span>
            <div style={{background: '#718096', color: 'white', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'}}>6</div>
            <div style={{background: '#ff7551', color: 'white', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'}}>3</div>
          </div>
          <div style={{background: '#edf2f7', padding: '6px', borderRadius: '50%', color: '#4a5568', cursor: 'pointer'}}>
            <LayoutGrid size={18} />
          </div>
        </div>
      </header>

      {/* 2. Top Metrics Section */}
      <section className="top-cards-layout">
        
        {/* Left White Overview Card */}
        <div className="overview-card">
          <div className="overview-col">
            <div className="overview-title">Overall<br/>Class Score</div>
            <div className="overview-value">{metrics.overall}%</div>
            <div className="overview-footer">
              Grade average<br/><span className="overview-footer-val">71%</span>
            </div>
          </div>
          <div className="overview-col" style={{alignItems: 'center'}}>
            <svg className="trophy-svg" viewBox="0 0 100 100">
              <path d="M20,20 L80,20 L75,50 C70,70 50,80 50,80 C50,80 30,70 25,50 Z" fill="#72c321" />
              <path d="M25,20 L75,20 L75,25 L25,25 Z" fill="#ff7551" opacity="0.2" />
              <rect x="40" y="80" width="20" height="15" fill="#72c321" />
              <path d="M30,95 L70,95 L70,100 L30,100 Z" fill="#72c321" />
              <path d="M20,30 C10,30 10,50 22,45" fill="none" stroke="#72c321" strokeWidth="4" />
              <path d="M80,30 C90,30 90,50 78,45" fill="none" stroke="#72c321" strokeWidth="4" />
              <ellipse cx="50" cy="20" rx="32" ry="8" fill="#fbd38d" />
              <circle cx="50" cy="12" r="4" fill="#fbd38d" />
            </svg>
          </div>

          <div className="overview-col">
            <div className="overview-title">Work<br/>Assigned</div>
            <div className="overview-value">{metrics.workAssigned}</div>
            <div className="overview-footer">
              Grade average<br/><span className="overview-footer-val">38%</span>
            </div>
          </div>
          <div className="overview-col" style={{alignItems: 'center', justifyContent: 'center'}}>
            <svg className="scatter-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#e2e8f0" strokeDasharray="4 4" />
              <circle cx="20" cy="40" r="6" fill="#72c321" />
              <circle cx="35" cy="25" r="8" fill="#72c321" />
              <circle cx="60" cy="20" r="5" fill="#fcb721" />
              <circle cx="80" cy="45" r="7" fill="#fcb721" />
              <circle cx="70" cy="75" r="9" fill="#fcb721" />
              <circle cx="45" cy="85" r="6" fill="#fcb721" />
              <circle cx="25" cy="70" r="8" fill="#72c321" />
              <circle cx="50" cy="50" r="15" fill="#72c321" />
            </svg>
          </div>
        </div>

        {/* Right Status Colored Cards */}
        <div className="status-cards-container">
          
          <div className="status-card green">
            <img src="https://i.pravatar.cc/150?img=5" className="status-avatar" alt="student" />
            <div className="status-value">{metrics.greenCount}</div>
            <div className="status-percent">{Math.round((metrics.greenCount/metrics.totalStudents)*100) || 0}%<br/>of class</div>
            <div className="status-footer">Mastering</div>
          </div>

          <div className="status-card yellow">
            <img src="https://i.pravatar.cc/150?img=11" className="status-avatar" alt="student" />
            <div className="status-value">{metrics.yellowCount}</div>
            <div className="status-percent">{Math.round((metrics.yellowCount/metrics.totalStudents)*100) || 0}%<br/>of class</div>
            <div className="status-footer">Working Towards</div>
          </div>

          <div className="status-card coral">
            <img src="https://i.pravatar.cc/150?img=20" className="status-avatar" alt="student" />
            <div className="status-value">{metrics.redCount}</div>
            <div className="status-percent">{Math.round((metrics.redCount/metrics.totalStudents)*100) || 0}%<br/>of class</div>
            <div className="status-footer">Needing Attention</div>
          </div>

        </div>
      </section>

      {/* 3. Students Proficiency Section */}
      <section style={{marginTop: '2rem'}}>
        <div className="proficiency-header">
          <h2>Students Proficiency</h2>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div className="search-bar">
              <Search size={16} color="#a0aec0" />
              <input type="text" placeholder="Search student..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <button className="btn btn-secondary" style={{padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}} onClick={() => setIsAddModalOpen(true)}>
              <Plus size={16} /> Add Student
            </button>
            <div className="proficiency-tabs" style={{marginLeft: '1rem'}}>
              <div className="active"><Info size={14} color="#718096" /> Learning Objectives</div>
              <div>All Strands</div>
            </div>
          </div>
        </div>

        <table className="prof-table">
          <thead>
            <tr>
              <th className="cursor-pointer" onClick={() => requestSort('name')}>Full Name <ArrowUpDown size={10} style={{display: 'inline'}} /></th>
              <th>Work Completed</th>
              <th className="cursor-pointer" onClick={() => requestSort('avgScore')}>Average Score <ArrowUpDown size={10} style={{display: 'inline'}} /></th>
              <th>Needing Attention</th>
              <th>Working Towards</th>
              <th>Mastered</th>
            </tr>
          </thead>
          <tbody>
            {processedStudents.map(student => (
              <tr key={student.id} className={`prof-row ${getRowClass(student.avgScore)} hover-bg cursor-pointer`} onClick={() => { setEditingStudent({...student}); setIsEditModalOpen(true); }}>
                <td>
                  <img src={student.avatar} className="prof-avatar" alt={student.name} />
                  {student.name}
                </td>
                <td>{student.workCompleted} / {student.workAssigned}</td>
                <td>
                  <div className="progress-cell-container">
                    <div className="progress-bar-wrapper">
                      <div className="progress-bar-fill" style={{width: `${student.avgScore}%`}}></div>
                      <div className="progress-bar-text" style={{color: student.avgScore < 40 ? 'white' : '#2d3748'}}>{student.avgScore}%</div>
                    </div>
                  </div>
                </td>
                <td><div className="circle-indicator circle-red">{student.needingAttention}</div></td>
                <td><div className="circle-indicator circle-yellow">{student.workingTowards}</div></td>
                <td><div className="circle-indicator circle-green">{student.mastered}</div></td>
              </tr>
            ))}
            {processedStudents.length === 0 && (
              <tr>
                <td colSpan="6" style={{textAlign: 'center', padding: '2rem', color: '#718096'}}>No students found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Add Student Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add New Student</div>
              <button className="close-btn" onClick={() => setIsAddModalOpen(false)}><X size={24} /></button>
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} placeholder="e.g. Jane Doe" />
            </div>
            <div className="form-group" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div>
                <label>Avg Score (%)</label>
                <input type="number" className="form-control" value={newStudent.avgScore} onChange={e => setNewStudent({...newStudent, avgScore: parseInt(e.target.value) || 0})} />
              </div>
              <div>
                <label>Work Completed</label>
                <input type="number" className="form-control" value={newStudent.workCompleted} onChange={e => setNewStudent({...newStudent, workCompleted: parseInt(e.target.value) || 0})} />
              </div>
            </div>
            <div className="form-group" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem'}}>
              <div>
                <label style={{color: 'var(--color-coral)'}}>Red (Needs Attn)</label>
                <input type="number" className="form-control" value={newStudent.needingAttention} onChange={e => setNewStudent({...newStudent, needingAttention: parseInt(e.target.value) || 0})} />
              </div>
              <div>
                <label style={{color: 'var(--color-yellow)'}}>Yellow (Working)</label>
                <input type="number" className="form-control" value={newStudent.workingTowards} onChange={e => setNewStudent({...newStudent, workingTowards: parseInt(e.target.value) || 0})} />
              </div>
              <div>
                <label style={{color: 'var(--color-green)'}}>Green (Mastered)</label>
                <input type="number" className="form-control" value={newStudent.mastered} onChange={e => setNewStudent({...newStudent, mastered: parseInt(e.target.value) || 0})} />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem'}}>
              <button className="btn btn-secondary" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSaveNew}>Save Student</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Grade Modal */}
      {isEditModalOpen && editingStudent && (
        <div className="modal-overlay" onClick={() => setIsEditModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Assess: {editingStudent.name}</div>
              <button className="close-btn" onClick={() => setIsEditModalOpen(false)}><X size={24} /></button>
            </div>
            <div className="form-group" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div>
                <label>Avg Score (%)</label>
                <input type="number" className="form-control" value={editingStudent.avgScore} onChange={e => setEditingStudent({...editingStudent, avgScore: parseInt(e.target.value) || 0})} />
              </div>
              <div>
                <label>Work Completed (out of 36)</label>
                <input type="number" className="form-control" value={editingStudent.workCompleted} onChange={e => setEditingStudent({...editingStudent, workCompleted: parseInt(e.target.value) || 0})} />
              </div>
            </div>
            <div className="form-group" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem'}}>
              <div>
                <label style={{color: 'var(--color-coral)'}}>Needing Attention</label>
                <input type="number" className="form-control" value={editingStudent.needingAttention} onChange={e => setEditingStudent({...editingStudent, needingAttention: parseInt(e.target.value) || 0})} />
              </div>
              <div>
                <label style={{color: 'var(--color-yellow)'}}>Working Towards</label>
                <input type="number" className="form-control" value={editingStudent.workingTowards} onChange={e => setEditingStudent({...editingStudent, workingTowards: parseInt(e.target.value) || 0})} />
              </div>
              <div>
                <label style={{color: 'var(--color-green)'}}>Mastered</label>
                <input type="number" className="form-control" value={editingStudent.mastered} onChange={e => setEditingStudent({...editingStudent, mastered: parseInt(e.target.value) || 0})} />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem'}}>
              <button className="btn btn-secondary" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSaveEdit}>Update Grades</button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default DashboardView;
