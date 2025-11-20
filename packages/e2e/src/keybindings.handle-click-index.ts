import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.handle-click-index'

export const test: Test = async ({ Command, KeyBindingsEditor, Locator, expect }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')

  // act
  await Command.execute('KeyBindings.handleClickIndex', 1, false)

  // assert
  const row = Locator('.TableRow[aria-rowindex="3"]')
  await expect(row).toHaveClass('TableRowSelected')
  const table = Locator('.Table')
  await expect(table).toBeFocused()
  // TODO aria-activedescendant?
}
