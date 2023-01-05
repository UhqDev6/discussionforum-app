import { ActionType } from '../../constants/ActionType';

const detailThreadReducer = (detailThread = {}, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREADS:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.UP_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy.concat([action.payload.userId]),
        downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVotesBy.concat([action.payload.userId]),
        upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    default:
      return detailThread;
  }
};

export default detailThreadReducer;
