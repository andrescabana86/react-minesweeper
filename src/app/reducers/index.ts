import { START_NEW_GAME } from '../actions/types';

const initialState:any = {
  gameTitle: 'Welcome to Minesweeper!',
  gameStarted: false,
};

export default (state = initialState, action: any) => {

  switch (action.type) {

    case START_NEW_GAME:
      return {
        ...state,
        gameStarted: true,
        gameTitle: 'Good Luck!',
      };

    default:
      return state;
  }
};
