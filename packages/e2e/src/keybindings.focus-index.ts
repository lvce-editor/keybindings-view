import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.focus-last'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')

  // act
  await KeyBindingsEditor.focusIndex(1)

  // assert
  const row = Locator('.TableRow[aria-rowindex="3"]')
  await expect(row).toHaveClass('TableRowSelected')
}
