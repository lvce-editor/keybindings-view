import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.add-and-remove-keybinding'

export const test: Test = async ({ Command, expect, KeyBindingsEditor, Locator, Main }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.handleClickClose')
  await KeyBindingsEditor.focusFirst()

  // act
  await KeyBindingsEditor.addKeyBinding()
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
  await Command.execute('Timeout.sleep', 1000)

  // assert
  await expect(defineKeyBindingWidget).toBeHidden()
  await Main.closeAllEditors()
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.handleClickClose')
  const rows = Locator('.TableBody .TableRow')
  await expect(rows).toHaveCount(2)
  const userKeyBindingCell = Locator('.TableBody .TableRow:nth-of-type(2) .TableCell:nth-of-type(3)')
  const userSourceCell = Locator('.TableBody .TableRow:nth-of-type(2) .TableCell:nth-of-type(5)')
  await expect(userKeyBindingCell).toHaveText('Ctrl+Alt+9')
  await expect(userSourceCell).toHaveText('User')

  // act
  await KeyBindingsEditor.focusLast()
  await KeyBindingsEditor.removeKeyBinding()
  await Command.execute('Timeout.sleep', 1000)
  await Main.closeAllEditors()
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.handleClickClose')

  // assert
  await expect(rows).toHaveCount(1)
  const remainingRow = rows.nth(0)
  const remainingKeyBindingCell = remainingRow.locator('.TableCell').nth(2)
  const remainingSourceCell = remainingRow.locator('.TableCell').nth(4)
  await expect(remainingKeyBindingCell).toHaveText('Escape')
  await expect(remainingSourceCell).toHaveText('System')
}
