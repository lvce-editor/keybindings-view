import type { ParsedKeyBinding } from '../../src/parts/ParsedKeyBinding/ParsedKeyBinding.ts'

export const makeParsedKeyBinding = (overrides: Partial<ParsedKeyBinding> = {}): ParsedKeyBinding => {
  return {
    command: 'test.command',
    commandMatches: [],
    isAlt: false,
    isCtrl: false,
    isShift: false,
    key: 'A',
    keyMatches: [],
    rawKey: 0,
    source: 'System',
    when: 0,
    ...overrides,
  }
}
