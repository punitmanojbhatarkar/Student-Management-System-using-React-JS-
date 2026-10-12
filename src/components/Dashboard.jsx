import React from 'react';

const Dashboard = ({ students, children }) => {
  const totalStudents = students.length;
  // Let's pretend there's some complex logic we can show off
  const recentEnrollments = students.filter(s => {
    const enrollDate = new Date(s.enrollmentDate);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return enrollDate >= thirtyDaysAgo;
  }).length;

  return (
    <div className="app-container">
      <header className="header">
        <div>
          <h1>Student Dashboard</h1>
          <p style={{color: 'var(--text-muted)'}}>Manage your institution's enrollments.</p>
        </div>
        <div className="flex gap-4">
          <div className="glass-panel" style={{padding: '0.75rem 1.5rem', textAlign: 'center'}}>
            <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)'}}>
              {totalStudents}
            </div>
            <div style={{fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase'}}>
              Total Students
            </div>
          </div>
          <div className="glass-panel" style={{padding: '0.75rem 1.5rem', textAlign: 'center'}}>
            <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--success)'}}>
              +{recentEnrollments}
            </div>
            <div style={{fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase'}}>
              Last 30 Days
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
