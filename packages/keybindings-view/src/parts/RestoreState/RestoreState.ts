import type { RestoredState } from '../RestoredState/RestoredState.ts'
import * as GetSavedValue from '../GetSavedValue/GetSavedValue.ts'

export const restoreState = (savedState: unknown): RestoredState => {
  const savedValue = GetSavedValue.getSavedValue(savedState)
  // @ts-ignore
  const isRecordingKeys = savedState?.['isRecordingKeys']
  // @ts-ignore
  const isSortingByPrecedence = savedState?.['isSortingByPrecedence']
  // @ts-ignore
  const focus = savedState?.['focus']
  return {
    savedValue,
    isRecordingKeys,
    isSortingByPrecedence,
    focus,
  }
}
