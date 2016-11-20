import Immutable from 'immutable'
import { delay, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

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

/*
  SAGA CODE
*/
export const requestIncrement = () => ({ type: INCREMENT_REQUESTED })

function* incrementAsyncSaga () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsync)
}

function* incrementAsync (action) {
  yield call(delay, 1000)
  yield put(increment())
}

export function* rootSaga () {
  yield call(incrementAsyncSaga)
}

const INCREMENT_REQUESTED = 'increment-requested'
const INCREMENT = 'increment'
