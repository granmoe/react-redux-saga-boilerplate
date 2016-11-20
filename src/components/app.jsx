import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { requestIncrement } from 'ducks'
import 'components/app.less'

class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    requestIncrement: PropTypes.func.isRequired
  }

  render () {
    const { count, requestIncrement } = this.props

    return (
      <div className="app">
        Count: { count }
        <button onClick={ requestIncrement } className="app__increment-btn" type="button">increment async</button>
      </div>
    )
  }
}

export default connect(state => {
  return {
    count: state.get('count')
  }
}, ({
  requestIncrement
}))(App)
