import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.view-document-role'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  const view = api.Locator('.Viewlet.KeyBindings')
  await api.expect(view).toHaveAttribute('role', 'document')
}
