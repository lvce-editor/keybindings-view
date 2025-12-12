import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.fuzzy-search'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()

  // act
  await KeyBindingsEditor.handleInput('about.next')

  // assert
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(1)
  const firstRow = Locator('.TableBody .TableRow').nth(0)
  const firstCell = firstRow.locator('.TableCell').nth(1)
  await expect(firstCell).toHaveText('About.focusNext')
}
