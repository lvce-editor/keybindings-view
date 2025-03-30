import type { RestoredState } from '../RestoredState/RestoredState.ts'
import * as GetSavedValue from '../GetSavedValue/GetSavedValue.ts'

export const restoreState = (savedState: unknown): RestoredState => {
  const savedValue = GetSavedValue.getSavedValue(savedState)
  return {
    savedValue,
  }
}
