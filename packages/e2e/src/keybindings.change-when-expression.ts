import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.change-when-expression'

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
