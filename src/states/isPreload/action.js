import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ActionType } from '../../constants/ActionType';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const setIsPreLoadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: {
    isPreload,
  },
});

const asyncPreloadProcess = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (err) {
    dispatch(setAuthUserActionCreator(null));
  } finally {
    dispatch(setIsPreLoadActionCreator(false));
    dispatch(hideLoading());
  }
};

export {
  setIsPreLoadActionCreator,
  asyncPreloadProcess,
};
