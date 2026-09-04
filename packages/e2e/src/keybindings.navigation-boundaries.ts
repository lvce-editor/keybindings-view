import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.navigation-boundaries'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')

  // act
  await KeyBindingsEditor.focusFirst()
  await KeyBindingsEditor.focusPrevious()

  // assert
  const firstRow = Locator('.TableRow[aria-rowindex="2"]')
  await expect(firstRow).toHaveClass('TableRowSelected')

  // act
  await KeyBindingsEditor.focusLast()
  await KeyBindingsEditor.focusNext()

  // assert
  const lastRow = Locator('.TableRow[aria-rowindex="3"]')
  await expect(lastRow).toHaveClass('TableRowSelected')
}
