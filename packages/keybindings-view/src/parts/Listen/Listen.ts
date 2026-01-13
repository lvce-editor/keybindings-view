import * as CommandMap from '../CommandMap/CommandMap.ts'
import { createTextMeasurementWorkerRpc } from '../CreateTextMeasurementWorkerRpc/CreateTextMeasurementWorkerRpc.ts'
import { initializeRendererWorker } from '../InitializeRendererWorker/InitializeRendererWorker.ts'
import { registerCommands } from '../KeyBindingsStates/KeyBindingsStates.ts'
import { setFactory } from '../TextMeasurementWorker/TextMeasurementWorker.ts'

export const listen = async (): Promise<void> => {
  setFactory(createTextMeasurementWorkerRpc)
  registerCommands(CommandMap.commandMap)
  await initializeRendererWorker()
}
