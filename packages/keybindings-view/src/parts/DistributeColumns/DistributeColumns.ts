interface DistributeColumndsResult {
  readonly newColumnWidth1: number
  readonly newColumnWidth2: number
  readonly newColumnWidth3: number
}

export const distributeColumns = (
  resizerDownId: number,
  contentPadding: number,
  width: number,
  columnWidth1: number,
  columnWidth2: number,
  x: number,
  eventX: number,
): DistributeColumndsResult => {
  const minColumnWidth = 100
  const contentWidth = width - contentPadding
  if (resizerDownId === 1) {
    const newColumnWidth1 = Math.max(eventX - contentPadding - x, minColumnWidth)
    const newColumnWidth3 = contentWidth - newColumnWidth1 - columnWidth2
    return {
      newColumnWidth1: newColumnWidth1,
      newColumnWidth2: columnWidth2,
      newColumnWidth3: newColumnWidth3,
    }
  }
  const newColumnWidth3 = Math.max(contentWidth - (eventX - contentPadding - x), minColumnWidth)
  const newColumnWidth2 = contentWidth - newColumnWidth3 - columnWidth1
  return {
    newColumnWidth1: columnWidth1,
    newColumnWidth2: newColumnWidth2,
    newColumnWidth3: newColumnWidth3,
  }
}
