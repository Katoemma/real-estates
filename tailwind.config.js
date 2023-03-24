/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    screens: {
      'sm' : '576px' ,
      'md' : '768px',//ipads and tablets
      'lg' : '1224px',// laptops and desktops
      'xl' : '1824px', //large screens
    },
    colors : {
      'greener': '#fc2947',//#2d862d
      'white' : '#ffffff',
      'grayish': '#efefef',
      'black' : '#000000',
    },
    extend: {
      backgroundImage: {
        //'logoBg': "url('/img/assets/logoBg.jpg')",
        'heroBg': "url('/img/hero2.jpg')",
      }
    },
  },
  plugins: [],
};
