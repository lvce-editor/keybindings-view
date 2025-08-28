import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.focus-previous'

export const test: Test = async ({ KeyBindingsEditor, Locator, expect }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')
  await KeyBindingsEditor.focusFirst()
  await KeyBindingsEditor.focusNext()

  // act
  await KeyBindingsEditor.focusPrevious()

  // assert
  const row = Locator('.TableRow[aria-rowindex="2"]')
  await expect(row).toHaveClass('TableRowSelected')
}
