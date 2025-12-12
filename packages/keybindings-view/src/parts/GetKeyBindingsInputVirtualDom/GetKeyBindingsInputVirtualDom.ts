import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as HtmlInputType from '../HtmlInputType/HtmlInputType.ts'
import * as InputName from '../InputName/InputName.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'

export const getKeyBindingsInputVirtualDom = (placeholder: string): VirtualDomNode => {
  return {
    ariaDescription: KeyBindingStrings.resultsWillUpdateAsYouType(),
    autocomplete: 'off',
    childCount: 0,
    className: ClassNames.KeyBindingsSearchInputBox,
    inputType: HtmlInputType.Search,
    name: InputName.KeyBindingsFilter,
    onFocus: DomEventListenerFunctions.HandleInputFocus,
    onInput: DomEventListenerFunctions.HandleInput,
    onKeyDown: DomEventListenerFunctions.HandleKeyDown,
    placeholder,
    type: VirtualDomElements.Input,
  }
}
