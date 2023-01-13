import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { receiveThreadActionCreator } from '../threads/action';
import { receiverUserActionCreator } from '../users/action';

const asyncPopulateUserAndThreads = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const users = await api.getAllUsers();
    const threads = await api.getAllThreads();

    dispatch(receiverUserActionCreator(users));
    dispatch(receiveThreadActionCreator(threads));
  } catch (err) {
    toast.error(err?.message);
  } finally {
    dispatch(hideLoading());
  }
};

export {
  asyncPopulateUserAndThreads,
};
