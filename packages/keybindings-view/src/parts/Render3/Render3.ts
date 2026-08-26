import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const render3 = (uid: number, diffResult: readonly number[]): readonly any[] | Promise<readonly any[]> => {
  if (diffResult.length === 0) {
    return []
  }
  const { newState, oldState } = KeyBindingsStates.get(uid)
  KeyBindingsStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  if (!RendererProcess.isConnected()) return commands
  return renderDirect(uid, commands)
}

const renderDirect = async (uid: number, commands: readonly any[]): Promise<readonly any[]> => {
  const transactionId = await RendererProcess.invoke('Viewlet.queueCommands', uid, commands)
  return [['Viewlet.commitPending', uid, transactionId]]
}
