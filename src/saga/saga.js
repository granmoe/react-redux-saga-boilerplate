import { delay, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { START_CLOCK, PAUSE_CLOCK, REWIND_CLOCK } from 'duck'
import { MINIMUM_MS } from 'config'

export default function* rootSaga () {
  yield takeLatest([START_CLOCK, PAUSE_CLOCK, REWIND_CLOCK], handleClockAction)
}

function* handleClockAction (action) {
  if (action.type === START_CLOCK || action.type === REWIND_CLOCK) {
    yield call(runClock, action.type === START_CLOCK)
  }
}

function* runClock (forward = true) {
  while (true) {
    yield call(delay, MINIMUM_MS)

    if (forward) {
      yield put({ type: 'increment-milliseconds' })
    } else {
      yield put({ type: 'decrement-milliseconds' })
    }
  }
}
