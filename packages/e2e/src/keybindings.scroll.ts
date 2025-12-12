import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.scroll'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()
  const firstRow = Locator('.TableBody .TableRow').nth(0)
  const firstCell = firstRow.locator('.TableCell').nth(1)
  await expect(firstCell).toHaveText('About.handleClickClose')
  const secondRow = Locator('.TableBody .TableRow').nth(1)
  const secondCell = secondRow.locator('.TableCell').nth(1)
  await expect(secondCell).toHaveText('About.focusNext')

  // act
  await KeyBindingsEditor.handleWheel(0, 30)

  // assert
  await expect(firstCell).toHaveText('About.focusNext')
  await expect(secondCell).toHaveText('About.focusPrevious')
}
