module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 'always',
    eqeqeq: 0,
    'no-console': 'error',
    'comma-dangle': ['error', 'always'],
    "eslint.lintTask.options": ". --ignore-path .gitignore"
  }
  
}
