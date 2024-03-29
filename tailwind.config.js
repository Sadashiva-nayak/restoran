/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      lg:'950px',
      sm:'640px',
      md:'780px',
      xs:'500px',
      xl:'1300px',
    },
    extend: {
      animation: {
        spin: 'spin 40s linear infinite',
      },
      fontFamily:{
        cursive:' Pacifico, cursive',
        nunito: 'Nunito,sans-serif',
      }
    },
  },
  plugins: [],
}

