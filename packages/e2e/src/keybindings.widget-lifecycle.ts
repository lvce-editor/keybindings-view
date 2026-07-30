import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.widget-lifecycle'

export const test: Test = async ({ expect, FileSystem, KeyBindingsEditor, Locator, Main }) => {
  // arrange
  await KeyBindingsEditor.open()
  const keyBindingsView = Locator('.Viewlet.KeyBindings')
  await expect(keyBindingsView).toBeVisible()
  const input = Locator('.KeyBindingsSearchInputBox')
  await expect(input).toBeVisible()
  await KeyBindingsEditor.handleInput('About.focus')

  // act
  await KeyBindingsEditor.handleDoubleClick(70, 70)

  // assert
  const defineKeyBindingWidget = Locator('.Viewlet.DefineKeyBinding')
  await expect(defineKeyBindingWidget).toBeVisible()

  // act - switch away from the owning view
  const tmpDir = await FileSystem.getTmpDir()
  const file = `${tmpDir}/keybindings-widget-lifecycle.txt`
  await FileSystem.writeFile(file, 'content')
  await Main.openUri(file)

  // assert - switching away removes the widget
  await expect(defineKeyBindingWidget).toBeHidden()

  // act - remount the owning view and open a new widget
  await Main.selectTab(0, 0)
  await KeyBindingsEditor.handleDoubleClick(70, 70)

  // assert
  await expect(defineKeyBindingWidget).toBeVisible()

  // act - dispose the owning view
  await Main.closeAllEditors()

  // assert
  await expect(defineKeyBindingWidget).toBeHidden()
}
