module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.json",
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
  }
}
