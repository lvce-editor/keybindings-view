export const getScrollBarOffset = (delta: number, finalDelta: number, size: number, scrollBarSize: number): number => {
  const scrollBarOffset = (delta / finalDelta) * (size - scrollBarSize)
  return scrollBarOffset
}

export const getScrollBarY = getScrollBarOffset

export const getScrollBarWidth = (width: number, longestLineWidth: number): number => {
  if (width > longestLineWidth) {
    return 0
  }
  return width ** 2 / longestLineWidth
}

interface Result {
  readonly percent: number
  readonly handleOffset: number
}

export const getNewDeltaPercent = (height: number, scrollBarHeight: number, relativeY: number): Result => {
  const halfScrollBarHeight = scrollBarHeight / 2
  if (relativeY <= halfScrollBarHeight) {
    // clicked at top
    return {
      percent: 0,
      handleOffset: relativeY,
    }
  }
  if (relativeY <= height - halfScrollBarHeight) {
    // clicked in middle
    return {
      percent: (relativeY - halfScrollBarHeight) / (height - scrollBarHeight),
      handleOffset: halfScrollBarHeight,
    }
  }
  // clicked at bottom
  return {
    percent: 1,
    handleOffset: scrollBarHeight - height + relativeY,
  }
}

export * from '../GetScrollBarSize/GetScrollBarSize.ts'
