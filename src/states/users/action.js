import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import { ActionType } from '../../constants/ActionType';
import api from '../../utils/api';

const receiverUserActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,
  },
});

const asyncRegisterUser = ({
  name, email, password,
}) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await api.register({
      name, email, password,
    });
    toast('Success created new account 👌');
  } catch (err) {
    toast.error(err.message);
  } finally {
    dispatch(hideLoading());
  }
};

export {
  receiverUserActionCreator,
  asyncRegisterUser,
};
