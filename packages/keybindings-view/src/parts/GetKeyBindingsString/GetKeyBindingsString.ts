export const getKeyBindingString = (key: string, altKey: boolean, ctrlKey: boolean, shiftKey: boolean, _metaKey: boolean): string => {
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
  string += key.toUpperCase()
  return string
}
