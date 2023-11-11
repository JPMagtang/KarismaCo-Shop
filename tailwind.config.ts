import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors:{
      "white-chalk": "#F8F5F2",
      "black-dampened": "#474747",
      "gold-digger": "#D9AF6B",
      "blue-placebo": "#E4E5E9",
    },
    spacing: {
      "10px":"10px",
      "20px":"20px",
      "30px":"30px",
      "35px":"35px",
      "50px":"50px",
      "100px": "100px",
      "130px": "130px",
      "230px": "230px",
      "260px": "260px", 
      "350px": "350px"
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

