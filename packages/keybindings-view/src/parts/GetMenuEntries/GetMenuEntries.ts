import type { MenuEntry } from '../MenuEntry/MenuEntry.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import { menuEntrySeparator } from '../MenuEntrySeparator/MenuEntrySeparator.ts'
import * as MenuItemFlags from '../MenuItemFlags/MenuItemFlags.ts'

export const getMenuEntries = (): readonly MenuEntry[] => {
  return [
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
    menuEntrySeparator,
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
    menuEntrySeparator,
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
    menuEntrySeparator,
    {
      id: 'changeWhenExpression',
      label: KeyBindingStrings.changeWhenExpression(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.changeWhenExpression',
    },
    menuEntrySeparator,
    {
      id: 'showSameKeyBindings',
      label: KeyBindingStrings.showSameKeyBindings(),
      flags: MenuItemFlags.None,
      command: 'KeyBindings.showSameKeyBindings',
    },
  ]
}
