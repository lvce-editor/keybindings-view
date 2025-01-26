import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export const wrapCommand = (fn: any): any => {
  const wrapped = async (uid: number, ...args: readonly any[]): Promise<void> => {
      const { newState } = KeyBindingsStates.get(uid)
      const newerState = await fn(newState, ...args)
      KeyBindingsStates.set(uid, newState, newerState)

  }
  return wrapped
}
