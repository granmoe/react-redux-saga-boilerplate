import { delay, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { increment } from 'ducks'

const INCREMENT_REQUESTED = 'increment-requested'

export default function* rootSaga () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsync)
}

function* incrementAsync (action) {
  yield call(delay, 1000)
  yield put(increment())
}

export const requestIncrement = () => ({ type: INCREMENT_REQUESTED })
