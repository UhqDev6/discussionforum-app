import { ActionType } from '../../constants/ActionType';

const usersReducer = (users = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users;
    default:
      return users;
  }
};
export default usersReducer;
