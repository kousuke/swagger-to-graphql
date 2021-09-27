module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  rules: {
    'no-nested-ternary': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['example/**/*.ts', 'test/**/*'] },
    ],
    'import/prefer-default-export': 'off',
  },
};
