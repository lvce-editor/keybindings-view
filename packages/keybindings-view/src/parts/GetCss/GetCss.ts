export const getCss = (columnWidth0: number, columnWidth1: number, columnWidth2: number, columnWidth3: number): string => {
  const rules = [
    `.KeyBindings {
  --TableColumnZeroWidth: --${columnWidth0}px;
  --TableColumnOneWidth: --${columnWidth1}px;
  --TableColumnTwoWidth: --${columnWidth2}px;
  --TableColumnThreeWidth: --${columnWidth3}px;
}`,
  ]
  const css = rules.join('\n')
  return css
}
