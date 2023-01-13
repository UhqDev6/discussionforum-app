/**
 * test scenario for leaderBoard thunk function
 *  - thunk function leaderBoard
 *  - should dispatch action correctly when data fetch is success on leaderBoard page
 *  - should dispatch action correctly when data fetch is failed on leaderBoard page
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { asyncReceiveLeaderboard, receiveLeaderboardActionCreator } from './action';

const fakeLeaderBoard = [
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
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveLeaderboard thunk', () => {
  beforeEach(() => {
    // back up implementation
    api._getAllLeaderBoards = api.getAllLeaderBoards;
  });

  afterEach(() => {
    // restore implementation
    api._getAllLeaderBoards = api.getAllLeaderBoards;
    // delete back up
    delete api._getAllLeaderBoards;
  });

  it('should dispatch action correctly when data fetch is success on leaderBoard page', async () => {
    // arrange
    // stub implementation
    api.getAllLeaderBoards = () => Promise.resolve(fakeLeaderBoard);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardActionCreator(fakeLeaderBoard));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetch is failed on leaderBoard page', async () => {
    // arrange
    // stub implementation
    api.getAllLeaderBoards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.error = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
