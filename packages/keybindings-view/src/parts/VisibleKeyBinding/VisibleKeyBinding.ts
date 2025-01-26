export interface VisibleKeyBinding {
  readonly rowIndex: number
  readonly isCtrl: boolean
  readonly isShift: boolean
  readonly key: string
  readonly when: string
  readonly command: string
  readonly selected: boolean
  readonly commandMatches: readonly number[]
  readonly keyMatches: readonly number[]
  readonly isEven: boolean
}
