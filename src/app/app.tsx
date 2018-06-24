import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component <any, {}> {

  render() {
    return (
      <main className="app__container">
        <h1>{this.props.value}</h1>
      </main>
    );
  }
}

const mapStateToProps = (state:any) => ({
  value: state.value
});

export default connect(mapStateToProps)(App);
