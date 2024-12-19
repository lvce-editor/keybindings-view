export const getMaxVisibleItems = (height: number, searchHeaderHeight: number, tableHeaderHeight: number, rowHeight: number): number => {
  return Math.floor((height - searchHeaderHeight - tableHeaderHeight) / rowHeight)
}
