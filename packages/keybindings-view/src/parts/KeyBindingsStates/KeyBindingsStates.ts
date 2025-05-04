import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const { get, set, dispose, wrapCommand } = ViewletRegistry.create<KeyBindingsState>()
