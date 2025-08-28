import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.focus-next'

export const test: Test = async ({ KeyBindingsEditor, Locator, expect }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')
  await KeyBindingsEditor.focusFirst()

  // act
  await KeyBindingsEditor.focusNext()

  // assert
  const row = Locator('.TableRow[aria-rowindex="3"]')
  await expect(row).toHaveClass('TableRowSelected')
}
