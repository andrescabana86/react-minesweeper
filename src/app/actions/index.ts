import {
  START_NEW_GAME,
  REVEAL_CELL,
  FLAG_CELL,
  REVEAL_ALL,
  GAME_OVER,
  SAVE_GAME_STATE,
  RESTORE_GAME,
} from './types';

export const startNewGame = () => ({ type: START_NEW_GAME });
export const revealCell = (position:string) => ({ type: REVEAL_CELL, cellPosition: position });
export const flagCell = (position:string) => ({ type: FLAG_CELL, cellPosition: position });
export const revealAll = () => ({ type: REVEAL_ALL });
export const gameOver = () => ({ type: GAME_OVER });
export const saveGameState = () => ({ type: SAVE_GAME_STATE });
export const restoreGame = () => ({ type: RESTORE_GAME });
