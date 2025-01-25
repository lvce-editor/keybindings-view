import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as FocusFirst from '../FocusFirst/FocusFirst.ts'
import * as FocusLast from '../FocusLast/FocusLast.ts'
import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as FocusPrevious from '../FocusPrevious/FocusPrevious.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as GetMenuEntries from '../GetMenuEntries/GetMenuEntries.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as HandleContextMenu from '../HandleContextMenu/HandleContextMenu.ts'
import * as HandleDoubleClick from '../HandleDoubleClick/HandleDoubleClick.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as HandleResizerMove from '../HandleResizerMove/HandleResizerMove.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as ParseKeyBindings from '../ParseKeyBindings/ParseKeyBindings.ts'
import * as Render from '../Render/Render.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'

export const commandMap = {
  // new
  'KeyBindings.filter': FilterKeyBindings.getFilteredKeyBindings,
  'KeyBindings.focusFirst': FocusFirst.focusFirst,
  'KeyBindings.focusLast': FocusLast.focusLast,
  'KeyBindings.focusNext': FocusNext.focusNext,
  'KeyBindings.focusPrevious': FocusPrevious.focusPrevious,
  'KeyBindings.getDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'KeyBindings.getKeyBindings': GetKeyBindings.getKeyBindings,
  'KeyBindings.getMenuEntries': GetMenuEntries.getMenuEntries,
  'KeyBindings.handleClick': HandleClick.handleClick,
  'KeyBindings.handleContextMenu': HandleContextMenu.handleContextMenu,
  'KeyBindings.handleDoubleClick': HandleDoubleClick.handleDoubleClick,
  'KeyBindings.handleInput': HandleInput.handleInput,
  'KeyBindings.handleResizerMove': HandleResizerMove.handleResizerMove,
  'KeyBindings.loadContent': LoadContent.loadContent,
  'KeyBindings.parse': ParseKeyBindings.parseKeyBindings,
  'KeyBindings.render': Render.getRenderCommands,
  'KeyBindings.saveState': SaveState.saveState,
  'KeyBindings.setDeltaY': SetDeltaY.setDeltaY,

  // deprecated
  'FilterKeyBindings.filterKeyBindings': FilterKeyBindings.getFilteredKeyBindings,
  'GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'ParseKeyBindings.parseKeyBindings': ParseKeyBindings.parseKeyBindings,
}
