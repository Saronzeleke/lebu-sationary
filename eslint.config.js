import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react-refresh/only-export-components': 'off',  // Disable globally to avoid Shadcn warnings
      'no-unused-vars': 'off',  // Disable base JS rule; use TS one
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { 
          argsIgnorePattern: '^_',  // Ignore _prefixed args
          varsIgnorePattern: '^_',  // Ignore _prefixed vars
          args: 'after-used',  // Only flag unused args after used ones
          vars: 'all',  // Flag all unused vars
        },
      ],
    },
    ignores: [
      'dist/**',
      'node_modules/**',
      '**/*.config.js',  // Ignore config files if needed
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  // Disable react-refresh for Shadcn UI components (known issue)
  {
    files: ['src/components/ui/**'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  // Relax unused vars for hooks (Shadcn's use-toast)
  {
    files: ['src/hooks/**'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  }
);