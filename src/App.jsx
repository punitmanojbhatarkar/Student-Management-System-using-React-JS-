import React, { useState } from 'react';
import './App.css';
import { Heart, Bell, ChevronDown } from 'lucide-react';
import DashboardStats from './components/DashboardStats';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import Timetable from './components/Timetable';
import AttendanceTracker from './components/AttendanceTracker';
import AcademicsManager from './components/AcademicsManager';
import { CampusMascot } from './components/CampusMascot';
import { ScribbleUnderline, SparkleStar, DoodleBadge, HandDrawnArrow } from './components/Doodles';
import { fireConfetti } from './utils/confetti';

// Expanded Mock Student Roster for Division A
const initialStudents = [
  { id: 1, name: 'Alice Johnson', email: 'alice@univ.edu', major: 'Data Science', gpa: 3.8, status: 'Active', attendance: 98, risk: 'Low' },
  { id: 2, name: 'Bob Smith', email: 'bob@univ.edu', major: 'Data Science', gpa: 2.2, status: 'Active', attendance: 75, risk: 'High' },
  { id: 3, name: 'Charlie Davis', email: 'charlie@univ.edu', major: 'Data Science', gpa: 2.9, status: 'Probation', attendance: 82, risk: 'Medium' },
  { id: 4, name: 'Diana Prince', email: 'diana@univ.edu', major: 'Data Science', gpa: 4.0, status: 'Active', attendance: 100, risk: 'Low' },
  { id: 5, name: 'Evan Wright', email: 'evan@univ.edu', major: 'Data Science', gpa: 3.5, status: 'Graduated', attendance: 95, risk: 'Low' },
  { id: 6, name: 'Fiona Gallagher', email: 'fiona@univ.edu', major: 'Data Science', gpa: 1.8, status: 'Probation', attendance: 60, risk: 'High' },
];

function App() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'directory' | 'timetable' | 'academics' | 'attendance'
  const [students, setStudents] = useState(initialStudents);
  
  // Modal States
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  // CRUD Handlers
  const handleAddStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: Date.now()
    };
    setStudents([...students, newStudent]);
    setIsFormOpen(false);
    fireConfetti(0.5, 0.4);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
    setIsFormOpen(false);
    setEditingStudent(null);
    fireConfetti(0.5, 0.4);
  };

  const handleDeleteStudent = (id) => {
    if(window.confirm('Are you sure you want to delete this student record?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const openEditForm = (student) => {
    setEditingStudent(student);
    setIsFormOpen(true);
  };

  const openAddForm = () => {
    setEditingStudent(null);
    setIsFormOpen(true);
  };

  return (
    <>
      <nav className="top-nav">
        <div className="nav-logo">
          <div style={{ backgroundColor: '#e53e3e' }}>+</div>
          <div style={{ backgroundColor: '#dd6b20' }}>-</div>
          <div style={{ backgroundColor: '#ecc94b' }}>x</div>
          <div style={{ backgroundColor: '#3182ce' }}>÷</div>
        </div>
        
        <div className="nav-links">
          <a href="#" className={`nav-link ${currentView === 'dashboard' ? 'active' : ''}`} onClick={() => setCurrentView('dashboard')}>Dashboard</a>
          <a href="#" className={`nav-link ${currentView === 'directory' ? 'active' : ''}`} onClick={() => setCurrentView('directory')}>Directory (SIS)</a>
          <a href="#" className={`nav-link ${currentView === 'timetable' ? 'active' : ''}`} onClick={() => setCurrentView('timetable')}>Timetable</a>
          <a href="#" className={`nav-link ${currentView === 'academics' ? 'active' : ''}`} onClick={() => setCurrentView('academics')}>Academics</a>
          <a href="#" className={`nav-link ${currentView === 'attendance' ? 'active' : ''}`} onClick={() => setCurrentView('attendance')}>Attendance</a>
        </div>

        <div className="nav-actions">
          <div className="nav-icon-wrapper" onClick={() => fireConfetti(0.85, 0.05)} title="Send campus love">
            <Heart size={20} color="white" />
          </div>
          <div className="nav-icon-wrapper">
            <Bell size={20} color="white" />
            <span className="badge-dot">3</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" style={{color: 'white'}}>
            <img src="https://i.pravatar.cc/150?img=47" alt="Admin" style={{width: 28, height: 28, borderRadius: '50%', objectFit: 'cover'}} />
            <ChevronDown size={14} />
          </div>
        </div>
      </nav>

      <main className="main-container">
        {/* Interactive Campus Mascot Banner */}
        <CampusMascot studentCount={students.length} />

        <header className="dashboard-header" style={{marginBottom: '0.5rem', marginTop: '0.25rem'}}>
          <div className="header-left" style={{flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap'}}>
              <h1 style={{margin: 0, position: 'relative'}}>
                {
                  currentView === 'dashboard' ? 'Command Center' : 
                  currentView === 'directory' ? 'Student Information System' : 
                  currentView === 'timetable' ? 'Class Timetable' :
                  currentView === 'academics' ? 'Academic Records' : 
                  'Daily Attendance Tracking'
                }
              </h1>
              <SparkleStar size={22} color="#fcb721" />
              <DoodleBadge variant="green" icon="🎓" rotation="2deg">TY B.Tech CSE</DoodleBadge>
              <DoodleBadge variant="yellow" icon="⭐" rotation="-1deg" onClick={() => fireConfetti(0.3, 0.2)}>Div A</DoodleBadge>
            </div>
            {/* Hand-drawn scribble accent */}
            <ScribbleUnderline color="#fcb721" width={180} />
            {currentView === 'timetable' && (
               <div style={{fontSize: '0.875rem', color: '#718096', marginTop: '0.25rem'}}>Academic Year 2024-25 • Department of Data Science</div>
            )}
          </div>
          <div className="header-right" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
             <HandDrawnArrow text="Enroll here!" direction="right" color="#ff7551" style={{display: 'none', lg: 'inline-flex'}} />
             <button className="btn btn-primary" onClick={openAddForm} style={{boxShadow: '0 4px 14px rgba(114, 195, 33, 0.35)', display: 'flex', alignItems: 'center', gap: '6px'}}>
               <span style={{fontSize: '1.1rem', lineHeight: 1}}>+</span> Add Student Record
             </button>
          </div>
        </header>

        {currentView === 'dashboard' && (
          <DashboardStats students={students} />
        )}
        
        {currentView === 'directory' && (
          <StudentDirectory 
            students={students} 
            onEdit={openEditForm} 
            onDelete={handleDeleteStudent} 
          />
        )}

        {currentView === 'timetable' && (
          <Timetable />
        )}

        {currentView === 'attendance' && (
          <AttendanceTracker 
            students={students}
            setStudents={setStudents}
          />
        )}

        {currentView === 'academics' && (
          <AcademicsManager />
        )}

      </main>

      {/* Shared Form Modal for Add/Update */}
      {isFormOpen && (
        <StudentForm 
          initialData={editingStudent} 
          onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent} 
          onCancel={() => { setIsFormOpen(false); setEditingStudent(null); }} 
        />
      )}
    </>
  );
}

export default App;
