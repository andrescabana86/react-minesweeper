import React from 'react';
import { connect } from 'react-redux';
import { Row } from '../components/row';
import { revealCell } from '../actions';
import './board.css';

class Board extends React.Component <any> {
  onRevealCell(cell:any) {
    this.props.revealCell(cell.position);
  }

  render() {
    return (
      <section className="board__container">
        {
          this.props.board.matrix.map((row:any, idx:number) => {
            return (
              <Row key={idx}
                children={row.children}
                revealCell={this.onRevealCell.bind(this)} />
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

const mapActionsToProps = (dispatch:Function) => ({
  revealCell: (cellPos:string) => dispatch(revealCell(cellPos)),
});

export default connect(mapStateToProps, mapActionsToProps)(Board);
