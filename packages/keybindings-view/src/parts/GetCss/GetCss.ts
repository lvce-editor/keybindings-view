export const getCss = (columnWidth1: number, columnWidth2: number, columnWidth3: number): string => {
  const rules = [
    `.KeyBindings {
  --TableColumnOneWidth: --${columnWidth1}px;
  --TableColumnTwoWidth: --${columnWidth2}px;
  --TableColumnThreeWidth: --${columnWidth3}px;
}`,
  ]
  const css = rules.join('\n')
  return css
}
