import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.start-recording-keys'

export const skip = 1

export const test: Test = async ({ Main, Locator, expect, KeyBindingsEditor, Command }) => {
  // arrange
  await Main.openUri('app://keybindings')
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()
  await KeyBindingsEditor.handleInput('About.focus')
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(2)
  await Command.execute('KeyBindings.startRecordingKeys')

  // act
  // TODO verify the button is marked as checked
  // TODO verify when pressing keys, they appear in the input

  // assert
}
