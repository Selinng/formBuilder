module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/standard'],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 'warn',
    semi: 'warn',
    'comma-spacing': 'warn',
    'generator-star-spacing': 'off',
    'no-caller': 'off',
    'no-control-regex': 'off',
    'no-extend-native': 'off',
    'no-irregular-whitespace': 'off',
    'no-mixed-operators': 'off',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-unused-vars': 'warn',
    'no-useless-constructor': 'warn',
    'new-cap': 'warn',
    'vue/no-unused-vars': 'warn',
    'key-spacing': 'warn',
    'arrow-spacing': 'warn',
    'keyword-spacing': 'warn',
    'space-infix-ops': 'warn',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'standard/object-curly-even-spacing': 'off',
    'prefer-const': 'off',
    'no-empty': 'off',
    'no-extra-semi': 'off',
    'quote-props': 'off'
  }
}
