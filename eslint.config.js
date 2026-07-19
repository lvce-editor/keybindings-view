import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  ...config.recommendedVirtualDom,
  {
    ignores: ['packages/keybindings-view/src/keyBindingsViewWorkerMain.ts'],
  },
  {
    files: ['**/*.ts'],
    rules: {
      'unicorn/prefer-ternary': 'off',
      'jest/no-restricted-jest-methods': 'off',
      'prefer-destructuring': 'off',
      '@cspell/spellchecker': 'off',
      'sonarjs/arguments-order': 'off',
      'sonarjs/max-switch-cases': 'off',
    },
  },
  {
    files: ['packages/keybindings-view/src/parts/GetKeyBindingsHeaderVirtualDom/GetKeyBindingsHeaderVirtualDom.ts'],
    rules: {
      'virtual-dom/prefer-constants': 'off',
    },
  },
  {
    files: ['packages/keybindings-view/test/**/*.ts'],
    rules: {
      'virtual-dom/prefer-constants': 'off',
      'virtual-dom/prefer-merge-class-names': 'off',
      'virtual-dom/prefer-state-destructuring': 'off',
    },
  },
]
