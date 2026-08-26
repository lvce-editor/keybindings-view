import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.header-row-index'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  const headerRow = api.Locator('.TableHead .TableRow')
  await api.expect(headerRow).toHaveAttribute('aria-rowindex', '1')
}
