/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CardioLearn Academy Medical Palette - Blue, Red, White Foundation
        
        // PRIMARY FOUNDATION COLORS - Blue, Red, White
        primary: {
          blue: '#1e40af',      // Medical Blue - Primary brand color
          red: '#dc2626',       // Cardiac Red - Primary alert/heart color  
          white: '#ffffff',     // Pure White - Primary clean/background color
        },
        
        // SECONDARY SUPPORTING COLORS
        secondary: {
          teal: '#0891b2',      // Surgical Teal - Technology & precision
          gold: '#f59e0b',      // Achievement Gold - Success & certification
          navy: '#1e293b',      // Deep Navy - Depth & stability
          silver: '#e5e7eb',    // Medical Silver - Sophistication
          purple: '#7c3aed',    // Medical Purple - Specialization
        },
        
        // LEGACY ACCENT MAPPING (for backward compatibility)
        accent: {
          teal: '#0891b2',      // Maps to secondary.teal
          gold: '#f59e0b',      // Maps to secondary.gold
          navy: '#1e293b',      // Maps to secondary.navy
          silver: '#e5e7eb',    // Maps to secondary.silver
          purple: '#7c3aed',    // Maps to secondary.purple
        },
        
        // Neutral Foundation
        neutral: {
          black: '#0f172a',     // Charcoal Black - Deep Background
          'dark-grey': '#334155',   // Slate Gray - Secondary Background
          'medium-grey': '#64748b', // Medium Gray - Text & Borders
          'light-grey': '#94a3b8',  // Light Gray - Subtle Elements
          white: '#ffffff',     // Pure White
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '64px',
      },
      maxWidth: {
        'container': '1200px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #1e40af, #0891b2)',      // Medical Blue to Surgical Teal
        'gradient-heart': 'linear-gradient(45deg, #dc2626, #ef4444)',        // Cardiac Red gradient
        'gradient-premium': 'linear-gradient(135deg, #7c3aed, #1e40af)',     // Medical Purple to Blue
        'gradient-gold': 'linear-gradient(90deg, #f59e0b, #fbbf24)',         // Warm Gold gradient
        'gradient-navy': 'linear-gradient(180deg, #1e293b, #334155)',        // Deep Navy gradient
      }
    },
  },
  plugins: [],
}
