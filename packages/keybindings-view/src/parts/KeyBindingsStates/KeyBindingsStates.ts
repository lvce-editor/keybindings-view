import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ViewletRegistry from '@lvce-editor/viewlet-registry'

export const { get, set, dispose, wrapCommand } = ViewletRegistry.create<KeyBindingsState>()
