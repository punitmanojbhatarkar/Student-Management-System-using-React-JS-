import React from 'react';
import { BookOpen, PlayCircle, MoreHorizontal } from 'lucide-react';

const CoursesView = ({ courses }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="gradient-text">My Enrolled Courses</h2>
        <div className="glass-search" style={{ width: '250px' }}>
          <input type="text" placeholder="Filter courses..." style={{marginLeft: 0}} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <div key={course.id} className="glass-card" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
            <div style={{
              height: '120px', 
              background: `linear-gradient(135deg, ${course.color}40, transparent)`, 
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              position: 'relative'
            }}>
              <div style={{position: 'absolute', top: '1rem', right: '1rem'}}>
                <button style={{background: 'rgba(0,0,0,0.3)', border: 'none', borderRadius: '50%', padding: '0.25rem', color: 'white', cursor: 'pointer', backdropFilter: 'blur(4px)'}}>
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div style={{position: 'absolute', bottom: '-20px', left: '1.5rem', width: '50px', height: '50px', borderRadius: '12px', background: course.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 20px ${course.color}60`}}>
                <BookOpen size={24} color="white" />
              </div>
            </div>
            
            <div style={{padding: '2.5rem 1.5rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column'}}>
              <h3 className="mb-1 text-lg">{course.name}</h3>
              <p className="text-xs text-muted mb-6">Instructor: Dr. Alan Turing</p>
              
              <div style={{marginTop: 'auto'}}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted">Progress</span>
                  <span className="font-bold">{course.progress}%</span>
                </div>
                <div style={{width: '100%', height: '6px', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: '1.5rem'}}>
                  <div style={{width: `${course.progress}%`, height: '100%', background: course.color, borderRadius: 'var(--radius-full)', boxShadow: `0 0 10px ${course.color}`}}></div>
                </div>
                
                <button className="btn-glow w-full flex items-center justify-center gap-2" style={{padding: '0.6rem', fontSize: '0.85rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none'}}>
                  <PlayCircle size={16} /> Resume Learning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesView;
