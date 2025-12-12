import * as config from '@lvce-editor/eslint-config'
import * as actions from '@lvce-editor/eslint-plugin-github-actions'

export default [
  ...config.default,
  ...actions.default,
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
