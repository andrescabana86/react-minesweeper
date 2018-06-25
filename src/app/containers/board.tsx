import React from 'react';
import { connect } from 'react-redux';
import { Row } from '../components/row';
import {
  revealCell,
  flagCell,
  startNewGame,
  revealAll,
  gameOver,
} from '../actions';
import { CELL_TYPES } from '../constants';
import './board.css';

class Board extends React.Component <any> {
  componentDidMount() {
    this.props.startNewGame();
  }

  onRevealCell(cell:any) {
    if (cell.type === CELL_TYPES.bomb) {
      this.props.revealAll();
      this.props.gameOver();
      return;
    }
    this.props.revealCell(cell.position);
  }

  onFlagCell(evt:any, cell:any) {
    evt.preventDefault();
    this.props.flagCell(cell.position);
  }

  render() {
    return (
      <section className="board__container">
        {
          this.props.board.matrix.map((row:any, idx:number) => {
            const children = row.children.map((childPosition:string) =>
              this.props.board.cells[childPosition]);
            return (
              <Row key={idx}
                children={children}
                revealCell={this.onRevealCell.bind(this)}
                flagCell={this.onFlagCell.bind(this)} />
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
    cells: state.cellsByXY,
  },
});

const mapActionsToProps = (dispatch:Function) => ({
  revealCell: (cellPos:string) => dispatch(revealCell(cellPos)),
  flagCell: (cellPos:string) => dispatch(flagCell(cellPos)),
  startNewGame: () => dispatch(startNewGame()),
  revealAll: () => dispatch(revealAll()),
  gameOver: () => {
    alert('GameOver!');
    dispatch(gameOver());
  },
});

export default connect(mapStateToProps, mapActionsToProps)(Board);
