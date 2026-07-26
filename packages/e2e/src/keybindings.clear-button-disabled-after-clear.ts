import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.clear-button-disabled-after-clear'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  await api.KeyBindingsEditor.clearInput()

  const button = api.Locator('[name="ClearSearchInput"]')
  await api.expect(button).toHaveClass('SearchFieldButtonDisabled')
}
