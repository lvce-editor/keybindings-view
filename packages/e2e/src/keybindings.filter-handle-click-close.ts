import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filter-handle-click-close'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.handleClickClose')

  await api.expect(api.Locator('.TableBody .TableRow')).toHaveCount(1)
  await api.expect(api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(1)).toHaveText('About.handleClickClose')
  await api.expect(api.Locator('.TableBody .TableRow').nth(0).locator('.TableCell').nth(2)).toHaveText('Escape')
}
