import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.record-keys'

export const skip = 1

export const test: Test = async ({ Main, Locator, expect, KeyBindingsEditor }) => {
  // arrange
  await Main.openUri('app://keybindings')
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()
  await KeyBindingsEditor.handleInput('About.focus')
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(2)

  // act
  await KeyBindingsEditor.startRecordingKeys()

  // assert
  const button = Locator('[name="RecordKeys"]')
  await expect(button).toHaveClass('SearchFieldButtonChecked')
  // TODO verify the button is marked as checked
  // TODO verify when pressing keys, they appear in the input

  // assert
}
