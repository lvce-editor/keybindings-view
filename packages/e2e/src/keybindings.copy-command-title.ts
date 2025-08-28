import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.copy-command-title'

export const test: Test = async ({ Locator, expect, KeyBindingsEditor }) => {
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
