import React from 'react';
import './welcome.css';

export default class Welcome extends React.Component {
  render() {
    return (
      <section className="welcome__container">
        <h2>===================================</h2>
        <p>This is a playable version of Minesweeper</p>
        <h4>Please, start a game:</h4>
        <button>Start a new game!</button>
      </section>
    );
  }
}
