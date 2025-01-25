import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as FocusFirst from '../FocusFirst/FocusFirst.ts'
import * as FocusLast from '../FocusLast/FocusLast.ts'
import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as FocusPrevious from '../FocusPrevious/FocusPrevious.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
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
import * as WrapCommand from '../WrapCommand/WrapCommand.ts'

export const commandMap = {
  // new
  'KeyBindings.filter': FilterKeyBindings.getFilteredKeyBindings,
  'KeyBindings.focusFirst': WrapCommand.wrapCommand(FocusFirst.focusFirst),
  'KeyBindings.focusLast': WrapCommand.wrapCommand(FocusLast.focusLast),
  'KeyBindings.focusNext': WrapCommand.wrapCommand(FocusNext.focusNext),
  'KeyBindings.focusPrevious': WrapCommand.wrapCommand(FocusPrevious.focusPrevious),
  'KeyBindings.getDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'KeyBindings.getKeyBindings': GetKeyBindings.getKeyBindings,
  'KeyBindings.handleClick': WrapCommand.wrapCommand(HandleClick.handleClick),
  'KeyBindings.handleContextMenu': WrapCommand.wrapCommand(HandleContextMenu.handleContextMenu),
  'KeyBindings.handleDoubleClick': WrapCommand.wrapCommand(HandleDoubleClick.handleDoubleClick),
  'KeyBindings.handleInput': WrapCommand.wrapCommand(HandleInput.handleInput),
  'KeyBindings.handleResizerMove': WrapCommand.wrapCommand(HandleResizerMove.handleResizerMove),
  'KeyBindings.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'KeyBindings.render': Render.getRenderCommands,
  'KeyBindings.saveState': SaveState.saveState,
  'KeyBindings.setDeltaY': WrapCommand.wrapCommand(SetDeltaY.setDeltaY),

  // deprecated
  'KeyBindings.parse': ParseKeyBindings.parseKeyBindings,
  'FilterKeyBindings.filterKeyBindings': FilterKeyBindings.getFilteredKeyBindings,
  'GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'ParseKeyBindings.parseKeyBindings': ParseKeyBindings.parseKeyBindings,
}
