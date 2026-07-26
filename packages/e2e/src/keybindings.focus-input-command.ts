import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.focus-input-command'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  await api.Command.execute('KeyBindings.focusInput')

  const input = api.Locator('.KeyBindingsSearchInputBox')
  await api.expect(input).toBeFocused()
}
