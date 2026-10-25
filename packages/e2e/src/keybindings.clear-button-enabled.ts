import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.clear-button-enabled'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  const button = api.Locator('[name="ClearSearchInput"]')
  await api.expect(button).toHaveClass('SearchFieldButton')
}
