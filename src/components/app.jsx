import React from 'react'
import { Fragment, Link } from 'redux-little-router'

import Counter from 'components/counter.jsx'
import 'components/app.less'

export default () =>
  <div className="app">
    <ul>
      <li><Link href="/counter">Async Counter</Link></li>
      <li><Link href="/foo">Foo</Link></li>
      <li><Link href="/bar">Bar</Link></li>
    </ul>

    <hr/>

    <Fragment forRoute="/counter">
      <Counter />
    </Fragment>
    <Fragment forRoute="/foo">
      <p>Just a placeholder</p>
    </Fragment>
    <Fragment forRoute="/bar">
      <p>Some content could go here</p>
    </Fragment>
  </div>
