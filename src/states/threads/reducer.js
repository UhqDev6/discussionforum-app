import { ActionType } from '../../constants/ActionType';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.CLEAR_THREADS:
      return [];
    default:
      return threads;
  }
};

export default threadsReducer;
