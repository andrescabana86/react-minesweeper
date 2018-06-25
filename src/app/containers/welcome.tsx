import React from 'react';
import { connect } from 'react-redux';
import { startNewGame, restoreGame } from '../actions';
import { getPreviousSavedGame } from '../helpers';
import './welcome.css';

class Welcome extends React.Component <any> {
  render() {
    const hasPreviousSavedGames = getPreviousSavedGame();
    return (
      <section className="welcome__container">
        <h2>===================================</h2>
        <p>This is a playable version of Minesweeper</p>
        <h4>Please, start a game:</h4>
        <button onClick={this.props.startNewGame}>
          Start a new game!
        </button>
        <h2>===================================</h2>
        {
          hasPreviousSavedGames && (
          <div>
            <h4>Restore a previous game</h4>
            <button onClick={this.props.restoreGame}>Restore</button>
          </div>)
        }
      </section>
    );
  }
}

const mapActionsToProps = (dispatch:Function) => ({
  startNewGame: () => dispatch(startNewGame()),
  restoreGame: () => dispatch(restoreGame()),
});

export default connect(null, mapActionsToProps)(Welcome);
