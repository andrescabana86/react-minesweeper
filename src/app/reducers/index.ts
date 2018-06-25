import {
  START_NEW_GAME,
  REVEAL_CELL,
  FLAG_CELL} from '../actions/types';
import {
  revealCellAndTestPosition,
  flagCell } from '../helpers';

const initialState:any = {
  gameTitle: 'Welcome to Minesweeper!',
  gameStarted: true,
  cellsByXY: {
    '1,1': { position: '1,1', status: 'hidden', type: 'space', value: 0 },
    '1,2': { position: '1,2', status: 'revealed', type: 'number', value: 1 },
    '1,3': { position: '1,3', status: 'revealed', type: 'number', value: 2 },
    '1,4': { position: '1,4', status: 'revealed', type: 'number', value: 3 },
    '1,5': { position: '1,5', status: 'revealed', type: 'bomb', value: 0 },
    '1,6': { position: '1,6', status: 'revealed', type: 'flag', value: 0 },
    '2,1': { position: '2,1', status: 'hidden', type: 'space', value: 0 },
    '2,2': { position: '2,2', status: 'hidden', type: 'space', value: 0 },
    '2,3': { position: '2,3', status: 'hidden', type: 'space', value: 0 },
    '2,4': { position: '2,4', status: 'hidden', type: 'space', value: 0 },
    '2,5': { position: '2,5', status: 'hidden', type: 'space', value: 0 },
    '2,6': { position: '2,6', status: 'hidden', type: 'space', value: 0 },
  },
  neighborsByXY: {
    '2,1': ['2,2', '2,3', '2,4', '2,5', '2,6'],
  },
  minesByXY: {
    '1,5': true,
  },
  board: [
    {
      position: '1', children: [
        '1,1', '1,2', '1,3', '1,4', '1,5', '1,6',
      ],
    }, {
      position: '2', children: [
        '2,1', '2,2', '2,3', '2,4', '2,5', '2,6',
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

    default:
      return state;
  }
};
