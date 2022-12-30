import { ActionType } from '../../constants/ActionType';

const leaderBoardsReducer = (leaderBoards = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderBoards;
    case ActionType.CLEAR_LEADERBOARDS:
      return null;
    default:
      return leaderBoards;
  }
};

export default leaderBoardsReducer;
