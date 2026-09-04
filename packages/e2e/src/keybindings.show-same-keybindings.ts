import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.show-same-keybindings'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()
  await KeyBindingsEditor.handleInput('About.focus')
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(2)
  await KeyBindingsEditor.focusFirst()

  // act
  await KeyBindingsEditor.showSameKeyBindings()

  // assert
  await expect(input).toHaveValue('"Tab"')
  const aboutFocusNextCell = Locator('.TableCell', { hasText: 'About.focusNext' })
  const mainFocusNextCell = Locator('.TableCell', { hasText: 'Main.focusNext' })
  await expect(aboutFocusNextCell).toBeVisible()
  await expect(mainFocusNextCell).toBeVisible()
}
