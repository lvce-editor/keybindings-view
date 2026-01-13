import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const { dispose, get, getCommandIds, registerCommands, set, wrapCommand, wrapGetter } = ViewletRegistry.create<KeyBindingsState>()
