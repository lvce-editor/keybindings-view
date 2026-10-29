import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'keybindings.focus-outline-after-blur'

export const test: Test = async (api) => {
  await api.KeyBindingsEditor.open()

  const table = api.Locator('.Table')
  const wrapper = api.Locator('.TableWrapper')
  const input = api.Locator('.KeyBindingsSearchInputBox')

  await api.Command.execute('KeyBindings.focusIndex', -1)
  await api.Command.execute('KeyBindings.handleTableFocus')
  await api.expect(table).toBeFocused()
  await api.expect(wrapper).toHaveCSS('outline-style', 'solid')

  await api.Command.execute('KeyBindings.focusInput')
  await api.expect(input).toBeFocused()
  await api.expect(wrapper).toHaveCSS('outline-style', 'none')
}
