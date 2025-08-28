import { expect, test } from '@jest/globals'
import * as ApplyRender from '../src/parts/ApplyRender/ApplyRender.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Diff from '../src/parts/Diff/Diff.ts'
import * as DiffModules from '../src/parts/DiffModules/DiffModules.ts'

test('diff - returns render types for changed fields', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, value: 'x', columnWidth1: 10, focus: 1, whenExpressionText: 'y', items: [{}] as any[] }
  const result = Diff.diff(oldState, newState)
  // should include entries from DiffModules.numbers when changes detected
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
  // ensure numbers are subset of known diff types
  for (const n of result) {
    expect(DiffModules.numbers.includes(n)).toBe(true)
  }
})

test('applyRender - invokes renderers and returns command arrays', () => {
  const oldState = createDefaultState()
  const newState = { ...oldState, uid: 1, value: 'a', columnWidth1: 10, columnWidth2: 20, columnWidth3: 30 }
  const diffResult = [DiffModules.numbers[0], DiffModules.numbers[1], DiffModules.numbers[2]]
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  expect(Array.isArray(commands)).toBe(true)
  expect(commands.length).toBe(diffResult.length)
})
