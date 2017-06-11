import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerForBrowser } from 'redux-little-router'
import { Iterable } from 'immutable'
import reducers, { rootSaga } from 'ducks'

export default function () {
  // any data to attach to the router key of state when we're on this route
  const routes = {
    '/counter': {
      test: 'foo'
    },
    '/foo': {},
    '/bar': {},
  }

  const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer
  } = routerForBrowser({ routes })
  const sagaMiddleware = createSagaMiddleware()
  let middlewares = [routerMiddleware, sagaMiddleware]

  if (process.env.NODE_ENV === `development`) {
    const createLogger = require('redux-logger')
    const stateTransformer = state => Iterable.isIterable(state) ? state.toJS() : state
    const logger = createLogger({ stateTransformer, collapsed: _ => true })
    middlewares.push(logger)
  }

  const allReducers = {
    ...reducers,
    router: routerReducer
  }

  const store = createStore(
    combineReducers(allReducers),
    compose(enhancer, applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  return store
}

  // redux-little-router isn't compatible with immutable yet :-(
  // const rootReducer = (state, action) => Object.entries(allReducers)
  //   .reduce((state, [ name, reducer ]) =>
  //     state.set(name, reducer(state.get(name), action))
  //   , state)
