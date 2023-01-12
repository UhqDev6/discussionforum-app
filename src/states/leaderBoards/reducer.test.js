/**
 * test scenario for leaderBoardReducer
 * - should return the initial state when given by unknown action
 * - should return leaderBoards when given RECEIVE_LEADERBOARDS action
 */

import leaderBoardsReducer from './reducer';

describe('leaderBoardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderBoardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return leaderBoards when given RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderBoards: [
          {
            user: {
              id: 'user-5PqX6Ldhnk_ifroq',
              name: 'Dimas Saputra',
              email: 'dimas@dicoding.com',
              avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
            },
            score: 55,
          },
          {
            user: {
              id: 'user-6oWew2w2Wx5xLUTU',
              name: 'Dicoding',
              email: 'admin@dicoding.com',
              avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
            },
            score: 15,
          },
        ],
      },
    };

    // action
    const nextState = leaderBoardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderBoards);
  });
});
