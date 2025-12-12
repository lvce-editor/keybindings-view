import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.focus-first'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')

  // act
  await KeyBindingsEditor.focusFirst()

  // assert
  const row = Locator('.TableRow[aria-rowindex="2"]')
  await expect(row).toHaveClass('TableRowSelected')
}
