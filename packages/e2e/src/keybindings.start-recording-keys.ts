import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.start-recording-keys'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()

  // act
  await KeyBindingsEditor.startRecordingKeys()

  // assert
  const button = Locator('[name="RecordKeys"]')
  await expect(button).toHaveClass('SearchFieldButtonChecked')
  await expect(input).toHaveAttribute('placeholder', 'Recording Keys. Press Escape to exit (⇅ for history)')
}
