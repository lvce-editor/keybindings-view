import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.focus-next'

export const skip = 1

export const test: Test = async ({ KeyBindingsEditor, Locator, expect }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')
  await KeyBindingsEditor.focusFirst()

  // act
  await KeyBindingsEditor.changeWhenExpression()

  // assert
  const whenExpressionInput = Locator(`[name="KeyBindingsWhenExpression"]`)
  await expect(whenExpressionInput).toBeVisible()
  await expect(whenExpressionInput).toHaveValue('FocusAbout')
}
