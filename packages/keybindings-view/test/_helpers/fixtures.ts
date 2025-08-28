import type { ParsedKeyBinding } from '../../src/parts/ParsedKeyBinding/ParsedKeyBinding.ts'

export const makeParsedKeyBinding = (overrides: Partial<ParsedKeyBinding> = {}): ParsedKeyBinding => {
  return {
    key: 'A',
    command: 'test.command',
    when: 0,
    rawKey: 0,
    isCtrl: false,
    isShift: false,
    commandMatches: [],
    keyMatches: [],
    ...overrides,
  }
}


