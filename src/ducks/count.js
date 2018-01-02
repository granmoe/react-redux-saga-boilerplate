import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'

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

function* incrementAsyncWatcher () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsyncWorker)
}

export function* incrementAsyncWorker (action) {
  yield call(delay, 1000)
  yield put(increment())
}

export const sagas = [incrementAsyncWatcher]

const INCREMENT_REQUESTED = 'increment-requested'
const INCREMENT = 'increment'
