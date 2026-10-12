import React, { useState } from 'react';
import { fireConfetti } from '../utils/confetti';
import { SparkleStar } from './Doodles';

const campusQuips = [
  "Cohort attendance is averaging 84%! Top tier effort this week! 🚀",
  "Diana Prince holds a perfect 4.0 GPA! Academic royalty 👑",
  "Reminder: DAA lab evaluation is coming up on Thursday 💻",
  "Tip: Tap any table header in SIS Directory to sort records instantly! 📊",
  "3 students need an attendance check-in. Help them get back on track! 🤝",
  "Welcome back, Professor! The coffee is hot and the data is synced ☕",
  "Semester V Class Division A is leading the department in project marks! 🏆"
];

export const CampusMascot = ({ studentCount = 6, avgGpa = '3.03' }) => {
  const [quipIndex, setQuipIndex] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);
  const [isHappy, setIsHappy] = useState(true);

  const handleMascotClick = (e) => {
    setIsWiggling(true);
    // Calculate relative click coordinate for confetti
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    fireConfetti(x, y);

    setQuipIndex((prev) => (prev + 1) % campusQuips.length);
    setIsHappy((prev) => !prev);

    setTimeout(() => {
      setIsWiggling(false);
    }, 600);
  };

  return (
    <div className="campus-mascot-container">
      {/* Handcrafted Speech Bubble */}
      <div className="mascot-speech-bubble" onClick={handleMascotClick}>
        <div className="speech-badge">
          <SparkleStar size={12} color="#fcb721" /> Campus Buddy • Pip
        </div>
        <p className="speech-text">{campusQuips[quipIndex]}</p>
        <span className="speech-hint">Click Pip for good luck ✨</span>
        <div className="speech-tail" />
      </div>

      {/* Hand-drawn Character SVG (Pip the Owl / Study Mascot) */}
      <div 
        className={`mascot-avatar ${isWiggling ? 'mascot-wiggle' : ''}`} 
        onClick={handleMascotClick}
        title="Click me to cheer up your campus!"
      >
        <svg width="74" height="74" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Soft Shadow */}
          <ellipse cx="40" cy="74" rx="26" ry="5" fill="rgba(0,0,0,0.12)" />

          {/* Feet */}
          <ellipse cx="33" cy="70" rx="6" ry="3" fill="#fcb721" />
          <ellipse cx="47" cy="70" rx="6" ry="3" fill="#fcb721" />

          {/* Body with soft gradient */}
          <rect x="18" y="24" width="44" height="46" rx="22" fill="#72c321" />
          {/* Belly */}
          <ellipse cx="40" cy="50" rx="16" ry="17" fill="#f7fbfc" />

          {/* Belly Doodles / Feathers */}
          <path d="M36 44C38 46 42 46 44 44" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M33 51C36 53 44 53 47 51" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M37 58C39 60 41 60 43 58" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" />

          {/* Wings */}
          <ellipse cx="16" cy="46" rx="5" ry="14" fill="#64b019" transform="rotate(12 16 46)" />
          <ellipse cx="64" cy="46" rx="5" ry="14" fill="#64b019" transform="rotate(-12 64 46)" />

          {/* Cheeks */}
          <ellipse cx="28" cy="40" rx="4" ry="2.5" fill="#ff7551" opacity="0.6" />
          <ellipse cx="52" cy="40" rx="4" ry="2.5" fill="#ff7551" opacity="0.6" />

          {/* Eyes with Glasses */}
          {/* Spectacles Frames */}
          <circle cx="32" cy="34" r="8" stroke="#2d3748" strokeWidth="2.5" fill="white" />
          <circle cx="48" cy="34" r="8" stroke="#2d3748" strokeWidth="2.5" fill="white" />
          <path d="M40 34H40.5" stroke="#2d3748" strokeWidth="2.5" strokeLinecap="round" />

          {/* Eye Pupils */}
          <circle cx="34" cy="34" r="3.5" fill="#2d3748" />
          <circle cx="50" cy="34" r="3.5" fill="#2d3748" />
          {/* Sparkles in eyes */}
          <circle cx="35" cy="32.5" r="1.2" fill="white" />
          <circle cx="51" cy="32.5" r="1.2" fill="white" />

          {/* Beak */}
          <polygon points="40,37 36,43 44,43" fill="#fcb721" />

          {/* Graduation Cap (Bespoke Designer Touch) */}
          <polygon points="40,11 63,18 40,25 17,18" fill="#2d3748" />
          <rect x="29" y="21" width="22" height="6" rx="2" fill="#1a202c" />
          {/* Tassel Button & String */}
          <circle cx="40" cy="18" r="2.5" fill="#fcb721" />
          <path d="M40 18C47 20 54 22 55 27" stroke="#fcb721" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="53" y="27" width="3.5" height="5" rx="1" fill="#fcb721" />

          {/* Small Pencil under right wing */}
          <rect x="61" y="44" width="3" height="15" rx="1" fill="#fcb721" transform="rotate(25 61 44)" />
          <polygon points="63,58 60,63 65,62" fill="#2d3748" transform="rotate(25 61 44)" />
        </svg>

        {/* Mascot Status Pill */}
        <div className="mascot-status-pill">
          <span className="pulsing-green-dot" />
          <span>Active</span>
        </div>
      </div>
    </div>
  );
};
