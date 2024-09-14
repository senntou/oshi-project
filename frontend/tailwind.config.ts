import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        basecolor: '#FF5A36',
      },
    },
    fontFamily: {
      HachiMaruPop: ['"Hachi Maru Pop"', 'cursive'],
      MPlusRounded1c: ['"M PLUS Rounded 1c"', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
