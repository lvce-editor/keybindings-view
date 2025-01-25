import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.open'

export const test: Test = async ({ Main, Locator, expect }) => {
  // arrange

  // act
  await Main.openUri('app://keybindings')

  // assert
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
}
