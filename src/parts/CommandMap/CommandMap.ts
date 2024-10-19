import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'

export const commandMap = {
  'FilterKeyBindings.filterKeyBindings': FilterKeyBindings.getFilteredKeyBindings,
  'GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom': GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom,
}
