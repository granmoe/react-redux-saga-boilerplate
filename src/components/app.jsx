import React from 'react'
import { connect } from 'react-redux'

import { startClock, resetClock, rewindClock, pauseClock } from 'duck'
import { CLOCK_HANDS, STROKE_WIDTH } from 'config'

class Clock extends React.Component {
  render () {
    const { hands, startClock, rewindClock, resetClock, pauseClock } = this.props

    return (
      <svg onMouseEnter={ startClock } onMouseLeave={ rewindClock } onDoubleClick={ resetClock }
        onClick={ pauseClock } className="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="500">
        { hands.map((hand, index) => {
          const { radius, circumference, position, alpha } = hand
          return (
            <circle key={ index } cx="50" cy="50" r={ radius } stroke={ `rgba(1,1,1,${alpha})` } fill="none"
              strokeWidth={ STROKE_WIDTH } strokeDasharray={ circumference } strokeDashoffset={ position } />
          )
        }) }
      </svg>
    )
  }
}

export default connect(state => {
  const currentTime = state.milliseconds
  let remainingTime = currentTime

  const getTicks = (hands, timeRemaining) => {
    let [hand, ...tailHands] = hands
    hand.ticks = Math.floor(timeRemaining / hand.ms)
    return tailHands.length ? [hand, ...getTicks(tailHands, timeRemaining % hand.ms)] : [hand]
  }

  const hands = getTicks(CLOCK_HANDS, remainingTime)
    .map((hand, idx) => {
      const offset = state.milliseconds >= hand.ms ? 1 : 0
      const position = hand.circumference - ((hand.ticks + offset) / hand.maxTicks * hand.circumference)

      return {
        ...hand,
        position
      }
    })

  return {
    hands
  }
}, ({
  startClock,
  rewindClock,
  resetClock,
  pauseClock
}))(Clock)
