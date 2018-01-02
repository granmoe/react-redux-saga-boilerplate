import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { requestIncrement } from 'ducks/count'

const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Count = styled.p`
  margin-left: 15px;
`

const CounterButton = styled.button`
  display: block;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    requestIncrement: PropTypes.func.isRequired
  }

  render () {
    const { count, requestIncrement } = this.props

    return (
      <CounterWrapper>
        <CounterButton onClick={ requestIncrement }>
          increment async
        </CounterButton>
        <Count> Count: { count }</Count>
      </CounterWrapper>
    )
  }
}

export default connect(state => ({ count: state.count }), { requestIncrement })(
  Counter
)
