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
        light:"#F4F4F4",
        gray:"#808080",
        pink:"#ED7DC0",
        red:"#D9114A",
        green:"#00B79F",
        blue:"#32B8CB",
        orange:"#FF7809",
        violet:"#7A60B3"
       }
    },
   
  },
  plugins: [],
}
export default config
