import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import themes from 'components/themes.js';

import { requestIncrement } from 'ducks/count';

const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
`;

const Count = styled.p`
  margin-left: 15px;
`;

const CounterButton = styled.button`
  display: block;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    requestIncrement: PropTypes.func.isRequired
  }

  render () {
    const { count, requestIncrement } = this.props;

    return (
      <CounterWrapper>
        <ThemeProvider theme = { themes.foo }>
          <CounterButton onClick={ requestIncrement }>
            increment async
          </CounterButton>
          <Count> Count: { count }</Count>
        </ThemeProvider>
      </CounterWrapper>
    );
  }
}
export default connect(
  state => ({ count: state.count }),
  { requestIncrement })(Counter);
