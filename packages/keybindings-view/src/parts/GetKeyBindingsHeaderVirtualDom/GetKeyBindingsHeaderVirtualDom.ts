import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetSearchFieldActions from '../GetSearchFieldActions/GetSearchFieldActions.ts'
import * as GetSearchFieldButtonVirtualDom from '../GetSearchFieldButtonVirtualDom/GetSearchFieldButtonVirtualDom.ts'
import * as HtmlInputType from '../HtmlInputType/HtmlInputType.ts'
import * as InputName from '../InputName/InputName.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as GetRecordingKeysBadgeVirtualDom from '../GetRecordingKeysBadgeVirtualDom/GetRecordingKeysBadgeVirtualDom.ts'

export const getKeyBindingsHeaderVirtualDom = (isRecordingKeys: boolean): readonly VirtualDomNode[] => {
  const actions = GetSearchFieldActions.getSearchFieldActions(isRecordingKeys)
  const childCount = isRecordingKeys ? 3 : 2
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsHeader,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsSearchWrapper,
      childCount,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.KeyBindingsSearchInputBox,
      inputType: HtmlInputType.Search,
      placeholder: KeyBindingStrings.typeToSearchKeyBindings(),
      name: InputName.KeyBindingsFilter,
      onInput: DomEventListenerFunctions.HandleInput,
      ariaDescription: KeyBindingStrings.resultsWillUpdateAsYouType(),
      childCount: 0,
      autocomplete: 'off',
    },
    ...GetRecordingKeysBadgeVirtualDom.getRecordingKeysBadgeVirtualDom(isRecordingKeys),
    {
      type: VirtualDomElements.Div,
      className: 'SearchFieldButtons',
      childCount: actions.length,
    },
    ...actions.flatMap(GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom),
  ]
}
