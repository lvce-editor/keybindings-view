import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filtered-keybinding-column'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  await api.expect(api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(2)).toHaveText('Tab')
  await api.expect(api.Locator('.TableBody .TableRow').nth(1).locator('.TableCell').nth(2)).toHaveText('Shift+Tab')
}
