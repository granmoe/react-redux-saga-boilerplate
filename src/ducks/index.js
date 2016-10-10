import Immutable from 'immutable'

const INCREMENT = 'increment'

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

export const increment = () => ({ type: INCREMENT })
