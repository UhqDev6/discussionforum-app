import { ActionType } from '../../constants/ActionType';

const detailThreadReducer = (detailThread = {}, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREADS:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    default:
      return detailThread;
  }
};

export default detailThreadReducer;
