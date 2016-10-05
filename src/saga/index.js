import { delay, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { INCREMENT_REQUESTED, INCREMENT } from 'ducks'

export default function* rootSaga () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsync)
}

function* incrementAsync (action) {
  yield call(delay, 1000)
  yield put({ type: INCREMENT })
}
