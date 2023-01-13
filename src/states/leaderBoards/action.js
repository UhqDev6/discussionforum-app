import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import { ActionType } from '../../constants/ActionType';
import api from '../../utils/api';

const receiveLeaderboardActionCreator = (leaderBoards) => ({
  type: ActionType.RECEIVE_LEADERBOARDS,
  payload: {
    leaderBoards,
  },
});

const clearLeaderboardActionCreator = () => ({
  type: ActionType.CLEAR_LEADERBOARDS,
});

const asyncReceiveLeaderboard = () => async (dispatch) => {
  try {
    dispatch(clearLeaderboardActionCreator());
    dispatch(showLoading());
    const leaderBoards = await api.getAllLeaderBoards();
    dispatch(receiveLeaderboardActionCreator(leaderBoards));
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

export {
  receiveLeaderboardActionCreator,
  asyncReceiveLeaderboard,
};
