import React from 'react';

// Handcrafted SVG character avatars with distinct personalities & color palettes
const avatarStyles = [
  {
    // Alice (curly hair, glasses, peach)
    bg: '#fed7d7',
    hairColor: '#4a5568',
    shirt: '#319795',
    render: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#fed7d7" />
        <ellipse cx="20" cy="38" rx="14" ry="9" fill="#319795" />
        <circle cx="20" cy="18" r="9" fill="#fbd38d" />
        {/* Curly hair */}
        <path d="M11 15C11 10 15 7 20 7C25 7 29 10 29 15C29 17 28 19 28 21C26 20 25 18 24 16C21 16 19 16 16 16C15 18 14 20 12 21C12 19 11 17 11 15Z" fill="#2d3748" />
        {/* Round glasses */}
        <circle cx="17" cy="18" r="3" stroke="#1a202c" strokeWidth="1.2" fill="rgba(255,255,255,0.7)" />
        <circle cx="23" cy="18" r="3" stroke="#1a202c" strokeWidth="1.2" fill="rgba(255,255,255,0.7)" />
        <path d="M20 18H20.5" stroke="#1a202c" strokeWidth="1.2" />
        {/* Smile */}
        <path d="M18 23C19 24 21 24 22 23" stroke="#742a2a" strokeWidth="1" strokeLinecap="round" />
      </svg>
    )
  },
  {
    // Bob (beanie, headphones, chill vibe)
    bg: '#feebc8',
    hairColor: '#dd6b20',
    shirt: '#e53e3e',
    render: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#feebc8" />
        <ellipse cx="20" cy="38" rx="14" ry="9" fill="#e53e3e" />
        <circle cx="20" cy="19" r="9" fill="#fbd38d" />
        {/* Orange Beanie */}
        <path d="M12 16C12 10 16 7 20 7C24 7 28 10 28 16H12Z" fill="#dd6b20" />
        <rect x="11" y="15" width="18" height="3" rx="1.5" fill="#c05621" />
        {/* Eyes */}
        <circle cx="16.5" cy="20" r="1.3" fill="#2d3748" />
        <circle cx="23.5" cy="20" r="1.3" fill="#2d3748" />
        {/* Smile */}
        <path d="M18 23.5C19 24.5 21 24.5 22 23.5" stroke="#742a2a" strokeWidth="1" strokeLinecap="round" />
        {/* Headphones band */}
        <path d="M9 19C9 12 13 8 20 8C27 8 31 12 31 19" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" fill="none" />
        <rect x="8" y="17" width="3" height="6" rx="1.5" fill="#2d3748" />
        <rect x="29" y="17" width="3" height="6" rx="1.5" fill="#2d3748" />
      </svg>
    )
  },
  {
    // Charlie (wavy hair, yellow sweater, focused)
    bg: '#e6fffa',
    hairColor: '#2b6cb0',
    shirt: '#fcb721',
    render: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#e6fffa" />
        <ellipse cx="20" cy="38" rx="14" ry="9" fill="#fcb721" />
        <circle cx="20" cy="19" r="9" fill="#fbd38d" />
        {/* Hair */}
        <path d="M12 15C13 10 17 8 20 8C24 8 28 10 28 15C26 13 22 13 20 14C17 14 14 13 12 15Z" fill="#2b6cb0" />
        {/* Eyes */}
        <circle cx="17" cy="19" r="1.2" fill="#1a202c" />
        <circle cx="23" cy="19" r="1.2" fill="#1a202c" />
        {/* Smirk */}
        <path d="M18 23C19 24 21 23.5 22 22.8" stroke="#742a2a" strokeWidth="1" strokeLinecap="round" />
      </svg>
    )
  },
  {
    // Diana (high ponytail, star sparkle, purple jacket)
    bg: '#faf5ff',
    hairColor: '#4a5568',
    shirt: '#805ad5',
    render: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#faf5ff" />
        <ellipse cx="20" cy="38" rx="14" ry="9" fill="#805ad5" />
        {/* Ponytail behind */}
        <ellipse cx="29" cy="12" rx="4" ry="7" fill="#2d3748" transform="rotate(25 29 12)" />
        <circle cx="20" cy="19" r="9" fill="#fbd38d" />
        {/* Sleek hair */}
        <path d="M11 16C12 10 16 8 21 8C26 8 28 11 29 15C26 14 23 14 20 15C17 15 13 14 11 16Z" fill="#2d3748" />
        {/* Confident Eyes */}
        <path d="M15 18C16 17.5 18 17.5 19 18" stroke="#1a202c" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M21 18C22 17.5 24 17.5 25 18" stroke="#1a202c" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="17" cy="19" r="1.2" fill="#1a202c" />
        <circle cx="23" cy="19" r="1.2" fill="#1a202c" />
        {/* Smile */}
        <path d="M18 23C19 24.5 21 24.5 22 23" stroke="#742a2a" strokeWidth="1.2" strokeLinecap="round" />
        {/* Gold earring */}
        <circle cx="11" cy="21" r="1.2" fill="#fcb721" />
      </svg>
    )
  },
  {
    // Evan (cap backwards, green jacket, playful)
    bg: '#f0fff4',
    hairColor: '#718096',
    shirt: '#38a169',
    render: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f0fff4" />
        <ellipse cx="20" cy="38" rx="14" ry="9" fill="#38a169" />
        <circle cx="20" cy="19" r="9" fill="#fbd38d" />
        {/* Cap backwards */}
        <path d="M12 16C12 11 15 8 20 8C25 8 28 11 28 16H12Z" fill="#3182ce" />
        <ellipse cx="20" cy="16" rx="8" ry="2" fill="#2b6cb0" />
        {/* Eyes */}
        <circle cx="17" cy="19" r="1.2" fill="#1a202c" />
        <circle cx="23" cy="19" r="1.2" fill="#1a202c" />
        <path d="M18 23.5C19 24.5 21 24.5 22 23.5" stroke="#742a2a" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    // Fiona (pink hair, star clip, artistic vibe)
    bg: '#fff5f5',
    hairColor: '#d53f8c',
    shirt: '#4fd1c5',
    render: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#fff5f5" />
        <ellipse cx="20" cy="38" rx="14" ry="9" fill="#4fd1c5" />
        <circle cx="20" cy="19" r="9" fill="#fbd38d" />
        {/* Pink Bob Hair */}
        <path d="M11 16C11 10 15 7 20 7C25 7 29 10 29 16C29 20 28 23 27 25C26 21 24 18 20 18C16 18 14 21 13 25C12 23 11 20 11 16Z" fill="#d53f8c" />
        {/* Yellow Star hair clip */}
        <polygon points="14,12 15,14 17,14 15.5,15 16,17 14,16 12,17 12.5,15 11,14 13,14" fill="#fcb721" />
        {/* Eyes */}
        <circle cx="17" cy="20" r="1.2" fill="#1a202c" />
        <circle cx="23" cy="20" r="1.2" fill="#1a202c" />
        <path d="M18 23.8C19 24.8 21 24.8 22 23.8" stroke="#742a2a" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  }
];

export const CharacterAvatar = ({ id = 1, size = 40, className = '', style = {} }) => {
  const index = Math.abs(Number(id) || 1) % avatarStyles.length;
  const avatar = avatarStyles[index];

  return (
    <div 
      className={`character-avatar-wrapper ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        border: '2px solid white',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: 'pointer',
        ...style
      }}
      title="Character Avatar"
    >
      {avatar.render()}
    </div>
  );
};
