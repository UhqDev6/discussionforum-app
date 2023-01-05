import { ActionType } from '../../constants/ActionType';

const commentReducer = (comment = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENTS:
      return action.payload.comments;
    case ActionType.ADD_COMMENT:
      return [action.payload.comment, ...comment];
    case ActionType.CLEAR_COMMENTS:
      return null;
    case ActionType.UP_VOTE_COMMENT:
      return comment.map((comm) => {
        if (comm.id === action.payload.commentId) {
          return {
            ...comm,
            upVotesBy: comm.upVotesBy.includes(action.payload.userId)
              ? comm.upVotesBy.filter((id) => id !== action.payload.userId)
              : comm.upVotesBy.concat([action.payload.userId]),
            downVotesBy: comm.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return comm;
      });
    case ActionType.DOWN_VOTE_COMMENT:
      return comment.map((comm) => {
        if (comm.id === action.payload.commentId) {
          return {
            ...comm,
            downVotesBy: comm.downVotesBy.includes(action.payload.userId)
              ? comm.downVotesBy.filter((id) => id !== action.payload.userId)
              : comm.downVotesBy.concat([action.payload.userId]),
            upVotesBy: comm.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return comm;
      });
    case ActionType.NEUTRALIZE_VOTE_COMMENT:
      return comment.map((comm) => {
        if (comm.id === action.payload.commentId) {
          return {
            ...comm,
            upVotesBy: comm.upVotesBy.filter((id) => id !== action.payload.userId),
            downVotesBy: comm.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return comm;
      });
    default:
      return comment;
  }
};

export {
  commentReducer,
};
