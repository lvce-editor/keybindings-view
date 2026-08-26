import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.sort-by-precedence-off'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.sortByPrecedence()

  await api.KeyBindingsEditor.sortByPrecedence()

  const button = api.Locator('[name="SortByPrecdence"]')
  await api.expect(button).toHaveAttribute('aria-checked', 'false')
  await api.expect(button).toHaveClass('SearchFieldButton')
}
