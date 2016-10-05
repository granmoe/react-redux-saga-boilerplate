import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Iterable } from 'immutable'

import rootReducer from 'ducks'
import rootSaga from 'saga'

export default function () {
  let middlewares = []
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  if (process.env.NODE_ENV === `development`) {
    const createLogger = require(`redux-logger`)
    const stateTransformer = state => Iterable.isIterable(state) ? state.toJS() : state

    const logger = createLogger({
      stateTransformer,
      collapsed: _ => true
    })

    middlewares.push(logger)
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(rootSaga)

  return store
}
