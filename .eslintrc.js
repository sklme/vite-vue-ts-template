module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  overrides: [
    {
      // 取消对js文件的type解析
      // https://typescript-eslint.io/docs/linting/type-linting
      files: ['*.js'],
      parserOptions: {
        project: null,
      },
    },
  ],
};
