import { ActionType } from '../../constants/ActionType';

const forumsReducer = (forums = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_FORUMS:
      return action.payload.forums;
    default:
      return forums;
  }
};

export default forumsReducer;
