/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      inter:'Inter'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
   
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
       aa: '#eef2f3', 
       bb: '#8e9eab',
       cc: '#7b8a60' , 
       nn : '#c2cbd3' ,
       kk:'#697785',
       yy:'#697785',

       ww:'#071a27 ',
       yy:'#1894cb',
       pp:'#2f495c',
       qq:'#ccd3d9'
            },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/said.png')",
        services: "url('./assets/services.png')",
      },

    },
  },
  experimental: {
    // ...
    // Set ignoreUnknownRules to true to ignore unknown at-rules
    ignoreUnknownRules: true,
  },
  plugins: [],
}

