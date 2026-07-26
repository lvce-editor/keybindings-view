import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.recording-escape'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()
  await api.KeyBindingsEditor.startRecordingKeys()

  await api.Command.execute('KeyBindings.handleKeyDown', false, false, 'Escape')

  const button = api.Locator('[name="RecordKeys"]')
  await api.expect(button).toHaveAttribute('aria-checked', 'false')
  await api.expect(api.Locator('.InputBadge')).toHaveCount(0)
}
