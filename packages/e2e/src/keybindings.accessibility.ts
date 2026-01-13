import type { Test } from '@lvce-editor/test-with-playwright'

// manual accessibility tests

// focus input
// nvda says: "search key bindings, edit, results will update as you type, blank"
// windows narrator says: "search key bindings, edit"
// orca says: "search key bindings, entry, results will update as you type"

// No results
// nvda says: "no results"
// windows narrator says: "alert, no results found"
// orca says: "no results found"

export const name = 'viewlet.keybindings'

export const test: Test = async ({ expect, KeyBindingsEditor, Locator }) => {
  // act
  await KeyBindingsEditor.open()

  // assert
  const inputBox = Locator('.KeyBindingsSearchInputBox')
  await expect(inputBox).toBeVisible()
  await expect(inputBox).toHaveAttribute('type', 'search')
  await expect(inputBox).toHaveAttribute('placeholder', 'Type to search in keybindings')
  await expect(inputBox).toHaveAttribute('aria-description', 'Results will update as you type')
  const table = Locator('.Table')
  await expect(table).toBeVisible()
  await expect(table).toHaveAttribute('aria-label', 'KeyBindings')
}
