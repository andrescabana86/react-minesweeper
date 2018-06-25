import {
  START_NEW_GAME,
  REVEAL_CELL,
  FLAG_CELL,
  REVEAL_ALL,
  GAME_OVER
} from '../actions/types';

import {
  revealCellAndTestPosition,
  generateBoard,
  flagCell,
  revealBoard,
} from '../helpers';

const initialState:any = {
  gameTitle: 'Welcome to Minesweeper!',
  gameStarted: true,
  gameOver: false,
  cellsByXY: {},
  neighborsByXY: {},
  minesByXY: {},
  board: [],
};

export default (state = initialState, action: any) => {

  switch (action.type) {

    case START_NEW_GAME:
      return {
        ...state,
        gameStarted: true,
        gameTitle: 'Good Luck!',
        ...generateBoard(),
      };

    case REVEAL_CELL:
      revealCellAndTestPosition(state, action.cellPosition);
      return {
        ...state,
      };

    case FLAG_CELL:
      flagCell(state, action.cellPosition);
      return {
        ...state,
      };

    case REVEAL_ALL:
      revealBoard(state);
      return {
        ...state,
      };

    case GAME_OVER:
      return {
        ...state,
        gameTitle: 'Oh! :-( nice try!...',
        gameOver: true,
      };

    default:
      return state;
  }
};
