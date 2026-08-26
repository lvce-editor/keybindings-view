import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.source-column'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // act
  await KeyBindingsEditor.open()

  // assert
  const sourceHeader = Locator('.TableHead .TableCell').nth(4)
  await expect(sourceHeader).toHaveText('Source')

  const sourceCells = Locator('.TableBody .TableRow .TableCell:nth-child(5)')
  await expect(sourceCells.first()).toHaveText('System')
}
