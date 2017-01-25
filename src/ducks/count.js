import { delay, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

const initialState = 0

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return currentState + 1
    default:
      return currentState
  }
}

export const increment = () => ({ type: INCREMENT })

export const requestIncrement = () => ({ type: INCREMENT_REQUESTED })

function* incrementAsyncSaga () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsync)
}

export function* incrementAsync (action) {
  yield call(delay, 1000)
  yield put(increment())
}

export const sagas = [incrementAsyncSaga]

const INCREMENT_REQUESTED = 'increment-requested'
const INCREMENT = 'increment'
