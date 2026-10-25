import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filter-command-highlights'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('about.next')

  const highlights = api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(1).locator('.SearchHighlight')
  await api.expect(highlights).toHaveCount(2)
  await api.expect(highlights.nth(0)).toHaveText('About.')
  await api.expect(highlights.nth(1)).toHaveText('Next')
}
