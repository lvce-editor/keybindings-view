import { expect, test } from '@jest/globals'
import * as WithEmptyMatches from '../src/parts/WithEmptyMatches/WithEmptyMatches.ts'

type KB = {
  readonly command: string
  readonly key: string
  readonly commandMatches?: readonly number[]
  readonly keyMatches?: readonly number[]
}

test('withEmptyMatches - empties matches and preserves other fields', () => {
  const input: readonly KB[] = [
    {
      command: 'a',
      key: 'A',
      commandMatches: [1, 2],
      keyMatches: [3],
    },
    { command: 'b', key: 'B' },
  ]
  const output = WithEmptyMatches.withEmptyMatches(input as any)
  expect(output).toHaveLength(2)
  expect(output[0].command).toBe('a')
  expect(output[0].key).toBe('A')
  expect(Array.isArray((output as any)[0].commandMatches)).toBe(true)
  expect((output as any)[0].commandMatches).toHaveLength(0)
  expect(Array.isArray((output as any)[0].keyMatches)).toBe(true)
  expect((output as any)[0].keyMatches).toHaveLength(0)
  expect((output as any)[1].commandMatches).toEqual([])
  expect((output as any)[1].keyMatches).toEqual([])
})
