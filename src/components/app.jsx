import React from 'react'
import { Fragment, Link } from 'redux-little-router'

import Counter from 'components/counter.jsx'
import 'components/app.less'

export default () =>
  <div className="app">
    <ul>
      <li><Link href="/react-redux-saga-boilerplate/counter">Async Counter</Link></li>
      <li><Link href="/react-redux-saga-boilerplate/foo">Foo</Link></li>
      <li><Link href="/react-redux-saga-boilerplate/bar">Bar</Link></li>
    </ul>

    <hr/>

    <Fragment forRoute="/react-redux-saga-boilerplate/counter">
      <Counter />
    </Fragment>
    <Fragment forRoute="/react-redux-saga-boilerplate/foo">
      <p>Just a placeholder</p>
    </Fragment>
    <Fragment forRoute="/react-redux-saga-boilerplate/bar">
      <p>Some content could go here</p>
    </Fragment>
  </div>
