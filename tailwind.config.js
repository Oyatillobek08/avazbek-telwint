/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'och-qora':'#191f36;'
      },
      backgroundImage: {
        'hero-pattern': "url('/img/kutubxona.jfif')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      
      animation: {
        'pulse-slow': 'pulse 35s linear  infinite',
        
      },
      
    },

  },

  plugins: [],
}

