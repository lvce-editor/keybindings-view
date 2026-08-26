import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.focus-input-after-selection'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.handleInput('About.focus')
  await api.Command.execute('KeyBindings.handleClickIndex', 1, false)

  await api.Command.execute('KeyBindings.focusInput')

  await api.expect(api.Locator('.KeyBindingsSearchInputBox')).toBeFocused()
}
