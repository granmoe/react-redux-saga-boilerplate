import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  count: 0
})

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      const count = currentState.get('count')
      return currentState.set('count', count + 1)
    default:
      return currentState
  }
}

export const INCREMENT_REQUESTED = 'increment-requested'
export const INCREMENT = 'increment'

export const requestIncrement = () => ({ type: INCREMENT_REQUESTED })
