import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.edit-buttons'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  const buttons = api.Locator('.TableBody .KeyBindingsEditButton')
  await api.expect(buttons).toHaveCount(2)
  await api.expect(buttons.first()).toHaveAttribute('title', 'Edit')
}
