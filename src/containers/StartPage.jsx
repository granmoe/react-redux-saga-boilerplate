import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

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
const StartFormDiv = styled.div`
  text-align: center;
  font-size: 3vh;
`;
const InputWithProps = styled.input.attrs({
  type: 'text',
  placeholder: 'Player Name',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  text-align: center;
  font-size: 5vh;
  border: 2px solid palevioletred;
  margin: ${props => props.margin || '0.5em'};
  padding: ${props => props.padding || '0.5em'};
  border-radius: ${props => props.radius || '10px'}
  border-style: inset;
  min-width: 50%;
`;
const Button = styled.button`
  text-align: center;
  color: black;
  border-radius: 50px;
  margin-top: 5px;
  height: 100px;
  width: 100px;
  padding: 0.1em 0.5em;
  margin-right: 5px;
  font-size: 1.5em;
  background: 'blue';
`;
const ButtonEasy = Button.extend`
  background: radial-gradient(#00e600, #006800);
  border: 'green';
`;

class StartPage extends Component {
  // static propTypes = {
  //   players: PropTypes.array,
  //   savePlayers: PropTypes.func,
  // };
  message(count) {
    return count > 0 ? 'Start Game' : 'Add a player';
  }
  handleCreatePlayer(event) {
    // all of this will move to redux
    event.preventDefault();
    console.log('this.name.value', this.name.value);
    // if (this.props.players.length < 2) {
    //   const player = {
    //   name: this.name.value,
    //   matchedCards: []
    //   }
    //   // this.props.addPlayer(player);
    //   this.playerForm.reset()
    //   }
    // else {
    //   return null
    // }
  }

  render() {
    const players = [];
    return (
      <StartPageWrapper>
        <StartPageMainDivH1>
          Find Me
        </StartPageMainDivH1>
        <StartPageMainDivH2>
          Find my matching partner in all the cards!
        </StartPageMainDivH2>
        <StartFormDiv>
          <p>{this.message(players.length)}</p>
          <form
            ref={(input) => this.playerForm = input}
            className={ players.length === 2 ? 'hidden': 'player-edit' }
            onSubmit={ (e) => this.handleCreatePlayer(e) }>
            <div className='name-input-container'>
              <InputWithProps
                innerRef={(input) => this.name = input}/>
            </div>
            <div className='add-me-button-container'>
              <button className='add-me-button' type='Submit'>Add Me</button>
            </div>
          </form>
          <br />
        </StartFormDiv>
        <ButtonEasy>EASY</ButtonEasy>
      </StartPageWrapper>
    )
  }
}
export default StartPage;
// export default connect(
//   state => ({ players: state.players }),
//   { savePlayers })(StartPage);
