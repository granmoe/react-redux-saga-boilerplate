import React from 'react'
import { connect } from 'react-redux'

import { incrementRequested } from 'ducks'

class Clock extends React.Component {
  render () {
    const { counter, incrementRequested } = this.props

    return (
      <div>
        { counter }
        <button onClick={ incrementRequested }>increment async</button>
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
}))(Clock)
