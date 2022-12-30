import { hideLoading, showLoading } from 'react-redux-loading-bar';
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
  } catch (err) {
    alert(err.message);
  }
  dispatch(hideLoading());
};

export {
  receiverUserActionCreator,
  asyncRegisterUser,
};
