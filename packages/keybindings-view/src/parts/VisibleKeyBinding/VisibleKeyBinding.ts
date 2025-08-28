export interface VisibleKeyBinding {
  readonly command: string
  readonly commandMatches: readonly number[]
  readonly isCtrl: boolean
  readonly isEditingWhenExpression?: boolean
  readonly isEven: boolean
  readonly isShift: boolean
  readonly key: string
  readonly keyMatches: readonly number[]
  readonly rowIndex: number
  readonly selected: boolean
  readonly when: string
}
