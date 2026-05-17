/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:        '#1D2D6C',
        'navy-dark': '#141F52',
        'navy-light':'#253580',
        blue:        '#29B5E8',
        'blue-mid':  '#1A8FC5',
        'blue-light':'#E6F6FD',
        grey:        '#F5F7FA',
        'grey-mid':  '#6B7280',
        'grey-border':'#E5E7EB',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        relaxed: '1.75',
      },
    },
  },
  plugins: [],
};
