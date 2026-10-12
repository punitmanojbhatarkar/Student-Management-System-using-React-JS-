import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  GraduationCap 
} from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'students', label: 'Community', icon: Users },
    { id: 'grades', label: 'Grades', icon: GraduationCap },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="flex items-center gap-3 mb-10">
        <div style={{
          background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
          width: '36px', height: '36px', borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontWeight: 'bold', fontSize: '1.2rem',
          boxShadow: '0 0 15px rgba(255, 0, 127, 0.5)'
        }}>
          M
        </div>
        <h2 style={{margin: 0, fontSize: '1.4rem', letterSpacing: '1px'}}>MoodlePro</h2>
      </div>

      <nav style={{flex: 1}}>
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <div 
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setCurrentView(item.id)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="glass-card" style={{padding: '1.25rem', textAlign: 'center', marginTop: 'auto'}}>
        <p className="text-xs text-muted mb-3">Upgrade to Premium for advanced analytics.</p>
        <button className="btn-glow" style={{width: '100%', padding: '0.5rem', fontSize: '0.875rem'}}>Upgrade Now</button>
      </div>
    </aside>
  );
};

export default Sidebar;
