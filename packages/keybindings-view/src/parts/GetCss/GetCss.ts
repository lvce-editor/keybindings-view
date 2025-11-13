export const getCss = (
  columnWidth0: number,
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  resizerOneLeft: number,
  resizerTwoLeft: number,
  tableHeaderHeight: number,
  scrollBarHeight: number | undefined,
): string => {
  const rules = [
    `.KeyBindings {
  --TableColumnZeroWidth: ${columnWidth0}px;
  --TableColumnOneWidth: ${columnWidth1}px;
  --TableColumnTwoWidth: ${columnWidth2}px;
  --TableColumnThreeWidth: ${columnWidth3}px;
  --ResizerOneLeft: ${resizerOneLeft}px;
  --ResizerTwoLeft: ${resizerTwoLeft}px;
  --ScrollBarTop: ${tableHeaderHeight}px;
  --ScrollBarHeight: ${scrollBarHeight}px;
}`,
  ]
  const css = rules.join('\n')
  return css
}
