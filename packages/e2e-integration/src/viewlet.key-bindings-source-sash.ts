import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.key-bindings-source-sash'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  await KeyBindingsEditor.open()

  const resizers = Locator('.KeyBindings .Resizers .Resizer')
  await expect(resizers).toHaveCount(3)

  const sourceSash = Locator('.KeyBindings .ResizerThree')
  await expect(sourceSash).toBeVisible()
  await expect(sourceSash).toHaveCSS('cursor', 'ew-resize')

  const sourceHeader = Locator('.KeyBindings .TableHead .TableCell').nth(3)
  await expect(sourceHeader).toBeVisible()
  await expect(sourceHeader).toContainText('Source')
}
