import * as I18nString from '../I18NString/I18NString.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'

export const keyBindings = (): string => {
  return I18nString.i18nString(UiStrings.KeyBindings)
}

export const command = (): string => {
  return I18nString.i18nString(UiStrings.Command)
}

export const when = (): string => {
  return I18nString.i18nString(UiStrings.When)
}

export const key = (): string => {
  return I18nString.i18nString(UiStrings.Key)
}

export const typeToSearchKeyBindings = (): string => {
  return I18nString.i18nString(UiStrings.TypeToSearchKeyBindings)
}

export const pressDesiredKeyCombinationThenPressEnter = (): string => {
  return I18nString.i18nString(UiStrings.PressDesiredKeyCombinationThenPressEnter)
}

export const resultsWillUpdateAsYouType = (): string => {
  return I18nString.i18nString(UiStrings.ResultsWillUpdateAsYouType)
}

export const copy = (): string => {
  return I18nString.i18nString(UiStrings.Copy)
}

export const copyCommandId = (): string => {
  return I18nString.i18nString(UiStrings.CopyCommandId)
}

export const copyCommandTitle = (): string => {
  return I18nString.i18nString(UiStrings.CopyCommandTitle)
}

export const changeKeyBinding = (): string => {
  return I18nString.i18nString(UiStrings.ChangeKeyBinding)
}

export const addKeyBinding = (): string => {
  return I18nString.i18nString(UiStrings.AddKeyBinding)
}

export const removeKeyBinding = (): string => {
  return I18nString.i18nString(UiStrings.RemoveKeyBinding)
}

export const resetKeyBinding = (): string => {
  return I18nString.i18nString(UiStrings.ResetKeyBinding)
}

export const changeWhenExpression = (): string => {
  return I18nString.i18nString(UiStrings.ChangeWhenExpression)
}

export const showSameKeyBindings = (): string => {
  return I18nString.i18nString(UiStrings.ShowSameKeyBindings)
}

export const noKeyBindingsFound = (): string => {
  return I18nString.i18nString(UiStrings.NoKeyBindingsFound)
}
