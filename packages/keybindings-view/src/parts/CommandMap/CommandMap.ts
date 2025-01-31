import * as ClearInput from '../ClearInput/ClearInput.ts'
import * as Create from '../Create/Create.ts'
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
import * as HandleResizerClick from '../HandleResizerClick/HandleResizerClick.ts'
import * as HandleResizerMove from '../HandleResizerMove/HandleResizerMove.ts'
import * as HandleWheel from '../HandleWheel/HandleWheel.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as ParseKeyBindings from '../ParseKeyBindings/ParseKeyBindings.ts'
import * as Render from '../Render/Render.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as Resize from '../Resize/Resize.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'
import * as Terminate from '../Terminate/Terminate.ts'
import * as WrapCommand from '../WrapCommand/WrapCommand.ts'

export const commandMap = {
  'KeyBindings.create': Create.create,
  'KeyBindings.focusFirst': WrapCommand.wrapCommand(FocusFirst.focusFirst),
  'KeyBindings.focusLast': WrapCommand.wrapCommand(FocusLast.focusLast),
  'KeyBindings.focusNext': WrapCommand.wrapCommand(FocusNext.focusNext),
  'KeyBindings.focusPrevious': WrapCommand.wrapCommand(FocusPrevious.focusPrevious),
  'KeyBindings.getDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'KeyBindings.getKeyBindings': GetKeyBindings.getKeyBindings,
  'KeyBindings.getMenuEntries': GetMenuEntries.getMenuEntries,
  'KeyBindings.handleClick': HandleClick.handleClick,
  'KeyBindings.handleContextMenu': WrapCommand.wrapCommand(HandleContextMenu.handleContextMenu),
  'KeyBindings.handleDoubleClick': WrapCommand.wrapCommand(HandleDoubleClick.handleDoubleClick),
  'KeyBindings.handleInput': WrapCommand.wrapCommand(HandleInput.handleInput),
  'KeyBindings.handleResizerClick': WrapCommand.wrapCommand(HandleResizerClick.handleResizerClick),
  'KeyBindings.handleResizerMove': HandleResizerMove.handleResizerMove,
  'KeyBindings.handleWheel': WrapCommand.wrapCommand(HandleWheel.handleWheel),
  'KeyBindings.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'KeyBindings.render': Render.getRenderCommands,
  'KeyBindings.clearInput': ClearInput.clearInput,
  'KeyBindings.render2': Render2.render2,
  'KeyBindings.renderEventListeners': RenderEventListeners.renderEventListeners,
  'KeyBindings.resize': WrapCommand.wrapCommand(Resize.resize),
  'KeyBindings.saveState': SaveState.saveState,
  'KeyBindings.setDeltaY': WrapCommand.wrapCommand(SetDeltaY.setDeltaY),
  'KeyBindings.terminate': Terminate.terminate,

  // deprecated
  'KeyBindings.filter': FilterKeyBindings.getFilteredKeyBindings,
  'KeyBindings.parse': ParseKeyBindings.parseKeyBindings,
  'FilterKeyBindings.filterKeyBindings': FilterKeyBindings.getFilteredKeyBindings,
  'GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'ParseKeyBindings.parseKeyBindings': ParseKeyBindings.parseKeyBindings,
}
