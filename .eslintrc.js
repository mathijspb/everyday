module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': [
      'error', 4,
      {
        'SwitchCase': 1,
      },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'quote-props': 0,
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'never',
      },
    ],
    'semi': [
      'error',
      'always',
    ],
    'new-cap': 0,
  }
}
