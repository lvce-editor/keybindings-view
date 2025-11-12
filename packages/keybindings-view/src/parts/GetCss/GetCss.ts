export const getCss = (columnWidth1: number, columnWidth2: number, columnWidth3: number): string => {
  const rules = [
    `.KeyBindings {
  --TableColumnOneWidth: var(--${columnWidth1}px);
  --TableColumnTwoWidth: var(--${columnWidth2}px);
  --TableColumnThreeWidth: var(--${columnWidth3}px);
}`,
  ]
  const css = rules.join('\n')
  return css
}
