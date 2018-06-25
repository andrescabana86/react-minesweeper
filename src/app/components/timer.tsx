import React from 'react';
import './timer.css';

export class Timer extends React.Component <any, any> {
  timer:any;
  constructor(props:any) {
    super(props);
    this.state = { elapsed: 0 };
  }

  componentDidMount() {
    this.start();
  }

  start() {
    this.timer = setInterval(() => {
      this.setState({
        elapsed: this.state.elapsed + 50,
      });
    },                       50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const elapsed = Math.round(this.state.elapsed / 100);
    const timespent = (elapsed / 10).toFixed(1);
    return(
      <p className="timer--running">Time spent: {timespent} seconds.</p>
    );
  }
}
