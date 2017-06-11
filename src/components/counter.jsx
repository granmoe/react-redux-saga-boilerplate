import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { requestIncrement } from 'ducks/count'
import 'components/counter.less'

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    requestIncrement: PropTypes.func.isRequired
  }

  render () {
    const { count, requestIncrement } = this.props

    return (
      <div className="counter">
        <button onClick={ requestIncrement } type="button">increment async</button>
        <p className="counter__count"> Count: { count }</p>
      </div>
    )
  }
}

export default connect(
  state => ({ count: state.count }),
  { requestIncrement }
)(Counter)
