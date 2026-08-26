export interface VisibleKeyBinding {
  readonly command: string
  readonly commandMatches: readonly number[]
  readonly isAlt?: boolean
  readonly isCtrl: boolean
  readonly isEditingWhenExpression: boolean
  readonly isEven: boolean
  readonly isShift: boolean
  readonly key: string
  readonly keyMatches: readonly number[]
  readonly rowIndex: number
  readonly selected: boolean
  readonly source?: string
  readonly when: string
}
