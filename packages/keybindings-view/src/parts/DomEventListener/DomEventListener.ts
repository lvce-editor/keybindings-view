export interface DomEventListener {
  readonly name: string | number
  readonly params: readonly string[]

  readonly passive?: boolean
  // TODO maybe use flags enum for options
  readonly preventDefault?: boolean
  readonly trackPointerEvents?: any
}
