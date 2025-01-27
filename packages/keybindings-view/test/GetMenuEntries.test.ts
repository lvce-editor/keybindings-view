import { expect, test } from '@jest/globals'
import * as GetMenuEntries from '../src/parts/GetMenuEntries/GetMenuEntries.ts'
import * as KeyBindingStrings from '../src/parts/KeyBindingStrings/KeyBindingStrings.ts'
import * as MenuItemFlags from '../src/parts/MenuItemFlags/MenuItemFlags.ts'

test('getMenuEntries', () => {
  expect(GetMenuEntries.getMenuEntries()).toEqual([
    {
      id: 'copy',
      label: KeyBindingStrings.copy(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.copy',
    },
    {
      id: 'copyCommandId',
      label: KeyBindingStrings.copyCommandId(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.copyCommandId',
    },
    {
      id: 'copyCommandTitle',
      label: KeyBindingStrings.copyCommandTitle(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.copyCommandTitle',
    },
    {
      id: 'changeKeyBinding',
      label: KeyBindingStrings.changeKeyBinding(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.changeKeyBinding',
    },
    {
      id: 'addKeyBinding',
      label: KeyBindingStrings.addKeyBinding(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.addKeyBinding',
    },
    {
      id: 'removeKeyBinding',
      label: KeyBindingStrings.removeKeyBinding(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.removeKeyBinding',
    },
    {
      id: 'resetKeyBinding',
      label: KeyBindingStrings.resetKeyBinding(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.resetKeyBinding',
    },
    {
      id: 'changeWhenExpression',
      label: KeyBindingStrings.changeWhenExpression(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.changeWhenExpression',
    },
    {
      id: 'showSameKeyBindings',
      label: KeyBindingStrings.showSameKeyBindings(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.showSameKeyBindings',
    },
  ])
})
