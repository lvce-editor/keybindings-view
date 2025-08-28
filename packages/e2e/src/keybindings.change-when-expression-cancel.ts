import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.change-when-expression-cancel'

export const skip = 1

export const test: Test = async ({ KeyBindingsEditor }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')
  await KeyBindingsEditor.focusFirst()

  // act
  // await KeyBindingsEditor.changeWhenExpression()

  // assert
  // await expect(input).toHaveText('')
}
