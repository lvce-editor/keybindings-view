export interface ParsedKeyBinding {
  readonly command: string
  readonly commandMatches: readonly number[]
  readonly isAlt?: boolean
  readonly isCtrl: boolean
  readonly isShift: boolean
  readonly key: string
  readonly keyMatches: readonly number[]
  readonly rawKey: number
  readonly source?: string
  readonly when: number
}
