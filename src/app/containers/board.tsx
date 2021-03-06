import React from 'react';
import { connect } from 'react-redux';
import { Row } from '../components/row';
import {
  revealCell,
  flagCell,
  startNewGame,
  revealAll,
  gameOver,
  saveGameState,
  resetGame,
} from '../actions';
import { CELL_TYPES } from '../constants';
import { Timer } from '../components/timer';
import './board.css';

class Board extends React.Component <any> {
  timer = React.createRef<any>();

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

  saveAndClose() {
    if (this.props.game.losed === false) {
      this.props.saveGameAndExit();
    }
  }

  exit() {
    this.props.resetGame();
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
        <div className="board-stats__container">
          <button onClick={() => this.exit()}>Exit</button>
          <button onClick={() => this.saveAndClose()}>Save & Close</button>
          {
            this.props.game.losed !== true &&
            (<Timer ref={this.timer} />)
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state:any) => ({
  board: {
    matrix: state.board,
    cells: state.cellsByXY,
  },
  game: {
    losed: state.gameOver,
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
  saveGameAndExit: () => dispatch(saveGameState()),
  resetGame: () => dispatch(resetGame()),
});

export default connect(mapStateToProps, mapActionsToProps)(Board);
