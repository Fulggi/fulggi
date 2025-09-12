/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
          '7xl': '1280px', 
      },
      colors: {
        primary: 'FFBAC8',
        secondary: 'FDF1E0',
        tertiary: 'D13A74',
        quaternary: 'A36032',
        quinary: '424340',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        sans: ['Nunito', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
        fredoka: ['"Fredoka One"', 'cursive'],
      },
    },
  },
  plugins: [],
};
