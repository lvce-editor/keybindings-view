import { expect, test } from '@jest/globals'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners', () => {
  expect(RenderEventListeners.renderEventListeners()).toBeDefined()
})

test('renderEventListeners - registers tracked pointer event listeners', () => {
  const eventListeners = RenderEventListeners.renderEventListeners()
  const listenerNames = new Set(eventListeners.map((eventListener) => eventListener.name))

  for (const eventListener of eventListeners) {
    const trackedPointerEvents = eventListener.trackPointerEvents || []
    for (const trackedPointerEvent of trackedPointerEvents) {
      expect(listenerNames.has(trackedPointerEvent)).toBe(true)
    }
  }
})
