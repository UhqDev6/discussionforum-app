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
  dispatch(showLoading());
  try {
    const token = await api.login({ email, password });
    api.putAccessToken(token);
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncUnSetAuthUser = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(unSetAuthUserActionCreator());
  api.putAccessToken('');
  dispatch(hideLoading());
};

export {
  setAuthUserActionCreator,
  unSetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnSetAuthUser,
};
