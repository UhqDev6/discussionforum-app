import { ActionType } from '../../constants/ActionType';

const commentReducer = (comments = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENTS:
      return action.payload.comments;
    case ActionType.ADD_COMMENT:
      return [action.payload.comments, ...comments];
    case ActionType.CLEAR_COMMENTS:
      return null;
    default:
      return comments;
  }
};

export {
  commentReducer,
};
