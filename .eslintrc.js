module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb/hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['src/apollo/types.ts'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    'no-undef': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/react-in-jsx-scope': 0,
    'import/extensions': ['error', 'always', { tsx: 'never', js: 'never', ts: 'never' }],
  },
}
