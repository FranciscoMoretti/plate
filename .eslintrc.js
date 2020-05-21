module.exports = {
  extends: ['@borealisgroup/eslint-config-ts', 'plugin:mdx/recommended'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-alert': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-named-as-default-member': 'off',
    'jest/no-export': 'off',
    'jest/no-standalone-expect': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx', 'mdx'] },
    ],
    'mdx/no-unused-expressions': 'off',
  },
  overrides: [
    {
      files: '**/*.stories.tsx',
      rules: {
        // just for showing the code in addon-docs
        'react-hooks/rules-of-hooks': 'off'
      },
    },
    {
      files: '**/*.mdx',
      rules: {
        'prettier/prettier': 'off',
        'simple-import-sort/sort': 'off',
        'import/order': ['error', { 'newlines-between': 'never' }],
      },
    },
  ]
};
