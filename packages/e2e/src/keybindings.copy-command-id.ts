import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.copy-command-id'

export const test: Test = async ({ ClipBoard, KeyBindingsEditor }) => {
  // arrange
  await ClipBoard.enableMemoryClipBoard()
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('ActivityBar.focusNext')
  await KeyBindingsEditor.focusFirst()

  // act
  await KeyBindingsEditor.copyCommandId()

  // assert
  await ClipBoard.shouldHaveText('ActivityBar.focusNext')
}
