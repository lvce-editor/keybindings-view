import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsHeaderVirtualDom from '../src/parts/GetKeyBindingsHeaderVirtualDom/GetKeyBindingsHeaderVirtualDom.ts'
import * as HtmlInputType from '../src/parts/HtmlInputType/HtmlInputType.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as KeyBindingStrings from '../src/parts/KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsHeaderVirtualDom', () => {
  const isRecordingKeys = false
  const sort = false
  const hasValue = true
  const placeholder = 'Type to search in keybindings'
  expect(GetKeyBindingsHeaderVirtualDom.getKeyBindingsHeaderVirtualDom(isRecordingKeys, sort, hasValue, placeholder)).toEqual([
    {
      childCount: 1,
      className: ClassNames.KeyBindingsHeader,
      onContextMenu: 14,
      role: 'none',
      type: VirtualDomElements.Div,
    },
    {
      ariaLabel: 'KeyBindings',
      childCount: 2,
      className: ClassNames.KeyBindingsSearchWrapper,
      role: 'search',
      type: VirtualDomElements.Div,
    },
    {
      ariaDescription: KeyBindingStrings.resultsWillUpdateAsYouType(),
      autocomplete: 'off',
      childCount: 0,
      className: ClassNames.KeyBindingsSearchInputBox,
      inputType: HtmlInputType.Search,
      name: InputName.KeyBindingsFilter,
      onFocus: DomEventListenerFunctions.HandleInputFocus,
      onInput: DomEventListenerFunctions.HandleInput,
      onKeyDown: DomEventListenerFunctions.HandleKeyDown,
      placeholder: KeyBindingStrings.typeToSearchKeyBindings(),
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: 'KeyBindingsSearchActions',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 3,
      className: 'SearchFieldButtons KeyBindingsSearchButtons',
      type: 4,
    },
    {
      ariaChecked: 'false',
      childCount: 1,
      className: 'SearchFieldButton',
      name: 'RecordKeys',
      onClick: DomEventListenerFunctions.HandleSearchActionClick,
      role: 'checkbox',
      title: 'Record keys',
      type: 1,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconRecordKeys',
      type: 4,
    },
    {
      ariaChecked: 'false',
      childCount: 1,
      className: 'SearchFieldButton',
      name: 'SortByPrecdence',
      onClick: DomEventListenerFunctions.HandleSearchActionClick,
      role: 'checkbox',
      title: 'Sort By Precedence',
      type: 1,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconSortPrecedence',
      type: 4,
    },
    {
      ariaChecked: 'false',
      childCount: 1,
      className: 'SearchFieldButton',
      name: 'ClearSearchInput',
      onClick: DomEventListenerFunctions.HandleSearchActionClick,
      role: 'checkbox',
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
