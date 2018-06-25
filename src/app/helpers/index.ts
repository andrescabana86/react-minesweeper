import { CELL_STATUSES } from '../constants';

export const revealCell = (state:any, cellPosition:string) => {
  const cell = state.board[0].children[0];
  cell.status = CELL_STATUSES.revealed;
};
