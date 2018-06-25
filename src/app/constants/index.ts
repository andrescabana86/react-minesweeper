export const CELL_STATUSES = Object.freeze({
  revealed: 'revealed',
  hidden: 'hidden',
});

export const CELL_TYPES = Object.freeze({
  bomb: 'bomb',
  flag: 'flag',
  number: 'number',
  space: 'space',
  unknown: 'unknown',
});

export const DEFAULT_BOARD = Object.freeze({
  width: 10,
  height: 10,
  mineCount: 10,
});

export const NB_MATRIX = Object.freeze([
  [-1, -1], [0, -1], [1, -1],
  [-1, 0],           [1, 0],
  [-1, 1],  [0, 1],  [1, 1],
]);

export const LOCAL_STORAGE_KEY = '@minesweeper';
