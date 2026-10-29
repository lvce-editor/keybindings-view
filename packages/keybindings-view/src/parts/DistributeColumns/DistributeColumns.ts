interface DistributeColumndsResult {
  readonly newColumnWidth1: number
  readonly newColumnWidth2: number
  readonly newColumnWidth3: number
  readonly newSourceColumnWidth: number
}

export const distributeColumns = (
  resizerDownId: number,
  contentPadding: number,
  width: number,
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  sourceColumnWidth: number,
  x: number,
  eventX: number,
): DistributeColumndsResult => {
  const minColumnWidth = 100
  const contentWidth = width - contentPadding
  if (resizerDownId === 1) {
    const newColumnWidth1 = Math.min(Math.max(eventX - contentPadding - x, minColumnWidth), contentWidth - columnWidth2 - minColumnWidth * 2)
    const newColumnWidth3 = contentWidth - newColumnWidth1 - columnWidth2
    const newSourceColumnWidth = Math.min(Math.max(sourceColumnWidth, minColumnWidth), newColumnWidth3 - minColumnWidth)
    return { newColumnWidth1, newColumnWidth2: columnWidth2, newColumnWidth3, newSourceColumnWidth }
  }
  if (resizerDownId === 2) {
    const newColumnWidth2 = Math.min(
      Math.max(eventX - contentPadding - x - columnWidth1, minColumnWidth),
      contentWidth - columnWidth1 - minColumnWidth * 2,
    )
    const newColumnWidth3 = contentWidth - newColumnWidth2 - columnWidth1
    const newSourceColumnWidth = Math.min(Math.max(sourceColumnWidth, minColumnWidth), newColumnWidth3 - minColumnWidth)
    return { newColumnWidth1: columnWidth1, newColumnWidth2, newColumnWidth3, newSourceColumnWidth }
  }
  const newSourceColumnWidth = Math.min(
    Math.max(columnWidth3 - (eventX - contentPadding - x - columnWidth1 - columnWidth2), minColumnWidth),
    columnWidth3 - minColumnWidth,
  )
  return { newColumnWidth1: columnWidth1, newColumnWidth2: columnWidth2, newColumnWidth3: columnWidth3, newSourceColumnWidth }
}
