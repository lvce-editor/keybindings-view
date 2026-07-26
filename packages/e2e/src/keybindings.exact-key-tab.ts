import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.exact-key-tab'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('"Tab"')

  await api.expect(api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(1)).toHaveText('About.focusNext')
  await api.expect(api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(2)).toHaveText('Tab')
}
