import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filtered-row-count-accessibility'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  const table = api.Locator('.Table')
  await api.expect(table).toHaveAttribute('aria-rowcount', '2')
}
