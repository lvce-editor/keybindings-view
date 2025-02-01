import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.clear'

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

  // act
  await Command.execute('KeyBindings.clearInput')

  // assert
  await expect(input).toHaveText('')
}
