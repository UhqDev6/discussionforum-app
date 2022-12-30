import { ActionType } from '../../constants/ActionType';

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

const clearThreadActionCreator = (thread) => ({
  type: ActionType.CLEAR_THREADS,
  payload: {
    thread,
  },
});

const toggleFilterThreadByCategory = (category) => ({
  type: ActionType.TOGGLE_FILTER_THREAD_BY_CATEGORY,
  payload: {
    category,
  },
});

export {
  receiveThreadActionCreator,
  addThreadActionCreator,
  clearThreadActionCreator,
  toggleFilterThreadByCategory,
};
