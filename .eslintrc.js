module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports (e.g., import 'polyfill';)
          ['^\\u0000'],

          // Node.js built-in modules (e.g., fs, path)
          [
            '^(assert|buffer|child_process|cluster|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|stream|string_decoder|timers|tls|url|util|v8|vm|zlib)$',
          ],

          // Next.js specific imports
          ['^next', '^next/(.*)$'],

          // External libraries and frameworks (React and other external packages)
          ['^react$', '^@?\\w'],

          // Internal packages, like your own components and utils
          ['^(@|components|utils|hooks|services|lib|contexts|config|pages)(/.*|$)'],

          // Parent imports (e.g., ../../someFile)
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          // Relative imports in the same directory (e.g., ./utils)
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

          // Style imports (e.g., import './styles.css')
          ['^.+\\.?(css|scss|sass|less|styl)$'],
        ],
      },
    ],
    // JavaScript rules
    'no-var': 'error',
    'no-plusplus': 'off',
    'no-unused-vars': 'error',
    'no-param-reassign': 'off',
    'no-case-declarations': 'off',
    'quote-props': ['warn', 'as-needed'],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // TypeScript rules
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // React rules
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['ts', 'tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
