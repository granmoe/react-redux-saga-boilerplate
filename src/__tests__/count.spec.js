/* global describe, it, expect */
import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { increment, incrementAsync } from '../ducks/count'

const SEP = '\n      '
const done = { done: true, value: undefined }

describe('incrementAsync', () => {
  const steps = [
    '1) calls delay(1000)',
    '2) puts increment()'
  ]

  it(steps.join(SEP), () => {
    const saga = incrementAsync()

    expect(saga.next().value).toEqual(call(delay, 1000))
    expect(saga.next().value).toEqual(put(increment()))
    expect(saga.next()).toEqual(done)
  })
})
