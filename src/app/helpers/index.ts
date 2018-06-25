import {
  CELL_STATUSES,
  CELL_TYPES,
  DEFAULT_BOARD,
  NB_MATRIX,
  LOCAL_STORAGE_KEY,
} from '../constants';

export const revealCellAndTestPosition = (state:any, cellPosition:string) => {
  const cell = state.cellsByXY[cellPosition];
  revealCell(cell);
  if (cell.type === CELL_TYPES.space) {
    revealAllSurroundingSpaces(state, cell);
  }
  saveGameState(state);
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

export const flagCell = (state:any, cellPosition:string) => {
  const cell = state.cellsByXY[cellPosition];
  cell.type = CELL_TYPES.flag;
  revealCell(cell);
  state.minesByXY[cellPosition] = false;
  saveGameState(state);
};

export const generateBoard = (initialBoard = DEFAULT_BOARD) => {
  const numberOfRows = initialBoard.width;
  const numberOfCells = initialBoard.height;
  const numberOfMines = initialBoard.mineCount;

  const board:any = [];
  const cellsByXY:any = {};
  const neighborsByXY:any = {};
  const minesByXY:any = {};

  for (let r = 1; r <= numberOfRows; r += 1) {
    const row = createRow(r);
    for (let c = 1; c <= numberOfCells; c += 1) {
      const cell = createCell(row.position, c);
      cellsByXY[cell.position] = cell;
      neighborsByXY[cell.position] = getNeighborhoodOfCell(numberOfRows, numberOfCells, r, c);
      row.children.push(cell.position);
    }
    board.push(row);
  }

  const cells = Object.keys(cellsByXY);
  for (let i = 0; i <= numberOfMines; i += 1) {
    const index = Math.floor(Math.random() * cells.length);
    const position = cells[index];
    const cell = cellsByXY[position];
    cell.type = CELL_TYPES.bomb;
    minesByXY[cell.position] = true;
  }

  for (let z = 0; z < cells.length; z += 1) {
    const index = cells[z];
    defineCellType(cellsByXY[index], cellsByXY, neighborsByXY);
  }

  return { board, cellsByXY, neighborsByXY, minesByXY };
};

const createRow = (idx:number) => ({
  position: `${idx}`,
  children: <any>[],
});

const createCell = (rowIdx:string, idx:number) => ({
  position: `${rowIdx},${idx}`,
  type: CELL_TYPES.unknown,
  status: CELL_STATUSES.hidden,
  value: 0,
});

const getNeighborhoodOfCell = (width:number, height:number, row: number, column: number) =>
  NB_MATRIX.reduce((accumulator: string[], [xPos, yPos]) => {
    const x = row + xPos;
    const y = column + yPos;
    if (x > 0 && x <= width && y > 0 && y <= height) {
      return accumulator
        .concat([x, y].toString());
    }
    return accumulator;
  },               []);

const defineCellType = (cell:any, cellsByXY:any, neighborsByXY:any) => {
  if (cell.status === CELL_TYPES.bomb) return;
  if (cell.type !== CELL_TYPES.unknown) return;
  cell.type = CELL_TYPES.space;
  const neighborhood = neighborsByXY[cell.position];
  neighborhood.forEach((neighborPosition:string) => {
    const neighbor = cellsByXY[neighborPosition];
    if (neighbor.type === CELL_TYPES.bomb) {
      cell.type = CELL_TYPES.number;
      cell.value += 1;
    }
  });
};

export const revealBoard = (state:any) => {
  const cells = Object.keys(state.cellsByXY);
  cells.forEach((cell) => {
    revealCell(state.cellsByXY[cell]);
  });
};

export const saveGameState = (currentState:any) => {
  if (typeof(Storage) !== 'undefined') {
    const json = JSON.stringify(currentState);
    localStorage.setItem(LOCAL_STORAGE_KEY, json);
  } else {
    console.warn('local storage is not available.');
  }
};

export const getPreviousSavedGame = () => !!localStorage.getItem(LOCAL_STORAGE_KEY);

export const restoreGame = () => {
  const json = localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(json);
};
