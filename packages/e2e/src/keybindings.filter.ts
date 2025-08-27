import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filter'

export const test: Test = async ({ Locator, expect, KeyBindingsEditor }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()

  // act
  await KeyBindingsEditor.handleInput('About.focus')

  // assert
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(2)
  const firstRow = Locator('.TableBody .TableRow').nth(0)
  const firstCell = firstRow.locator('.TableCell').nth(1)
  await expect(firstCell).toHaveText('About.focusNext')
  const secondRow = Locator('.TableBody .TableRow').nth(1)
  const secondCell = secondRow.locator('.TableCell').nth(1)
  await expect(secondCell).toHaveText('About.focusPrevious')
}
