import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ActionType } from '../../constants/ActionType';
import api from '../../utils/api';

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const unSetAuthUserActionCreator = (authUser) => ({
  type: ActionType.UNSET_AUTH_USER,
  payload: {
    authUser,
  },
});

const asyncSetAuthUser = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const token = await api.login({ email, password });
    api.putAccessToken(token);
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncUnSetAuthUser = () => (dispatch) => {
  dispatch(unSetAuthUserActionCreator());
  api.putAccessToken('');
};

export {
  setAuthUserActionCreator,
  unSetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnSetAuthUser,
};
