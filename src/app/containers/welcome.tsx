import React from 'react';
import { connect } from 'react-redux';
import { startNewGame } from '../actions';
import './welcome.css';

class Welcome extends React.Component <any> {
  render() {
    return (
      <section className="welcome__container">
        <h2>===================================</h2>
        <p>This is a playable version of Minesweeper</p>
        <h4>Please, start a game:</h4>
        <button onClick={this.props.startNewGame}>
          Start a new game!
        </button>
      </section>
    );
  }
}

const mapActionsToProps = (dispatch:Function) => ({
  startNewGame: () => dispatch(startNewGame()),
});

export default connect(null, mapActionsToProps)(Welcome);
