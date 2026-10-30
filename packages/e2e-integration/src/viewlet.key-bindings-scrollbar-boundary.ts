import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.key-bindings-scrollbar-boundary'

export const test: Test = async ({ Command, expect, KeyBindingsEditor, Locator }) => {
  const keyBindings = Array.from({ length: 50 }, (_, index) => ({
    command: `test.scroll-boundary.${String(index).padStart(3, '0')}`,
    key: 'ctrl+shift+p',
  }))
  await Command.execute('FileSystem.writeFile', 'app://keybindings.json', JSON.stringify(keyBindings))
  await KeyBindingsEditor.open()
  await KeyBindingsEditor.handleInput('test.scroll-boundary.')

  const lastRow = Locator('.KeyBindings .TableBody .TableRow:last-child')
  const scrollbar = Locator('.KeyBindings .ScrollBar')
  const thumb = scrollbar.locator('.ScrollBarThumb')
  await expect(scrollbar).toBeVisible()
  await expect(scrollbar).toBeVisible()
  await expect(thumb).toHaveCSS('top', '0px')

  await KeyBindingsEditor.handleWheel(0, 100_000)
  await expect(lastRow).toContainText('test.scroll-boundary.049')
  await expect(thumb).toHaveCSS('bottom', '0px')

  await KeyBindingsEditor.handleWheel(0, 100_000)
  await expect(lastRow).toContainText('test.scroll-boundary.049')
  await expect(thumb).toHaveCSS('bottom', '0px')
}
