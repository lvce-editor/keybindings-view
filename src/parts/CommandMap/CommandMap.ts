import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as FocusFirst from '../FocusFirst/FocusFirst.ts'
import * as FocusLast from '../FocusLast/FocusLast.ts'
import * as FocusPrevious from '../FocusPrevious/FocusPrevious.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as HandleResizerMove from '../HandleResizerMove/HandleResizerMove.ts'
import * as ParseKeyBindings from '../ParseKeyBindings/ParseKeyBindings.ts'
import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as Render from '../Render/Render.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'

export const commandMap = {
  // deprecated
  'FilterKeyBindings.filterKeyBindings': FilterKeyBindings.getFilteredKeyBindings,
  'GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'ParseKeyBindings.parseKeyBindings': ParseKeyBindings.parseKeyBindings,

  // new
  'KeyBindings.filter': FilterKeyBindings.getFilteredKeyBindings,
  'KeyBindings.focusFirst': FocusFirst.focusFirst,
  'KeyBindings.focusLast': FocusLast.focusLast,
  'KeyBindings.focusPrevious': FocusPrevious.focusPrevious,
  'KeyBindings.getDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'KeyBindings.getKeyBindings': GetKeyBindings.getKeyBindings,
  'KeyBindings.handleInput': HandleInput.handleInput,
  'KeyBindings.handleClick': HandleClick.handleClick,
  'KeyBindings.handleResizerMove': HandleResizerMove.handleResizerMove,
  'KeyBindings.parse': ParseKeyBindings.parseKeyBindings,
  'KeyBindings.render': Render.getRenderCommands,
  'KeyBindings.setDeltaY': SetDeltaY.setDeltaY,
  'KeyBindings.focusNext': FocusNext.focusNext,
}
