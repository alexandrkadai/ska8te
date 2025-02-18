import type { Config } from 'tailwindcss';
import fluid, { extract } from 'fluid-tailwind';

export default {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily:{
        bowlby:['var(--font-bowlby)'],
        dmMono:['var(--font-dmmono)'],
      }
    },
  },
  plugins: [fluid],
} satisfies Config;
