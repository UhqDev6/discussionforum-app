import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import { ActionType } from '../../constants/ActionType';
import api from '../../utils/api';

const receiveThreadActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREADS,
  payload: {
    thread,
  },
});

const clearThreadActionCreator = () => ({
  type: ActionType.CLEAR_THREADS,
});

const toggleFilterThreadByCategory = (category) => ({
  type: ActionType.TOGGLE_FILTER_THREAD_BY_CATEGORY,
  payload: {
    category,
  },
});

const upVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const downVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const neutralizeVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.NEUTRALIZE_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const responseThread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(responseThread));
    toast('Added new thread 👌');
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncUpVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  try {
    dispatch(showLoading());
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    await api.upVoteThread(threadId);
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncDownVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  try {
    dispatch(showLoading());
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    await api.downVoteThread(threadId);
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncNeutralizeVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  try {
    dispatch(showLoading());
    dispatch(neutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }));
    await api.neutralizeVoteThread(threadId);
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

export {
  receiveThreadActionCreator,
  addThreadActionCreator,
  clearThreadActionCreator,
  toggleFilterThreadByCategory,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};
