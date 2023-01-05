import { ActionType } from '../../constants/ActionType';

const commentReducer = (comment = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENTS:
      return action.payload.comments;
    case ActionType.ADD_COMMENT:
      return [action.payload.comment, ...comment];
    case ActionType.CLEAR_COMMENTS:
      return null;
    default:
      return comment;
  }
};

export {
  commentReducer,
};
