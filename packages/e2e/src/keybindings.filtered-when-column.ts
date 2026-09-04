import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filtered-when-column'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  await api.expect(api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(3)).toHaveText('FocusAbout')
  await api.expect(api.Locator('.TableBody .TableRow').nth(1).locator('.TableCell').nth(3)).toHaveText('FocusAbout')
}
