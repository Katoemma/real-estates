/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm' : '768px' ,
      'md' : '1024px',
      'lg' : '1280px',
      'xl' : '1280'
    },
    colors : {
      'greener': '#2d862d',
      'white' : '#ffffff',
      'grayish': '#efefef',
    },
    extend: {
      backgroundImage: {
        'logoBg': "url('img/assets/logoBg.jpg')",
      }
    },
  },
  plugins: [],
};
