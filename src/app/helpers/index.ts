import { CELL_STATUSES } from '../constants';

export const revealCellAndTestPosition = (state:any, cellPosition:string) => {
  const cell = state.cellsByXY[cellPosition];
  revealCell(cell);
};

const revealCell = (cell:any) => {
  cell.status = CELL_STATUSES.revealed;
};
