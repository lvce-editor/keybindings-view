import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.select-second-row'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')

  await api.Command.execute('KeyBindings.handleClickIndex', 1, false)

  await api.expect(api.Locator('.TableBody .TableRow').nth(1)).toHaveClass('TableRowSelected')
  await api.expect(api.Locator('.Table')).toBeFocused()
}
