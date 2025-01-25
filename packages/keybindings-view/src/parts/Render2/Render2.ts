import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'
import * as Render from '../Render/Render.ts'

export const render2 = (uid: number): readonly any[] => {
  const { oldState, newState } = KeyBindingsStates.get(uid)
  return Render.getRenderCommands(oldState, newState)
}
