import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.open-context-menu'

export const skip = 1

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()
  await KeyBindingsEditor.handleInput('About.focus')

  // act
  await KeyBindingsEditor.handleContextMenu(0, 100, 200)

  // assert
  const menu = Locator('.Menu')
  await expect(menu).toBeVisible()
  await expect(menu).toHaveCSS('top', '-142px')
  await expect(menu).toHaveCSS('left', '-150px')
  const first = menu.locator('.MenuItem').first()
  await expect(first).toBeVisible()
  await expect(first).toHaveText('Copy')
}
