import 'babel-polyfill' // generator support
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from 'app.jsx'
import initStore from 'store'

const store = initStore()

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)
