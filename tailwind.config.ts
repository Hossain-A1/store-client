import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark:"#111618",
        light:"#FFFFFF",
        light_dark:"#F9F8F3",
        gray:"#808080",
        pink:"#ED7DC0",
        red:"#D9114A",
        green:"#00B79F",
        blue:"#00879D",
        orange:"#F77F00",
        violet:"#7A60B3"
       }
    },
   
  },
  plugins: [],
}
export default config
