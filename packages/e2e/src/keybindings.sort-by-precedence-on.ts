import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.sort-by-precedence-on'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  await api.KeyBindingsEditor.sortByPrecedence()

  const button = api.Locator('[name="SortByPrecdence"]')
  await api.expect(button).toHaveAttribute('aria-checked', 'true')
  await api.expect(button).toHaveClass('SearchFieldButtonChecked')
}
