export interface RendererWorkerApi {
  readonly 'ContextMenu.show': (x: number, y: number, id: any, ...args: any[]) => Promise<void>
  readonly 'Focus.setFocus': (id: number) => Promise<void>
  readonly 'Viewlet.openWidget': (id: string) => Promise<void>
}
