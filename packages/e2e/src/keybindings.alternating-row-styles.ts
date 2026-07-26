import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.alternating-row-styles'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  await api.expect(api.Locator('.TableBody .TableRow').nth(0)).toHaveClass('TableRowEven')
  await api.expect(api.Locator('.TableBody .TableRow').nth(1)).toHaveClass('TableRowOdd')
}
