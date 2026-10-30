export const getCss = (
  columnWidth0: number,
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  sourceColumnWidth: number,
  resizerOneLeft: number,
  resizerTwoLeft: number,
  resizerThreeLeft: number,
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
  --ResizerThreeLeft: ${resizerThreeLeft}px;
  --ScrollBarThumbHeight: ${scrollBarThumbHeight}px;
  --ScrollBarThumbTop: ${scrollBarThumbTop}px;
  --ScrollBarTop: ${tableHeaderHeight}px;
  --TableColumnOneWidth: ${columnWidth1}px;
  --TableColumnFourWidth: ${sourceColumnWidth}px;
  --TableColumnThreeWidth: ${columnWidth3 - sourceColumnWidth}px;
  --TableColumnTwoWidth: ${columnWidth2}px;
  --TableColumnZeroWidth: ${columnWidth0}px;
}

.KeyBindings .ScrollBarThumb {
  max-height: 100%;
  top: max(0px, min(var(--ScrollBarThumbTop), calc(100% - var(--ScrollBarThumbHeight))));
}

.KeyBindings .TableColFour {
  width: var(--TableColumnFourWidth);
}

.KeyBindings .ResizerThree {
  left: var(--ResizerThreeLeft);
}

.KeyBindings .NoMatchingKeyBindingsFoundMessage {
  contain: content;
}`,
  ]
  const css = rules.join('\n')
  return css
}
