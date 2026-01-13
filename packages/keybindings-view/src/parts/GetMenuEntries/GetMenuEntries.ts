import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import { menuEntrySeparator } from '../MenuEntrySeparator/MenuEntrySeparator.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntries = (): readonly MenuEntry[] => {
  return [
    {
      command: 'KeyBindings.copy',
      flags: MenuItemFlags.None,
      id: 'copy',
      label: KeyBindingStrings.copy(),
    },
    {
      command: 'KeyBindings.copyCommandId',
      flags: MenuItemFlags.None,
      id: 'copyCommandId',
      label: KeyBindingStrings.copyCommandId(),
    },
    {
      command: 'KeyBindings.copyCommandTitle',
      flags: MenuItemFlags.None,
      id: 'copyCommandTitle',
      label: KeyBindingStrings.copyCommandTitle(),
    },
    menuEntrySeparator,
    {
      command: 'KeyBindings.changeKeyBinding',
      flags: MenuItemFlags.None,
      id: 'changeKeyBinding',
      label: KeyBindingStrings.changeKeyBinding(),
    },
    {
      command: 'KeyBindings.addKeyBinding',
      flags: MenuItemFlags.None,
      id: 'addKeyBinding',
      label: KeyBindingStrings.addKeyBinding(),
    },
    menuEntrySeparator,
    {
      command: 'KeyBindings.removeKeyBinding',
      flags: MenuItemFlags.None,
      id: 'removeKeyBinding',
      label: KeyBindingStrings.removeKeyBinding(),
    },
    {
      command: 'KeyBindings.resetKeyBinding',
      flags: MenuItemFlags.None,
      id: 'resetKeyBinding',
      label: KeyBindingStrings.resetKeyBinding(),
    },
    menuEntrySeparator,
    {
      command: 'KeyBindings.changeWhenExpression',
      flags: MenuItemFlags.None,
      id: 'changeWhenExpression',
      label: KeyBindingStrings.changeWhenExpression(),
    },
    menuEntrySeparator,
    {
      command: 'KeyBindings.showSameKeyBindings',
      flags: MenuItemFlags.None,
      id: 'showSameKeyBindings',
      label: KeyBindingStrings.showSameKeyBindings(),
    },
  ]
}
