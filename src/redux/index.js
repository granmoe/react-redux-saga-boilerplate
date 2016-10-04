import { MINIMUM_MS } from 'config'

export const initialState = {
  milliseconds: 0
}

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case 'reset-clock':
      return {
        ...currentState,
        milliseconds: 0
      }
    case 'increment-milliseconds':
      return {
        ...currentState,
        milliseconds: currentState.milliseconds + MINIMUM_MS
      }
    case 'decrement-milliseconds':
      if (!currentState.milliseconds) { return currentState }

      return {
        ...currentState,
        milliseconds: currentState.milliseconds - MINIMUM_MS
      }
    default:
      return currentState
  }
}

export const START_CLOCK = 'start-clock'
export const PAUSE_CLOCK = 'pause-clock'
export const REWIND_CLOCK = 'rewind-clock'

export const startClock = () => ({ type: START_CLOCK })
export const pauseClock = () => ({ type: PAUSE_CLOCK })
export const rewindClock = () => ({ type: REWIND_CLOCK })
export const resetClock = () => ({ type: 'reset-clock' })
