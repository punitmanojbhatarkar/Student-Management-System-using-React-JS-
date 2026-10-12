import React, { useMemo } from 'react';
import { AlertTriangle, TrendingDown, Clock, Award, Zap } from 'lucide-react';
import { WashiTape, SparkleStar, DoodleBadge } from './Doodles';
import { CharacterAvatar } from '../utils/avatars.jsx';
import { fireConfetti } from '../utils/confetti';

const DashboardStats = ({ students }) => {
  
  const stats = useMemo(() => {
    const total = students.length;
    if (total === 0) return { avgGpa: 0, active: 0, probation: 0, graduated: 0, grades: { A:0, B:0, C:0, D:0, F:0 }, alerts: [] };
    
    let gpaSum = 0;
    let active = 0;
    let probation = 0;
    let graduated = 0;
    let grades = { A:0, B:0, C:0, D:0, F:0 };
    let alerts = [];

    students.forEach(s => {
      const gpa = parseFloat(s.gpa) || 0;
      gpaSum += gpa;
      
      if (s.status === 'Active') active++;
      else if (s.status === 'Probation') probation++;
      else if (s.status === 'Graduated') graduated++;

      if (gpa >= 3.5) grades.A++;
      else if (gpa >= 3.0) grades.B++;
      else if (gpa >= 2.0) grades.C++;
      else if (gpa >= 1.0) grades.D++;
      else grades.F++;

      if (s.attendance < 75) {
        alerts.push({ id: `att-${s.id}`, icon: Clock, message: `${s.name} has critical attendance (${s.attendance}%)` });
      }
      if (gpa < 2.0) {
        alerts.push({ id: `gpa-${s.id}`, icon: TrendingDown, message: `${s.name} GPA dropped below 2.0` });
      }
    });

    return {
      total,
      avgGpa: (gpaSum / total).toFixed(2),
      active,
      probation,
      graduated,
      grades,
      alerts: alerts.slice(0, 3) // Top 3 alerts
    };
  }, [students]);

  const maxGradeCount = Math.max(...Object.values(stats.grades), 1); // Avoid div by 0

  return (
    <>
      <div className="alerts-panel">
        <WashiTape color="rgba(255, 117, 81, 0.45)" rotation="-2deg" style={{ top: '-8px', right: '40px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h3 style={{fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0}}>
            <AlertTriangle size={18} color="var(--color-coral)" /> Actionable Alerts & Insights
          </h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className="campus-streak-tag" onClick={(e) => fireConfetti(0.7, 0.3)}>
              🔥 98% High Streak
            </span>
            <span className="campus-streak-tag" onClick={(e) => fireConfetti(0.75, 0.3)} style={{ borderColor: '#eab308', color: '#a16207', background: '#fefce8' }}>
              ⭐ Dean's List Ready
            </span>
          </div>
        </div>
        
        {stats.alerts.length === 0 ? (
          <div className="text-muted text-sm">No critical alerts requiring immediate action. Everyone is thriving! 🎉</div>
        ) : (
          stats.alerts.map(alert => {
            const Icon = alert.icon;
            return (
              <div key={alert.id} className="alert-item">
                <div className="alert-icon"><Icon size={16} /></div>
                <div className="text-sm font-bold">{alert.message}</div>
                <button className="btn btn-secondary" style={{marginLeft: 'auto', padding: '4px 12px', fontSize: '0.75rem'}}>Review</button>
              </div>
            );
          })
        )}
      </div>

      <section className="top-cards-layout">
        {/* Left Side: Overview + Chart */}
        <div style={{flex: 1.2, display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          
          {/* Overview White Card with Washi Tape */}
          <div className="overview-card" style={{flex: 'none'}}>
            <WashiTape color="rgba(114, 195, 33, 0.38)" rotation="-3deg" style={{ top: '-9px', left: '30px' }} />
            <div className="overview-col">
              <div className="overview-title">Total Enrolled<br/>Students</div>
              <div className="overview-value" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                {stats.total}
                <SparkleStar size={16} color="#72c321" />
              </div>
              <div className="overview-footer">
                System capacity<br/><span className="overview-footer-val">500 Students</span>
              </div>
            </div>
            
            <div className="overview-col">
              <div className="overview-title">Average<br/>Cohort GPA</div>
              <div className="overview-value" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                {stats.avgGpa}
                <SparkleStar size={16} color="#fcb721" />
              </div>
              <div className="overview-footer">
                Target GPA<br/><span className="overview-footer-val">3.00 (Benchmark)</span>
              </div>
            </div>
          </div>

          {/* Chart Card */}
          <div className="chart-card" style={{flex: 1}}>
            <WashiTape color="rgba(252, 183, 33, 0.38)" rotation="2.5deg" style={{ top: '-9px', right: '35px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div className="overview-title" style={{marginBottom: '0'}}>Grade Distribution</div>
                <div className="text-muted text-xs mb-4">Current cohort performance breakdown</div>
              </div>
              <DoodleBadge variant="blue" icon="📊" rotation="1deg">Accredited Curve</DoodleBadge>
            </div>
            
            <div className="bar-chart-container">
              {['A', 'B', 'C', 'D', 'F'].map(grade => {
                const count = stats.grades[grade];
                const heightPercent = (count / maxGradeCount) * 100;
                // Color coding for visual hierarchy
                const color = grade === 'A' || grade === 'B' ? 'var(--color-green)' : 
                              grade === 'C' ? 'var(--color-yellow)' : 'var(--color-coral)';
                return (
                  <div key={grade} className="bar-group">
                    <div style={{fontSize: '0.75rem', fontWeight: 700, color: '#2d3748'}}>{count}</div>
                    <div className="bar" style={{height: `${heightPercent}%`, background: color, boxShadow: '0 2px 6px rgba(0,0,0,0.06)'}}></div>
                    <div className="bar-label">{grade}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Status Colored Cards with Illustrated Character Avatars */}
        <div className="status-cards-container">
          <div className="status-card green">
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <CharacterAvatar id={4} size={36} />
            </div>
            <div className="status-value">{stats.active}</div>
            <div className="status-percent">{Math.round((stats.active/stats.total)*100) || 0}%<br/>of total</div>
            <div className="status-footer">Status:<br/>Active Students</div>
          </div>

          <div className="status-card yellow">
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <CharacterAvatar id={5} size={36} />
            </div>
            <div className="status-value">{stats.graduated}</div>
            <div className="status-percent">{Math.round((stats.graduated/stats.total)*100) || 0}%<br/>of total</div>
            <div className="status-footer">Status:<br/>Graduated Alumni</div>
          </div>

          <div className="status-card coral">
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <CharacterAvatar id={2} size={36} />
            </div>
            <div className="status-value">{stats.probation}</div>
            <div className="status-percent">{Math.round((stats.probation/stats.total)*100) || 0}%<br/>of total</div>
            <div className="status-footer">Status:<br/>Under Guidance</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardStats;
