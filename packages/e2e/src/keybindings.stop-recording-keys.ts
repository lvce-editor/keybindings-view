import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.stop-recording-keys'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()
  await KeyBindingsEditor.handleInput('About.focus')
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(2)
  await KeyBindingsEditor.startRecordingKeys()

  // act
  await KeyBindingsEditor.stopRecordingKeys()

  // assert
  const button = Locator('[name="RecordKeys"]')
  await expect(button).toHaveClass('SearchFieldButton')
  await expect(button).toHaveAttribute('aria-checked', 'false')
  await expect(input).toHaveAttribute('placeholder', 'Type to search in keybindings')
  const recordingBadge = Locator('.InputBadge')
  await expect(recordingBadge).toHaveCount(0)
}
