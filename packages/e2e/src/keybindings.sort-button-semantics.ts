import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.sort-button-semantics'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  const button = api.Locator('[name="SortByPrecdence"]')
  await api.expect(button).toHaveAttribute('role', 'checkbox')
  await api.expect(button).toHaveAttribute('aria-checked', 'false')
  await api.expect(button).toHaveAttribute('title', 'Sort By Precedence')
}
