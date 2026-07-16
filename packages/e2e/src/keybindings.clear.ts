import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.clear'

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
  const clearButton = Locator('[name="ClearSearchInput"]')
  await expect(clearButton).toHaveClass('SearchFieldButton')

  // act
  await KeyBindingsEditor.clearInput()

  // assert
  await expect(input).toHaveValue('')
  await expect(clearButton).toHaveClass('SearchFieldButton SearchFieldButtonDisabled')
  const firstCommand = Locator('.TableBody .TableRow').first().locator('.TableCell').nth(1)
  await expect(firstCommand).toHaveText('About.handleClickClose')
}
