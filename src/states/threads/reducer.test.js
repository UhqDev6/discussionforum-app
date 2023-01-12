/**
 * test scenario for threadReducer
 *  - should return the initial state when given by unknown action
 *  - should return thread when given RECEIVE_THREADS action
 */

import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];

    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
});
