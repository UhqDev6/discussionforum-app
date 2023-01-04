import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import { commentReducer } from './comment/reducer';
import filteredReducer from './filtered/reducer';
import isPreLoadReducer from './isPreload/reducer';
import leaderBoardsReducer from './leaderBoards/reducer';
import detailThreadReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    threads: threadsReducer,
    isPreload: isPreLoadReducer,
    loadingBar: loadingBarReducer,
    leaderBoards: leaderBoardsReducer,
    filtered: filteredReducer,
    detailThread: detailThreadReducer,
    comments: commentReducer,
  },
});

export default store;
