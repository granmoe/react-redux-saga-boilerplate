import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const StartPageWrapper = styled.div`
  box-shadow: 0 0 10px black;
  position: absolute;
  top:50px;
  left:50px;
  bottom:50px;
  right:50px;
  border-radius: 5px;
  background-color: #987;
  opacity: 0.7;
`;
const StartPageMainDivH1 = styled.h1`
  text-align: center;
  font-size: 5em;
  margin: 0;
`;
const StartPageMainDivH2 = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-top: 0;
`;
const StartPageMainDivP = styled.p`
  text-align: center;
  font-size: 3vh;
`;
const StartPageButton1 = styled.button`
  text-align: center;
  color: black;
  border-radius: 50px;
  margin-top: 5px;
  height: 100px;
  width: 100px;
  padding: 0.1em 0.5em;
  margin-right: 5px;
  font-size: 1.5em;
  background: ${props => (props.easy ? 'green' : 'white')};
  background: -webkit-radial-gradient(#00e600, #006800); /* Safari 5.1 to 6.0 */
  background: -o-radial-gradient(#00e600, #006800); /* For Opera 11.6 to 12.0 */
  background: -moz-radial-gradient(#00e600, #006800); /* For Firefox 3.6 to 15 */
  background: radial-gradient(#00e600, #006800); /* Standard syntax (must be last) */

`

class StartPage extends Component {
  static propTypes = {
    players: PropTypes.array,
  };
  render() {
    const { players } = this.props;
    return (
      <StartPageWrapper>
        <StartPageMainDivH1>
          Find Me
        </StartPageMainDivH1>
        <StartPageMainDivH2>
          Find my matching partner in all the cards!
        </StartPageMainDivH2>
        <StartPageMainDivP>
          Input box for name goes here.
        </StartPageMainDivP>
        <StartPageButton1 easy>EASY</StartPageButton1>
        <StartPageButton medium></StartPageButton>
        <StartPageButton hard></StartPageButton>
      </StartPageWrapper>
    )
  }
}
