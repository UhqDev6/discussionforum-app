import { showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveForumActionCreator } from '../forums/action';
import { receiverUserActionCreator } from '../users/action';

const asyncPopulateUserAndForum = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const users = await api.getAllUsers();
    const forums = await api.getAllForums();

    dispatch(receiverUserActionCreator(users));
    dispatch(receiveForumActionCreator(forums));
  } catch (err) {
    alert(err.message);
  }
};

export {
  asyncPopulateUserAndForum,
};
