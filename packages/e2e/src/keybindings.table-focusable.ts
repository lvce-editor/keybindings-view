import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.table-focusable'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  const table = api.Locator('.Table')
  await api.expect(table).toHaveAttribute('tabindex', '0')
}
