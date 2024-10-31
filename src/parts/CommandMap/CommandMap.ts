import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as HandleResizerMove from '../HandleResizerMove/HandleResizerMove.ts'
import * as ParseKeyBindings from '../ParseKeyBindings/ParseKeyBindings.ts'
import * as Render from '../Render/Render.ts'

export const commandMap = {
  // deprecated
  'FilterKeyBindings.filterKeyBindings': FilterKeyBindings.getFilteredKeyBindings,
  'GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'ParseKeyBindings.parseKeyBindings': ParseKeyBindings.parseKeyBindings,

  // new
  'KeyBindings.filter': FilterKeyBindings.getFilteredKeyBindings,
  'KeyBindings.getDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
  'KeyBindings.handleResizerMove': HandleResizerMove.handleResizerMove,
  'KeyBindings.parse': ParseKeyBindings.parseKeyBindings,
  'KeyBindings.render': Render.getRenderCommands,
}
