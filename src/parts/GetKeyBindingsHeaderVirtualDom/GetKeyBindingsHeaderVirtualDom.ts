import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as HtmlInputType from '../HtmlInputType/HtmlInputType.ts'
import * as InputName from '../InputName/InputName.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsHeaderVirtualDom = () => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsHeader,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsSearchWrapper,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Input,
      className: `KeyBindingsSearchInputBox`,
      inputType: HtmlInputType.Search,
      placeholder: KeyBindingStrings.typeToSearchKeyBindings(),
      name: InputName.KeyBindingsFilter,
      onInput: DomEventListenerFunctions.HandleInput,
      ariaDescription: KeyBindingStrings.resultsWillUpdateAsYouType(),
      childCount: 0,
    },
  ]
}
