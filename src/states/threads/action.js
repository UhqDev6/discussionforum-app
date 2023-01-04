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

export {
  receiveThreadActionCreator,
  addThreadActionCreator,
  clearThreadActionCreator,
  toggleFilterThreadByCategory,
  asyncAddThread,
};
