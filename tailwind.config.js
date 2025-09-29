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
        // CardioLearn Academy Brand Colors
        primary: {
          blue: '#2563eb',
          red: '#dc2626',
          teal: '#0891b2',
        },
        neutral: {
          black: '#121822',
          'dark-grey': '#1F2937',
          'medium-grey': '#4B5563',
          'light-grey': '#9CA3AF',
          white: '#FFFFFF',
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
        'gradient-primary': 'linear-gradient(90deg, #2563eb, #0891b2)',
        'gradient-heart': 'linear-gradient(45deg, #dc2626, #ef4444)',
      }
    },
  },
  plugins: [],
}
