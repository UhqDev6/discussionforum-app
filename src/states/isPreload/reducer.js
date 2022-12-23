import { ActionType } from '../../constants/ActionType';

const isPreLoadReducer = (isPreload = [], action = {}) => {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
};

export default isPreLoadReducer;
