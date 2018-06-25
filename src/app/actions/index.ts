import {
  START_NEW_GAME,
  REVEAL_CELL,
  FLAG_CELL} from './types';

export const startNewGame = () => ({ type: START_NEW_GAME });
export const revealCell = (position:string) => ({ type: REVEAL_CELL, cellPosition: position });
export const flagCell = (position:string) => ({ type: FLAG_CELL, cellPosition: position });
