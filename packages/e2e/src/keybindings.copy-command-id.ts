import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.copy-command-id'

export const test: Test = async ({ KeyBindingsEditor, ClipBoard }) => {
  // arrange
  await ClipBoard.enableMemoryClipBoard()
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('About.focus')
  await KeyBindingsEditor.focusFirst()

  // act
  await KeyBindingsEditor.copyCommandId()

  // assert
  await ClipBoard.shouldHaveText('About.focusNext')
}
