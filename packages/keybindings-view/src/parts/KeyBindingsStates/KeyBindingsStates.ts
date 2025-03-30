import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ViewletRegistry from '../ViewletRegistry/ViewletRegistry.ts'

export const { get, set, dispose } = ViewletRegistry.create<KeyBindingsState>()
