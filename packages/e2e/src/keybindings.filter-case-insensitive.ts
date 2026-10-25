import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filter-case-insensitive'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('about.focusnext')

  await api.expect(api.Locator('.TableBody .TableRow')).toHaveCount(1)
  await api.expect(api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(1)).toHaveText('About.focusNext')
}
