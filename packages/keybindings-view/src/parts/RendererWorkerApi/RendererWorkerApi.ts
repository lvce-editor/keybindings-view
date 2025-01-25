export interface RendererWorkerApi {
  readonly 'ContextMenu.show': (x: number, y: number, id: any, ...args: readonly any[]) => Promise<void>
  readonly 'Focus.setFocus': (id: number) => Promise<void>
  readonly 'Viewlet.openWidget': (id: string) => Promise<void>
  readonly 'KeyBindingsInitial.getKeyBindings': () => Promise<readonly any[]>
}
