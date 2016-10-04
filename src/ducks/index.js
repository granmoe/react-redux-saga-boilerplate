export const initialState = {
  counter: 0
}

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...currentState,
        counter: currentState.counter + 1
      }
    default:
      return currentState
  }
}

export const INCREMENT_REQUESTED = 'increment-requested'
export const INCREMENT = 'increment'

export const incrementRequested = () => ({ type: INCREMENT_REQUESTED })
