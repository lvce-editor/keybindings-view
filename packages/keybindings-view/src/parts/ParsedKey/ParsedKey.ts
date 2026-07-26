export interface ParsedKey {
  readonly isAlt?: boolean
  readonly isCtrl: boolean
  readonly isShift: boolean
  readonly key: string
}
