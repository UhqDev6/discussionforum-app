import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import forumsReducer from './forums/reducer';
import isPreLoadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    forums: forumsReducer,
    isPreload: isPreLoadReducer,
  },
});

export default store;
