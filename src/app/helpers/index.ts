import { CELL_STATUSES, CELL_TYPES } from '../constants';

export const revealCellAndTestPosition = (state:any, cellPosition:string) => {
  const cell = state.cellsByXY[cellPosition];
  revealCell(cell);
  if (cell.type === CELL_TYPES.space) {
    revealAllSurroundingSpaces(state, cell);
  }
};

const revealCell = (cell:any) => {
  cell.status = CELL_STATUSES.revealed;
};

const revealAllSurroundingSpaces = (state:any, cell:any) => {
  const neighborhood = state.neighborsByXY[cell.position];
  if (neighborhood) {
    neighborhood.forEach((neighborPosition:string) => {
      const cell = state.cellsByXY[neighborPosition];
      if (cell.status === CELL_STATUSES.revealed) return;
      if (cell.type === CELL_TYPES.bomb) return;
      cell.status = CELL_STATUSES.revealed;
      if (cell.type === CELL_TYPES.space) {
        revealAllSurroundingSpaces(state, cell);
      }
    });
  }
};
