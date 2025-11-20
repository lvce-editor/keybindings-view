import type { RestoredState } from '../RestoredState/RestoredState.ts'
import * as GetSavedValue from '../GetSavedValue/GetSavedValue.ts'
import { hasProperty } from '../HasProperty/HasProperty.ts'

const getSavedIsRecordingKeys = (savedState: unknown): boolean => {
  if (hasProperty(savedState, 'isRecordingKeys') && typeof savedState.isRecordingKeys === 'boolean') {
    return savedState.isRecordingKeys
  }
  return false
}

const getSavedIsSortingByPrecedence = (savedState: unknown): boolean => {
  if (hasProperty(savedState, 'isSortingByPrecedence') && typeof savedState.isSortingByPrecedence === 'boolean') {
    return savedState.isSortingByPrecedence
  }
  return false
}

const getSavedFocus = (savedState: unknown): number => {
  if (hasProperty(savedState, 'focus') && typeof savedState.focus === 'number') {
    return savedState.focus
  }
  return 0
}

const getSavedSelectedIndex = (savedState: unknown): number => {
  if (hasProperty(savedState, 'selectedIndex') && typeof savedState.selectedIndex === 'number') {
    return savedState.selectedIndex
  }
  return -1
}

export const restoreState = (savedState: unknown): RestoredState => {
  const savedValue = GetSavedValue.getSavedValue(savedState)
  const isRecordingKeys = getSavedIsRecordingKeys(savedState)
  const isSortingByPrecedence = getSavedIsSortingByPrecedence(savedState)
  const focus = getSavedFocus(savedState)
  const selectedIndex = getSavedSelectedIndex(savedState)
  return {
    focus,
    isRecordingKeys,
    isSortingByPrecedence,
    savedValue,
    selectedIndex,
  }
}
