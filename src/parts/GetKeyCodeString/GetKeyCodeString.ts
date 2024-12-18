import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as KeyCodeString from '../KeyCodeString/KeyCodeString.ts'

export const getKeyCodeString = (keyCode: number): string => {
  switch (keyCode) {
    case KeyCode.Backspace:
      return KeyCodeString.Backspace
    case KeyCode.Tab:
      return KeyCodeString.Tab
    case KeyCode.Escape:
      return KeyCodeString.Escape
    case KeyCode.Enter:
      return KeyCodeString.Enter
    case KeyCode.Space:
      return KeyCodeString.Space
    case KeyCode.PageUp:
      return KeyCodeString.PageUp
    case KeyCode.PageDown:
      return KeyCodeString.PageDown
    case KeyCode.End:
      return KeyCodeString.End
    case KeyCode.Home:
      return KeyCodeString.Home
    case KeyCode.LeftArrow:
      return KeyCodeString.LeftArrow
    case KeyCode.UpArrow:
      return KeyCodeString.UpArrow
    case KeyCode.RightArrow:
      return KeyCodeString.RightArrow
    case KeyCode.DownArrow:
      return KeyCodeString.DownArrow
    case KeyCode.Insert:
      return KeyCodeString.Insert
    case KeyCode.Delete:
      return KeyCodeString.Delete
    case KeyCode.Digit0:
      return KeyCodeString.Digit0
    case KeyCode.Digit1:
      return KeyCodeString.Digit1
    case KeyCode.Digit2:
      return KeyCodeString.Digit2
    case KeyCode.Digit3:
      return KeyCodeString.Digit3
    case KeyCode.Digit4:
      return KeyCodeString.Digit4
    case KeyCode.Digit5:
      return KeyCodeString.Digit5
    case KeyCode.Digit6:
      return KeyCodeString.Digit6
    case KeyCode.Digit7:
      return KeyCodeString.Digit7
    case KeyCode.Digit8:
      return KeyCodeString.Digit8
    case KeyCode.Digit9:
      return KeyCodeString.Digit9
    case KeyCode.KeyA:
      return KeyCodeString.KeyA
    case KeyCode.KeyB:
      return KeyCodeString.KeyB
    case KeyCode.KeyC:
      return KeyCodeString.KeyC
    case KeyCode.KeyD:
      return KeyCodeString.KeyD
    case KeyCode.KeyE:
      return KeyCodeString.KeyE
    case KeyCode.KeyF:
      return KeyCodeString.KeyF
    case KeyCode.KeyG:
      return KeyCodeString.KeyG
    case KeyCode.KeyH:
      return KeyCodeString.KeyH
    case KeyCode.KeyI:
      return KeyCodeString.KeyI
    case KeyCode.KeyJ:
      return KeyCodeString.KeyJ
    case KeyCode.KeyK:
      return KeyCodeString.KeyK
    case KeyCode.KeyL:
      return KeyCodeString.KeyL
    case KeyCode.KeyM:
      return KeyCodeString.KeyM
    case KeyCode.KeyN:
      return KeyCodeString.KeyN
    case KeyCode.KeyO:
      return KeyCodeString.KeyO
    case KeyCode.KeyP:
      return KeyCodeString.KeyP
    case KeyCode.KeyQ:
      return KeyCodeString.KeyQ
    case KeyCode.KeyR:
      return KeyCodeString.KeyR
    case KeyCode.KeyS:
      return KeyCodeString.KeyS
    case KeyCode.KeyT:
      return KeyCodeString.KeyT
    case KeyCode.KeyU:
      return KeyCodeString.KeyU
    case KeyCode.KeyV:
      return KeyCodeString.KeyV
    case KeyCode.KeyW:
      return KeyCodeString.KeyW
    case KeyCode.KeyX:
      return KeyCodeString.KeyX
    case KeyCode.KeyY:
      return KeyCodeString.KeyY
    case KeyCode.KeyZ:
      return KeyCodeString.KeyZ
    case KeyCode.F1:
      return KeyCodeString.F1
    case KeyCode.F2:
      return KeyCodeString.F2
    case KeyCode.F3:
      return KeyCodeString.F3
    case KeyCode.F4:
      return KeyCodeString.F4
    case KeyCode.F5:
      return KeyCodeString.F5
    case KeyCode.F6:
      return KeyCodeString.F6
    case KeyCode.Backslash:
      return KeyCodeString.Backslash
    case KeyCode.Equal:
      return KeyCodeString.Equal
    case KeyCode.Comma:
      return KeyCodeString.Comma
    case KeyCode.Backquote:
      return KeyCodeString.Backquote
    case KeyCode.Plus:
      return KeyCodeString.Plus
    case KeyCode.Star:
      return KeyCodeString.Star
    case KeyCode.Minus:
      return KeyCodeString.Minus
    default:
      return KeyCodeString.Unknown
  }
}
