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
  const contentWidth = width - contentPadding
  if (resizerDownId === 1) {
    const newColumnWidth1 = eventX - contentPadding - x
    const newColumnWidth3 = contentWidth - newColumnWidth1 - columnWidth2
    return {
      newColumnWidth1: newColumnWidth1,
      newColumnWidth3: newColumnWidth3,
      newColumnWidth2: columnWidth2,
    }
  }
  const newColumnWidth3 = contentWidth - (eventX - contentPadding - x)
  const newColumnWidth2 = contentWidth - newColumnWidth3 - columnWidth1
  return {
    newColumnWidth1: columnWidth1,
    newColumnWidth2: newColumnWidth2,
    newColumnWidth3: newColumnWidth3,
  }
}
