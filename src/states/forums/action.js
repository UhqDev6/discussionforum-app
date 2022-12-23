import { ActionType } from '../../constants/ActionType';

const receiveForumActionCreator = (forums) => ({
  type: ActionType.RECEIVE_FORUMS,
  payload: {
    forums,
  },
});

export {
  receiveForumActionCreator,
};
