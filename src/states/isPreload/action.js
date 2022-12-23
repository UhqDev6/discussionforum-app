import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ActionType } from '../../constants/ActionType';
import api from '../../utils/api';

const setIsPreLoadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: {
    isPreload,
  },
});

const asyncPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const authUser = await api.getOwnProfile();
    dispatch(setIsPreLoadActionCreator(authUser));
  } catch (err) {
    dispatch(setIsPreLoadActionCreator(null));
  } finally {
    dispatch(setIsPreLoadActionCreator(false));
  }
  dispatch(hideLoading());
};

export {
  setIsPreLoadActionCreator,
  asyncPreloadProcess,
};
