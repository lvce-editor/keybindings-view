// TODO use flags enum maybe
export const getKeyModifierPrefix = (altKey: boolean, ctrlKey: boolean, shiftKey: boolean, _metaKey: boolean): string => {
  let string = ''
  if (ctrlKey) {
    string += 'Ctrl+'
  }
  if (altKey) {
    string += 'Alt+'
  }
  if (shiftKey) {
    string += 'Shift+'
  }
  return string
}
