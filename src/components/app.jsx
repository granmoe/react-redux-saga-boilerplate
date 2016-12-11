import React from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import Counter from 'components/counter.jsx'
import 'components/app.less'

const App = () =>
  <BrowserRouter>
    <div className="app">
      <ul>
        <li><Link to="/">Async Counter</Link></li>
        <li><Link to="/quick-start">Quick Start</Link></li>
        <li><Link to="/examples">Examples</Link></li>
      </ul>

      <hr/>

      <Match exactly pattern="/" component={ Counter } />
      <Match exactly pattern="/counter" component={ Counter } />
      <Match exactly pattern="/quick-start" component={ QuickStart } />
      <Match exactly pattern="/examples" component={ Examples } />
      <Miss component={ Counter }/>
    </div>
  </BrowserRouter>

const QuickStart = () => <p>quick start</p>

const Examples = () => <p>examples</p>

export default App
