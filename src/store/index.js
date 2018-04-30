import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerForBrowser } from 'redux-little-router';
import reducers, { rootSaga } from 'ducks';

export default function () {
  // any data to attach to the router key of state when we're on this route
  const routes = {
    '/findMeMore': {
      '/counter': {
        test: 'foo'
      },
      '/startPage' : {},
    },
  };

  const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer
  } = routerForBrowser({ routes });
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware, sagaMiddleware];

  const allReducers = {
    ...reducers,
    router: routerReducer
  };

  const store = createStore(
    combineReducers(allReducers),
    composeWithDevTools(enhancer, applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
