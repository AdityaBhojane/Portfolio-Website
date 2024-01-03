/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ['Ubuntu', "sans-serif"],
        Lugrasimo:['Lugrasimo', 'cursive']
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const customUtilities = {
        '.custom-bg': {
          background: '-webkit-radial-gradient(rgb(255, 255, 255), rgb(4, 0, 230))',
        },
      };

      addUtilities(customUtilities, ['responsive', 'hover']);
    },
  ],
}

