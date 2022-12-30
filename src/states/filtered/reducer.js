import { ActionType } from '../../constants/ActionType';

const filteredReducer = (filtered = '', action = {}) => {
  switch (action.type) {
    case ActionType.SET_FILTERED: {
      if (action.payload === filtered) {
        return '';
      }
      return action.payload.filters;
    }
    default:
      return filtered;
  }
};

export default filteredReducer;
