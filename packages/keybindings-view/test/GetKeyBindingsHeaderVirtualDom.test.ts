import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsHeaderVirtualDom from '../src/parts/GetKeyBindingsHeaderVirtualDom/GetKeyBindingsHeaderVirtualDom.ts'
import * as HtmlInputType from '../src/parts/HtmlInputType/HtmlInputType.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as KeyBindingStrings from '../src/parts/KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsHeaderVirtualDom', () => {
  expect(GetKeyBindingsHeaderVirtualDom.getKeyBindingsHeaderVirtualDom()).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsHeader,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsSearchWrapper,
      childCount: 2,
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
    {
      childCount: 3,
      className: 'SearchFieldButtons',
      type: 4,
    },
    {
      childCount: 1,
      className: 'SearchFieldButton',
      name: 'RecordKeys',
      title: 'RecordKeys',
      type: 1,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconRecordKeys',
      type: 4,
    },
    {
      childCount: 1,
      className: 'SearchFieldButton',
      name: 'SortByPrecdence',
      title: 'SortByPrecedence',
      type: 1,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconSortPrecedence',
      type: 4,
    },
    {
      childCount: 1,
      className: 'SearchFieldButton',
      name: 'ClearSearchInput',
      title: 'Clear Search Input',
      type: 1,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconClearAll',
      type: 4,
    },
  ])
})
