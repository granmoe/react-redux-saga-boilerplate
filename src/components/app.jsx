import React from 'react'
import { connect } from 'react-redux'

import { incrementRequested } from 'ducks'

class App extends React.Component {
  render () {
    const { counter, requestIncrement } = this.props

    return (
      <div>
        { counter }
        <button onClick={ requestIncrement }>increment async</button>
      </div>
    )
  }
}

export default connect(state => {
  const { counter } = state
  return {
    counter
  }
}, ({
  incrementRequested
}))(App)
