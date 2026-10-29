import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as CommandMap from '../CommandMap/CommandMap.ts'
import { registerCommands } from '../KeyBindingsStates/KeyBindingsStates.ts'

export const listen = async (): Promise<void> => {
  registerCommands(CommandMap.commandMap)
  await Promise.all([RendererWorker.initializeRendererWorkerForWorker(CommandMap.commandMap), RendererWorker.initializeTextMeasurementWorker()])
}
