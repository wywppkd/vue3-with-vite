module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true, // 'defineProps' is not defined 相关问题
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'prettier', // eslint-config-prettier: 关闭与 prettier 冲突的规则
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
};
