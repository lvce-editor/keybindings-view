export const getCss = (
  columnWidth0: number,
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  resizerOneLeft: number,
  resizerTwoLeft: number,
  tableHeaderHeight: number,
  scrollBarThumbHeight: number,
  scrollBarThumbTop: number,
  recordingKeysLabelWidth: number,
): string => {
  const rules = [
    `.KeyBindings {
  --InputBadgeWidth: ${recordingKeysLabelWidth}px;
  --ResizerOneLeft: ${resizerOneLeft}px;
  --ResizerTwoLeft: ${resizerTwoLeft}px;
  --ScrollBarThumbHeight: ${scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${scrollBarThumbTop}px;
  --ScrollBarTop: ${tableHeaderHeight}px;
  --TableColumnOneWidth: ${columnWidth1}px;
  --TableColumnThreeWidth: ${columnWidth3}px;
  --TableColumnTwoWidth: ${columnWidth2}px;
  --TableColumnZeroWidth: ${columnWidth0}px;
}`,
  ]
  const css = rules.join('\n')
  return css
}
