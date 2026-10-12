import React from 'react';
import { Search, Bell, MessageCircle } from 'lucide-react';

const Header = ({ currentView }) => {
  const getTitle = () => {
    switch(currentView) {
      case 'dashboard': return 'Student Dashboard';
      case 'courses': return 'My Courses';
      case 'students': return 'Community Forums';
      case 'grades': return 'Gradebook';
      case 'settings': return 'System Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="header">
      <div>
        <h2 style={{margin: 0, fontSize: '1.25rem'}}>{getTitle()}</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="glass-search">
          <Search size={16} className="text-muted" />
          <input type="text" placeholder="Search courses, forums..." />
        </div>

        <div className="flex items-center gap-4">
          <button style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '0.5rem', color: 'var(--text-muted)', cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Bell size={18} />
            <span style={{
              position: 'absolute', top: '0px', right: '0px', 
              width: '8px', height: '8px', background: 'var(--accent-1)', 
              borderRadius: '50%', boxShadow: '0 0 10px var(--accent-1)'
            }}></span>
          </button>
          
          <button style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '0.5rem', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <MessageCircle size={18} />
          </button>

          <div style={{width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', margin: '0 0.5rem'}}></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <div style={{textAlign: 'right'}}>
              <div style={{fontSize: '0.85rem', fontWeight: 600}}>Alice Johnson</div>
              <div style={{fontSize: '0.75rem', color: 'var(--accent-3)'}}>Student</div>
            </div>
            <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-3), var(--accent-2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
