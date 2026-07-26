import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.change-keybinding'

export const test: Test = async ({ Command, expect, KeyBindingsEditor, Locator }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.handleClickClose')
  await KeyBindingsEditor.focusFirst()

  // act
  await KeyBindingsEditor.handleDoubleClick(70, 145)
  const defineKeyBindingWidget = Locator('.Viewlet.DefineKeyBinding')
  await expect(defineKeyBindingWidget).toBeVisible()
  const defineKeyBindingInput = defineKeyBindingWidget.locator('input')
  const viewletStates = await Command.execute('Viewlet.getAllStates')
  const defineKeyBindingState = Object.values(viewletStates).find(
    (candidate: any) => candidate.message === 'Press Desired Key Combination, Then Press Enter',
  )
  if (!defineKeyBindingState) {
    throw new Error('Define keybinding state not found')
  }
  const defineKeyBindingUid = (defineKeyBindingState as { uid: number }).uid
  await Command.execute('Viewlet.executeViewletCommand', defineKeyBindingUid, 'handleKeyDown', '9', true, true, false, false)
  await expect(defineKeyBindingInput).toHaveValue('Ctrl+Alt+9')
  await Command.execute('Viewlet.executeViewletCommand', defineKeyBindingUid, 'handleKeyDown', 'Enter', false, false, false, false)

  // assert
  await expect(defineKeyBindingWidget).toBeHidden()
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(1)
  const changedKeyBindingCell = Locator('.TableBody .TableRow:nth-of-type(1) .TableCell:nth-of-type(3)')
  const changedSourceCell = Locator('.TableBody .TableRow:nth-of-type(1) .TableCell:nth-of-type(5)')
  await expect(changedKeyBindingCell).toHaveText('Ctrl+Alt+9')
  await expect(changedSourceCell).toHaveText('User')
}
