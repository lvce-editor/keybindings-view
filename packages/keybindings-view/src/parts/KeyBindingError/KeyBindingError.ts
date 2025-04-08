export class KeyBindingError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'KeyBindingError'
  }
}
