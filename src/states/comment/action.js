import { type } from '@testing-library/user-event/dist/type';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import { ActionType } from '../../constants/ActionType';
import api from '../../utils/api';

const receiveCommentActionCreator = (comments) => ({
  type: ActionType.RECEIVE_COMMENTS,
  payload: {
    comments,
  },
});

const createCommentActionCreator = ({ threadId, comment }) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    threadId,
    comment,
  },
});

const clearCommentActionCreator = () => ({
  type: ActionType.CLEAR_COMMENTS,
});

const asyncCreateComment = ({ threadId, comment }) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const responseComment = api.createComment({
      threadId,
      comment,
    });
    dispatch(createCommentActionCreator(responseComment));
    toast('Added new comment 👌');
  } catch (err) {
    toast.error(err.message);
  } finally {
    dispatch(hideLoading());
  }
};

export {
  createCommentActionCreator,
  receiveCommentActionCreator,
  clearCommentActionCreator,
  asyncCreateComment,
};
