import React from 'react';

// Hand-drawn wavy scribble underline
export const ScribbleUnderline = ({ color = '#fcb721', width = 160, className = '' }) => (
  <svg 
    width={width} 
    height="14" 
    viewBox="0 0 160 14" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`doodle-scribble ${className}`}
    style={{ display: 'block', overflow: 'visible' }}
  >
    <path 
      d="M3 10C35 4 70 12 105 6C122 3 140 8 157 5" 
      stroke={color} 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Sparkle Star doodle (pulsing)
export const SparkleStar = ({ size = 20, color = '#fcb721', className = '', style = {} }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color} 
    className={`doodle-sparkle ${className}`}
    style={{ display: 'inline-block', ...style }}
  >
    <path d="M12 0C12.5 6.5 17.5 11.5 24 12C17.5 12.5 12.5 17.5 12 24C11.5 17.5 6.5 12.5 0 12C6.5 11.5 11.5 6.5 12 0Z" />
  </svg>
);

// Hand-drawn curved arrow with pointer
export const HandDrawnArrow = ({ text = '', direction = 'right', color = '#ff7551', style = {} }) => (
  <div className="doodle-arrow-wrapper" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', ...style }}>
    {direction === 'left' && (
      <svg width="42" height="24" viewBox="0 0 42 24" fill="none" style={{ transform: 'scaleX(-1)' }}>
        <path d="M4 14C14 6 26 5 38 10M38 10L32 5M38 10L33 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
    {text && <span style={{ fontFamily: 'Caveat, Outfit, cursive, sans-serif', fontSize: '1rem', fontWeight: 600, color, letterSpacing: '0.3px', transform: 'rotate(-2deg)' }}>{text}</span>}
    {direction === 'right' && (
      <svg width="42" height="24" viewBox="0 0 42 24" fill="none">
        <path d="M4 14C14 6 26 5 38 10M38 10L32 5M38 10L33 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  </div>
);

// Decorative washi tape for card corners
export const WashiTape = ({ color = 'rgba(252, 183, 33, 0.45)', rotation = '-4deg', style = {} }) => (
  <div 
    className="doodle-washi-tape"
    style={{
      position: 'absolute',
      width: '64px',
      height: '18px',
      background: color,
      transform: `rotate(${rotation})`,
      zIndex: 2,
      backdropFilter: 'blur(2px)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      pointerEvents: 'none',
      borderLeft: '2px dashed rgba(255,255,255,0.4)',
      borderRight: '2px dashed rgba(255,255,255,0.4)',
      ...style
    }}
  />
);

// Designer hand-drawn badge sticker
export const DoodleBadge = ({ children, icon = '✦', variant = 'green', rotation = '-1.5deg', onClick }) => {
  const bgColors = {
    green: { bg: '#eef9e4', text: '#3c7913', border: '#72c321' },
    yellow: { bg: '#fffbe8', text: '#946603', border: '#fcb721' },
    coral: { bg: '#fff0ec', text: '#b83416', border: '#ff7551' },
    blue: { bg: '#ebf8ff', text: '#1a4971', border: '#4299e1' },
    purple: { bg: '#f5f0ff', text: '#5b21b6', border: '#9f7aea' }
  };
  const theme = bgColors[variant] || bgColors.green;

  return (
    <span 
      onClick={onClick}
      className="doodle-badge"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '3px 10px',
        borderRadius: '999px',
        background: theme.bg,
        color: theme.text,
        border: `1.5px solid ${theme.border}`,
        fontSize: '0.75rem',
        fontWeight: 700,
        transform: `rotate(${rotation})`,
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
        userSelect: 'none'
      }}
    >
      <span style={{ fontSize: '0.85rem' }}>{icon}</span>
      {children}
    </span>
  );
};

// Hand-drawn circle ring around numbers or badges
export const DoodleCircle = ({ size = 38, color = '#ff7551', children }) => (
  <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ position: 'absolute', pointerEvents: 'none' }}>
      <path 
        d="M20 4C30 4 37 12 37 22C37 31 29 37 19 37C9 37 3 29 3 19C3 8 11 3 21 3C23 3 27 3.5 29 4.5" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeDasharray="95"
        className="doodle-circle-path"
      />
    </svg>
    <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
  </div>
);
