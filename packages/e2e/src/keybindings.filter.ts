import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filter'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
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
  const firstCell = Locator('.TableBody .TableRow:nth-of-type(1) .TableCell:nth-of-type(2)')
  await expect(firstCell).toHaveText('About.focusNext')
  const secondCell = Locator('.TableBody .TableRow:nth-of-type(2) .TableCell:nth-of-type(2)')
  await expect(secondCell).toHaveText('About.focusPrevious')
}
