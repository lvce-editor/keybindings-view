import { terminate } from '@lvce-editor/viewlet-registry'
import * as AddKeyBinding from '../AddKeyBinding/AddKeyBinding.ts'
import * as ChangeWhenExpression from '../ChangeWhenExpression/ChangeWhenExpression.ts'
import * as ClearInput from '../ClearInput/ClearInput.ts'
import * as Copy from '../Copy/Copy.ts'
import * as CopyCommandId from '../CopyCommandId/CopyCommandId.ts'
import * as CopyCommandTitle from '../CopyCommandTitle/CopyCommandTitle.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as FocusFirst from '../FocusFirst/FocusFirst.ts'
import * as FocusInput from '../FocusInput/FocusInput.ts'
import * as FocusLast from '../FocusLast/FocusLast.ts'
import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as FocusPrevious from '../FocusPrevious/FocusPrevious.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as GetMenuEntries from '../GetMenuEntries/GetMenuEntries.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as HandleContextMenu from '../HandleContextMenu/HandleContextMenu.ts'
import * as HandleDoubleClick from '../HandleDoubleClick/HandleDoubleClick.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as HandleInputFocus from '../HandleInputFocus/HandleInputFocus.ts'
import * as HandleKeyDown from '../HandleKeyDown/HandleKeyDown.ts'
import * as HandleResizerClick from '../HandleResizerClick/HandleResizerClick.ts'
import * as HandleResizerMove from '../HandleResizerMove/HandleResizerMove.ts'
import * as HandleSearchActionClick from '../HandleSearchActionClick/HandleSearchActionClick.ts'
import * as HandleWheel from '../HandleWheel/HandleWheel.ts'
import { handleWhenexpressionInputBlur } from '../HandleWhenExpressionInputBlur/HandleWhenExpressionInputBlur.ts'
import * as WrapCommand from '../KeyBindingsStates/KeyBindingsStates.ts'
import { getCommandIds } from '../KeyBindingsStates/KeyBindingsStates.ts'
import { focusIndex } from '../ListFocusIndex/ListFocusIndex.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as RemoveKeyBinding from '../RemoveKeyBinding/RemoveKeyBinding.ts'
import * as Render3 from '../Render3/Render3.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as ResetKeyBinding from '../ResetKeyBinding/ResetKeyBinding.ts'
import * as Resize from '../Resize/Resize.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'
import { showSameKeyBindings } from '../ShowSameKeyBindings/ShowSameKeyBindings.ts'
import * as SortByPrecedence from '../SortByPrecedence/SortByPrecedence.ts'
import * as StartRecordingKeys from '../StartRecordingKeys/StartRecordingKeys.ts'
import * as StopRecordingKeys from '../StopRecordingKeys/StopRecordingKeys.ts'
import * as ToggleRecordingKeys from '../ToggleRecordingKeys/ToggleRecordingKeys.ts'

export const commandMap = {
  'KeyBindings.addKeyBinding': WrapCommand.wrapCommand(AddKeyBinding.addKeyBinding),
  'KeyBindings.changeWhenExpression': WrapCommand.wrapCommand(ChangeWhenExpression.changeWhenExpression),
  'KeyBindings.clearInput': WrapCommand.wrapCommand(ClearInput.clearInput),
  'KeyBindings.focusIndex': WrapCommand.wrapCommand(focusIndex),
  'KeyBindings.showSameKeyBindings': WrapCommand.wrapCommand(showSameKeyBindings),
  'KeyBindings.copy': WrapCommand.wrapCommand(Copy.copy),
  'KeyBindings.copyCommandId': WrapCommand.wrapCommand(CopyCommandId.copyCommandId),
  'KeyBindings.copyCommandTitle': WrapCommand.wrapCommand(CopyCommandTitle.copyCommandTitle),
  'KeyBindings.create': Create.create,
  'KeyBindings.diff2': Diff2.diff2,
  'KeyBindings.dispose': Dispose.dispose,
  'KeyBindings.focusFirst': WrapCommand.wrapCommand(FocusFirst.focusFirst),
  'KeyBindings.focusInput': WrapCommand.wrapCommand(FocusInput.focusInput),
  'KeyBindings.focusLast': WrapCommand.wrapCommand(FocusLast.focusLast),
  'KeyBindings.focusNext': WrapCommand.wrapCommand(FocusNext.focusNext),
  'KeyBindings.focusPrevious': WrapCommand.wrapCommand(FocusPrevious.focusPrevious),
  'KeyBindings.getCommandIds': getCommandIds,
  'KeyBindings.getKeyBindings': GetKeyBindings.getKeyBindings,
  'KeyBindings.getMenuEntries': GetMenuEntries.getMenuEntries,
  'KeyBindings.handleClick': WrapCommand.wrapCommand(HandleClick.handleClick),
  'KeyBindings.handleContextMenu': WrapCommand.wrapCommand(HandleContextMenu.handleContextMenu),
  'KeyBindings.handleDoubleClick': WrapCommand.wrapCommand(HandleDoubleClick.handleDoubleClick),
  'KeyBindings.handleInput': WrapCommand.wrapCommand(HandleInput.handleInput),
  'KeyBindings.handleInputFocus': WrapCommand.wrapCommand(HandleInputFocus.handleInputFocus),
  'KeyBindings.handleKeyDown': WrapCommand.wrapCommand(HandleKeyDown.handleKeyDown),
  'KeyBindings.handleResizerClick': WrapCommand.wrapCommand(HandleResizerClick.handleResizerClick),
  'KeyBindings.handleResizerMove': WrapCommand.wrapCommand(HandleResizerMove.handleResizerMove),
  'KeyBindings.handleSearchActionClick': WrapCommand.wrapCommand(HandleSearchActionClick.handleSearchActionClick),
  'KeyBindings.handleWheel': WrapCommand.wrapCommand(HandleWheel.handleWheel),
  'KeyBindings.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'KeyBindings.removeKeyBinding': WrapCommand.wrapCommand(RemoveKeyBinding.removeKeyBinding),
  'KeyBindings.render3': Render3.render3,
  'KeyBindings.renderEventListeners': RenderEventListeners.renderEventListeners,
  'KeyBindings.resetKeyBinding': WrapCommand.wrapCommand(ResetKeyBinding.resetKeyBinding),
  'KeyBindings.resize': WrapCommand.wrapCommand(Resize.resize),
  'KeyBindings.saveState': WrapCommand.wrapGetter(SaveState.saveState),
  'KeyBindings.setDeltaY': WrapCommand.wrapCommand(SetDeltaY.setDeltaY),
  'KeyBindings.sortByPrecedence': WrapCommand.wrapCommand(SortByPrecedence.sortByPrecedence),
  'KeyBindings.startRecordingKeys': WrapCommand.wrapCommand(StartRecordingKeys.startRecordingKeys),
  'KeyBindings.stopRecordingKeys': WrapCommand.wrapCommand(StopRecordingKeys.stopRecordingKeys),
  'KeyBindings.handleWhenexpressionInputBlur': WrapCommand.wrapCommand(handleWhenexpressionInputBlur),
  'KeyBindings.terminate': terminate,
  'KeyBindings.toggleRecordingKeys': WrapCommand.wrapCommand(ToggleRecordingKeys.toggleRecordingKeys),
}
