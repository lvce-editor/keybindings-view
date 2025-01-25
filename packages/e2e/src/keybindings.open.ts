import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.open'

export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect }) => {
  // arrange

  // act
  await Main.openUri('app://keybindings.json')

  // assert

  // TODO
}
