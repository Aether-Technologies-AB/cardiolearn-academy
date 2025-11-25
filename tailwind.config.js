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
        // CardioLearn Academy - One Medical Inspired Palette
        
        // PRIMARY BRAND COLORS (One Medical inspired)
        primary: {
          blue: '#0891b2',      // One Medical teal-blue - Primary brand color
          'blue-dark': '#0e7490', // Darker shade for hover states
          'blue-light': '#06b6d4', // Lighter shade for backgrounds
          red: '#dc2626',       // Cardiac Red - Primary alert/heart color  
          white: '#ffffff',     // Pure White - Primary clean/background color
        },
        
        // ONE MEDICAL INSPIRED GRAYS
        gray: {
          50: '#f9fafb',        // One Medical light background
          100: '#f3f4f6',       // Subtle background
          200: '#e5e7eb',       // Light borders
          300: '#d1d5db',       // Medium borders
          400: '#9ca3af',       // Placeholder text
          500: '#6b7280',       // Secondary text
          600: '#4b5563',       // Primary text light
          700: '#374151',       // Primary text
          800: '#1f2937',       // Dark text
          900: '#111827',       // Darkest text
        },
        
        // SECONDARY SUPPORTING COLORS
        secondary: {
          teal: '#0891b2',      // One Medical primary teal
          'teal-light': '#06b6d4', // Light teal variant
          gold: '#f59e0b',      // Achievement Gold - Success & certification
          green: '#10b981',     // One Medical success green
          'green-light': '#34d399', // Light success green
          navy: '#1e293b',      // Deep Navy - Depth & stability
          silver: '#e5e7eb',    // Medical Silver - Sophistication
          purple: '#7c3aed',    // Medical Purple - Specialization
        },
        
        // LEGACY ACCENT MAPPING (for backward compatibility)
        accent: {
          teal: '#0891b2',      // Maps to primary.blue
          gold: '#f59e0b',      // Maps to secondary.gold
          navy: '#1e293b',      // Maps to secondary.navy
          silver: '#e5e7eb',    // Maps to secondary.silver
          purple: '#7c3aed',    // Maps to secondary.purple
        },
        
        // SEMANTIC COLORS (One Medical style)
        success: '#10b981',     // One Medical green
        warning: '#f59e0b',     // One Medical amber
        error: '#ef4444',       // One Medical red
        info: '#0891b2',        // One Medical blue
        
        // Neutral Foundation
        neutral: {
          black: '#111827',     // One Medical dark text
          'dark-grey': '#374151',   // One Medical secondary text
          'medium-grey': '#6b7280', // One Medical muted text
          'light-grey': '#9ca3af',  // One Medical placeholder
          white: '#ffffff',     // Pure White
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '96px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.5rem',     // One Medical standard radius (8px)
        'md': '0.75rem',         // One Medical medium radius (12px)
        'lg': '1rem',            // One Medical large radius (16px)
        'xl': '1.5rem',
        '2xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'onemedical': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'onemedical-lg': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.03)',
      },
      maxWidth: {
        'container': '1200px',
        'content': '768px',
        'form': '480px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #0891b2, #06b6d4)',      // One Medical teal gradient
        'gradient-heart': 'linear-gradient(45deg, #dc2626, #ef4444)',        // Cardiac Red gradient
        'gradient-success': 'linear-gradient(135deg, #10b981, #34d399)',     // One Medical success gradient
        'gradient-gold': 'linear-gradient(90deg, #f59e0b, #fbbf24)',         // Warm Gold gradient
        'gradient-navy': 'linear-gradient(180deg, #1e293b, #374151)',        // Deep Navy gradient
        'gradient-subtle': 'linear-gradient(180deg, #f9fafb, #f3f4f6)',      // One Medical subtle background
      }
    },
  },
  plugins: [],
}
