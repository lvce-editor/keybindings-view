import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filter'

export const test: Test = async ({ Main, Locator, expect, KeyBindingsEditor }) => {
  // arrange
  await Main.openUri('app://keybindings')
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()

  // act
  await KeyBindingsEditor.handleInput('About.focus')

  // assert
  const rows = Locator('.KeyBindingsTableBody .KeyBindingsTableRow')
  await expect(rows).toHaveCount(2)
  const firstRow = Locator('.KeyBindingsTableBody .KeyBindingsTableRow').nth(0)
  const firstCell = firstRow.locator('.KeyBindingsTableCell').nth(1)
  await expect(firstCell).toHaveText('About.focusNext')
  const secondRow = Locator('.KeyBindingsTableBody .KeyBindingsTableRow').nth(1)
  const secondCell = secondRow.locator('.KeyBindingsTableCell').nth(1)
  await expect(secondCell).toHaveText('About.focusPrevious')
}
