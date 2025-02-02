const commandIds = [
  'clearInput',
  'focusFirst',
  'focusLast',
  'focusNext',
  'focusPrevious',
  'handleClick',
  'handleContextMenu',
  'handleDoubleClick',
  'handleInput',
  'handleKeyDown',
  'handleResizerClick',
  'handleResizerMove',
  'handleSearchActionClick',
  'handleWheel',
  'startRecordingKeys',
  'stopRecordingKeys',
  'toggleRecordingKeys',
]

export const getCommandIds = (): readonly string[] => {
  return commandIds
}
