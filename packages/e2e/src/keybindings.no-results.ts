import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.no-results'

export const test: Test = async ({ Locator, expect, KeyBindingsEditor }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()

  // act
  await KeyBindingsEditor.handleInput('1234567')

  // assert
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(0)
  const message = keyBindingsView.locator('.Message')
  await expect(message).toHaveText('No matching Keybindings found')
}
