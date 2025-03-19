import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Add Tailwind CSS configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      tailwindcss: require('eslint-plugin-tailwindcss'),
    },
    rules: {
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          config: './tailwind.config.js', // Adjust this path if your config is elsewhere
          whitelist: [
            // Add patterns for fluid-tailwind classes
            'fluid-\\[.*\\]',
            'f-\\[.*\\]',
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
