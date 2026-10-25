import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.search-input-name'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  const input = api.Locator('.KeyBindingsSearchInputBox')
  await api.expect(input).toHaveAttribute('name', 'keybindings-filter')
}
