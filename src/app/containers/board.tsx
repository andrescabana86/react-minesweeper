import React from 'react';
import { connect } from 'react-redux';
import { Row } from '../components/row';
import './board.css';

class Board extends React.Component <any> {
  render() {
    return (
      <section className="board__container">
        {
          this.props.board.matrix.map((row:any, idx:number) => {
            return (
              <Row key={idx} />
            );
          })
        }
      </section>
    );
  }
}

const mapStateToProps = (state:any) => ({
  board: {
    matrix: state.board,
  },
});

export default connect(mapStateToProps)(Board);
