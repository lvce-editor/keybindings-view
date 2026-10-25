import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.toggle-recording-on'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  await api.KeyBindingsEditor.toggleRecordingKeys()

  const button = api.Locator('[name="RecordKeys"]')
  await api.expect(button).toHaveAttribute('aria-checked', 'true')
  await api.expect(api.Locator('.InputBadge')).toHaveText('Recording keys')
}
