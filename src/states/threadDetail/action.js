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

export {
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
};
