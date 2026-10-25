import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filtered-row-indexes'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  await api.expect(api.Locator('.TableBody .TableRow').nth(0)).toHaveAttribute('aria-rowindex', '2')
  await api.expect(api.Locator('.TableBody .TableRow').nth(1)).toHaveAttribute('aria-rowindex', '3')
}
