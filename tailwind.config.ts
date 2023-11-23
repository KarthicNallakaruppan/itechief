import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: '#4B91F7',
        secondary: '#C32B67',
        text: '#4F4F4F',
        success: '#61C554',
        mustard: '#FFBC00',
        midGray: "#A0A0A0",
        primaryLight: '#AFD7F5'
      }
    },
  },
  plugins: [],
}
export default config




