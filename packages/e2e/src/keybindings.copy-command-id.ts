import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.copy-command-id'

export const skip = 1

export const test: Test = async ({ KeyBindingsEditor, Command, ClipBoard }) => {
  // arrange
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')
  await KeyBindingsEditor.focusFirst()

  // act
  await Command.execute('KeyBindings.copyCommandId')

  // assert
  // @ts-ignore
  await ClipBoard.shouldHaveText('About.focus')
}
