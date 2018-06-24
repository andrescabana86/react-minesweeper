import React from 'react';
import { connect } from 'react-redux';
import Welcome from './containers/welcome';

class App extends React.Component <any, {}> {

  render() {
    return (
      <main className="app__container">
        <Welcome />
      </main>
    );
  }
}

const mapStateToProps = (state:any) => ({
  value: state.value,
});

export default connect(mapStateToProps)(App);
