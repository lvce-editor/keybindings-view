export interface ParsedKeyBinding {
  readonly key: string
  readonly command: string
  readonly when: number
  readonly rawKey: number
  readonly isCtrl: boolean
  readonly isShift: boolean
}
