import { START_NEW_GAME } from '../actions/types';

const initialState:any = {
  gameTitle: 'Welcome to Minesweeper!',
  gameStarted: true,
  board: [
    {
      position: '1', children: [
        { position: '1,1', status: 'hidden', type: 'space', value: 0 },
        { position: '1,2', status: 'revealed', type: 'number', value: 1 },
        { position: '1,2', status: 'revealed', type: 'number', value: 2 },
        { position: '1,2', status: 'revealed', type: 'number', value: 3 },
        { position: '1,3', status: 'revealed', type: 'bomb', value: 0 },
        { position: '1,4', status: 'revealed', type: 'flag', value: 0 },
      ],
    }, {
      position: '2', children: [
        { position: '2,1', status: 'hidden', type: 'space', value: 0 },
        { position: '2,1', status: 'hidden', type: 'space', value: 0 },
        { position: '2,1', status: 'hidden', type: 'space', value: 0 },
        { position: '2,1', status: 'hidden', type: 'space', value: 0 },
        { position: '2,1', status: 'hidden', type: 'space', value: 0 },
        { position: '2,1', status: 'hidden', type: 'space', value: 0 },
      ],
    },
  ],
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
