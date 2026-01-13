import * as CommandMap from '../CommandMap/CommandMap.ts'
import { initializeRendererWorker } from '../InitializeRendererWorker/InitializeRendererWorker.ts'
import { initializeTextMeasurementWorkerRpc } from '../InitializeTextMeasurementWorker/InitializeTextMeasurementWorker.ts'
import { registerCommands } from '../KeyBindingsStates/KeyBindingsStates.ts'

export const listen = async (): Promise<void> => {
  registerCommands(CommandMap.commandMap)
  await Promise.all([initializeRendererWorker(), initializeTextMeasurementWorkerRpc()])
}
