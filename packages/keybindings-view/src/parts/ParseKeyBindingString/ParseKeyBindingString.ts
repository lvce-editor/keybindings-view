import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import * as KeyModifier from '../KeyModifier/KeyModifier.ts'

const keyAliases: Record<string, number> = {
  '-': KeyCode.Minus,
  ',': KeyCode.Comma,
  '*': KeyCode.Star,
  '\\': KeyCode.Backslash,
  '`': KeyCode.Backquote,
  '+': KeyCode.Plus,
  '=': KeyCode.Equal,
  arrowdown: KeyCode.DownArrow,
  arrowleft: KeyCode.LeftArrow,
  arrowright: KeyCode.RightArrow,
  arrowup: KeyCode.UpArrow,
  backquote: KeyCode.Backquote,
  backslash: KeyCode.Backslash,
  backspace: KeyCode.Backspace,
  comma: KeyCode.Comma,
  delete: KeyCode.Delete,
  down: KeyCode.DownArrow,
  downarrow: KeyCode.DownArrow,
  end: KeyCode.End,
  enter: KeyCode.Enter,
  escape: KeyCode.Escape,
  home: KeyCode.Home,
  insert: KeyCode.Insert,
  left: KeyCode.LeftArrow,
  leftarrow: KeyCode.LeftArrow,
  minus: KeyCode.Minus,
  pagedown: KeyCode.PageDown,
  pageup: KeyCode.PageUp,
  plus: KeyCode.Plus,
  right: KeyCode.RightArrow,
  rightarrow: KeyCode.RightArrow,
  space: KeyCode.Space,
  tab: KeyCode.Tab,
  up: KeyCode.UpArrow,
  uparrow: KeyCode.UpArrow,
}

const getKeyCode = (part: string): number => {
  const normalized = part.toLowerCase()
  if (/^[a-z]$/.test(normalized)) {
    return (KeyCode as any)[`Key${normalized.toUpperCase()}`]
  }
  if (/^\d$/.test(normalized)) {
    return (KeyCode as any)[`Digit${normalized}`]
  }
  if (/^f([1-9]|1[0-2])$/.test(normalized)) {
    return (KeyCode as any)[normalized.toUpperCase()]
  }
  return keyAliases[normalized] || KeyCode.Unknown
}

const getModifier = (part: string): number | undefined => {
  switch (part.toLowerCase()) {
    case 'alt':
      return KeyModifier.Alt
    case 'cmd':
    case 'command':
    case 'ctrl':
    case 'ctrlcmd':
    case 'meta':
      return KeyModifier.CtrlCmd
    case 'shift':
      return KeyModifier.Shift
    default:
      return undefined
  }
}

export const parseKeyBindingString = (keyBinding: string): number => {
  const parts = keyBinding
    .split('+')
    .map((part) => part.trim())
    .filter(Boolean)
  if (keyBinding.endsWith('+')) {
    parts.push('+')
  } else if (keyBinding.endsWith(' ')) {
    parts.push('space')
  }
  let key = KeyCode.Unknown
  let modifiers = 0
  for (const part of parts) {
    const modifier = getModifier(part)
    if (modifier === undefined) {
      key = getKeyCode(part)
    } else {
      modifiers |= modifier
    }
  }
  return key === KeyCode.Unknown ? KeyCode.Unknown : modifiers | key
}
