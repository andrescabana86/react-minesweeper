import {
  START_NEW_GAME,
  REVEAL_CELL,
  FLAG_CELL,
  REVEAL_ALL,
  GAME_OVER } from './types';

export const startNewGame = () => ({ type: START_NEW_GAME });
export const revealCell = (position:string) => ({ type: REVEAL_CELL, cellPosition: position });
export const flagCell = (position:string) => ({ type: FLAG_CELL, cellPosition: position });
export const revealAll = () => ({ type: REVEAL_ALL });
export const gameOver = () => ({ type: GAME_OVER });
