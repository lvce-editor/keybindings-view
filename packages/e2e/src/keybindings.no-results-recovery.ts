import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.no-results-recovery'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('no-command-can-match-this-value')
  await api.expect(api.Locator('.TableBody .TableRow')).toHaveCount(0)

  await api.KeyBindingsEditor.handleInput('About.focusNext')

  await api.expect(api.Locator('.TableBody .TableRow')).toHaveCount(1)
  await api.expect(api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(1)).toHaveText('About.focusNext')
  await api.expect(api.Locator('.NoMatchingKeyBindingsFoundMessage')).toHaveCount(0)
}
