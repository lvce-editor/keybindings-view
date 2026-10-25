import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.exact-key-no-highlights'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('"Shift + Tab"')

  const highlights = api.Locator('.TableBody .SearchHighlight')
  await api.expect(highlights).toHaveCount(0)
}
