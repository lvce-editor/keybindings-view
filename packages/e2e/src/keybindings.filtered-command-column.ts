import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filtered-command-column'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  await api.expect(api.Locator('.TableBody .TableRow:nth-of-type(1) .TableCell:nth-of-type(2)')).toHaveText('About.focusNext')
  await api.expect(api.Locator('.TableBody .TableRow:nth-of-type(2) .TableCell:nth-of-type(2)')).toHaveText('About.focusPrevious')
}
