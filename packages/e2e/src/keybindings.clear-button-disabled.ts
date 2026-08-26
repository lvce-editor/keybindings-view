import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.clear-button-disabled'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  const button = api.Locator('[name="ClearSearchInput"]')
  await api.expect(button).toHaveClass('SearchFieldButtonDisabled')
  await api.expect(button).toHaveAttribute('title', 'Clear Search Input')
}
