import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.copy-command-title'

export const skip = 1

export const test: Test = async ({ KeyBindingsEditor }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')

  // act
  await KeyBindingsEditor.copyCommandTitle()

  // assert
  // await expect(input).toHaveText('')
}
