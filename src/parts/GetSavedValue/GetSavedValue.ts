export const getSavedValue = (savedState: any): string => {
  if (savedState && savedState.value) {
    return savedState.value
  }
  return ''
}
