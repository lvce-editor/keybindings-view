import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.record-key'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.startRecordingKeys()

  await api.Command.execute('KeyBindings.handleKeyDown', false, false, false, 'x')

  const input = api.Locator('.KeyBindingsSearchInputBox')
  await api.expect(input).toHaveValue('X')
  await api.expect(api.Locator('[name="RecordKeys"]')).toHaveAttribute('aria-checked', 'true')
}
