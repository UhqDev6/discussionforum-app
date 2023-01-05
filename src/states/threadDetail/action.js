import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import { ActionType } from '../../constants/ActionType';
import api from '../../utils/api';
import { receiveCommentActionCreator } from '../comment/action';

const receiveThreadDetailActionCreator = (detailThread) => ({
  type: ActionType.RECEIVE_DETAIL_THREADS,
  payload: {
    detailThread,
  },
});

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

const upVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const downVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const neutralizeVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  try {
    dispatch(clearThreadDetailActionCreator());
    dispatch(showLoading());
    const detailThread = await api.getDetailThread(threadId);
    dispatch(receiveThreadDetailActionCreator(detailThread));
    dispatch(receiveCommentActionCreator(detailThread?.comments));
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncUpVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  try {
    dispatch(showLoading());
    dispatch(upVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    await api.upVoteThread(threadId);
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncDownVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  try {
    dispatch(showLoading());
    dispatch(downVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    await api.downVoteThread(threadId);
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncNeutralizeVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  try {
    dispatch(showLoading());
    dispatch(neutralizeVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    await api.neutralizeVoteThread(threadId);
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

export {
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeVoteThreadDetailActionCreator,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
};
