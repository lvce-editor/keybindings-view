import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.search-actions'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  const actions = api.Locator('.KeyBindingsSearchButtons .SearchFieldButton')
  await api.expect(actions).toHaveCount(3)
}
