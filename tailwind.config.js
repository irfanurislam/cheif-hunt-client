/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f2abb6",
        
"secondary": "#d3654a",
        
"accent": "#c9fcff",
        
"neutral": "#1C1726",
        
"base-100": "#EAE4EC",
        
"info": "#AAC0E9",
        
"success": "#2DD7B8",
        
"warning": "#F6CB3C",
        
"error": "#F8356C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

