import React from 'react'
import { Fragment, Link } from 'redux-little-router'

import Counter from 'components/counter.jsx'
import 'components/app.less'

export default () =>
  <div className="app">
    <ul>
      <li><Link href="/counter">Async Counter</Link></li>
      <li><Link href="/quick-start">Quick Start</Link></li>
      <li><Link href="/examples">Examples</Link></li>
    </ul>

    <hr/>

    <Fragment forRoute="/counter">
      <Counter />
    </Fragment>
    <Fragment forRoute="/quick-start">
      <p>Just a placeholder</p>
    </Fragment>
    <Fragment forRoute="/examples">
      <p>Some content could go here</p>
    </Fragment>
    <Fragment forRoute="">
      <p>This should match everything</p>
    </Fragment>
  </div>
