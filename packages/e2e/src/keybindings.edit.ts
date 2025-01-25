import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.filter'

export const test: Test = async ({ Main, Locator, expect, KeyBindingsEditor }) => {
  // arrange
  await Main.openUri('app://keybindings')
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()
  await KeyBindingsEditor.handleInput('About.focus')

  // act
  await KeyBindingsEditor.handleDoubleClick(70, 70)

  // assert
  const defineKeyBindingWidget = Locator('.Viewlet.DefineKeyBinding')
  await expect(defineKeyBindingWidget).toBeVisible()
}
