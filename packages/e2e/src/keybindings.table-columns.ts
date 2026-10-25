import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.table-columns'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // act
  await KeyBindingsEditor.open()

  // assert
  const headerCells = Locator('.TableHead .TableCell')
  await expect(headerCells).toHaveCount(5)
  const editHeader = headerCells.nth(0)
  await expect(editHeader).toHaveText('')
  const commandHeader = headerCells.nth(1)
  await expect(commandHeader).toHaveText('Command')
  const keyBindingHeader = headerCells.nth(2)
  await expect(keyBindingHeader).toHaveText('Keybinding')
  const whenHeader = headerCells.nth(3)
  await expect(whenHeader).toHaveText('When')
  const sourceHeader = headerCells.nth(4)
  await expect(sourceHeader).toHaveText('Source')

  const firstRowCells = Locator('.TableBody .TableRow').first().locator('.TableCell')
  await expect(firstRowCells).toHaveCount(5)
  const firstCommand = firstRowCells.nth(1)
  await expect(firstCommand).toHaveText('About.handleClickClose')
  const firstSource = firstRowCells.nth(4)
  await expect(firstSource).toHaveText('System')
}
