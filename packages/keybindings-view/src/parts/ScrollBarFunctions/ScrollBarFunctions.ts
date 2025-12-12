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
  readonly handleOffset: number
  readonly percent: number
}

export const getNewDeltaPercent = (height: number, scrollBarHeight: number, relativeY: number): Result => {
  const halfScrollBarHeight = scrollBarHeight / 2
  if (relativeY <= halfScrollBarHeight) {
    // clicked at top
    return {
      handleOffset: relativeY,
      percent: 0,
    }
  }
  if (relativeY <= height - halfScrollBarHeight) {
    // clicked in middle
    return {
      handleOffset: halfScrollBarHeight,
      percent: (relativeY - halfScrollBarHeight) / (height - scrollBarHeight),
    }
  }
  // clicked at bottom
  return {
    handleOffset: scrollBarHeight - height + relativeY,
    percent: 1,
  }
}

export * from '../GetScrollBarSize/GetScrollBarSize.ts'
