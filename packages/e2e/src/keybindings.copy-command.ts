import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.copy-command'

export const skip = 1

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

  // act
  await KeyBindingsEditor.clearInput()

  // assert
  await expect(input).toHaveText('')
}
