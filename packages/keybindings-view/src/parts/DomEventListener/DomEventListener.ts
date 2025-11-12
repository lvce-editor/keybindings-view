export interface DomEventListener {
  readonly name: string | number
  readonly params: readonly string[]

  // TODO maybe use flags enum for options
  readonly preventDefault?: boolean
  readonly passive?: boolean
}
