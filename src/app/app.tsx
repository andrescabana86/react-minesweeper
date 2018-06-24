import React from 'react';
import { connect } from 'react-redux';
import Welcome from './containers/welcome';
import './app.css';

class App extends React.Component <any, {}> {

  render() {
    return (
      <main className="app__container">
        <h1>{this.props.game.title}</h1>
        {
          this.props.game.started
            ? (<h1>this is the board space</h1>)
            : (<Welcome />)
        }
      </main>
    );
  }
}

const mapStateToProps = (state:any) => ({
  game: {
    title: state.gameTitle,
    started: state.gameStarted,
  },
});

export default connect(mapStateToProps)(App);
