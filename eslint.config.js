import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  {
    ignores: ['packages/keybindings-view/src/keyBindingsViewWorkerMain.ts'],
  },
  {
    files: ['**/*.ts'],
    rules: {
      'unicorn/prefer-ternary': 'off',
      'jest/no-restricted-jest-methods': 'off',
      'prefer-destructuring': 'off',
    },
  },
]
