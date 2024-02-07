/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
           
        primary: '#0a5c0a', 
        secondary: '#b3b3b3',
        accent: '#ffffff',
      },

      

      backgroundImage:{
        
        bgHeader :"url('/public/media/alberelli.png'), url('/public/media/montagna.jpg')",
        bgHeaderDark:"url('/public/media/alberelliDark.png'), url('/public/media/SfondoDark.png')",
        bgTree2: "url('/public/media/trees2.png')",
        bgTree2Dark: "url('/public/media/trees2Dark.png')",
        bgSagome:"url('/public/media/alberisagome.png')",
        bgSagomeDark:"url('/public/media/alberisagomeDark.png')"

      }
    },
  },
  plugins: [],
}

