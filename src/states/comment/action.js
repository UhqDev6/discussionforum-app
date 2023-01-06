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

const upVoteCommentActionCreator = ({ threadId, userId, commentId }) => ({
  type: ActionType.UP_VOTE_COMMENT,
  payload: {
    threadId,
    userId,
    commentId,
  },
});

const downVoteCommentActionCreator = ({ threadId, userId, commentId }) => ({
  type: ActionType.DOWN_VOTE_COMMENT,
  payload: {
    threadId,
    userId,
    commentId,
  },
});

const neutralVoteCommentActionCreator = ({ threadId, userId, commentId }) => ({
  type: ActionType.NEUTRALIZE_VOTE_COMMENT,
  payload: {
    threadId,
    userId,
    commentId,
  },
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

const asyncUpVoteComment = (commentId) => async (dispatch, getState) => {
  const { authUser, detailThread } = getState();
  try {
    dispatch(showLoading());
    dispatch(upVoteCommentActionCreator({
      commentId,
      threadId: detailThread?.id,
      userId: authUser?.id,
    }));
    await api.upVoteComment({ commentId, threadId: detailThread?.id });
  } catch (err) {
    dispatch(upVoteCommentActionCreator({
      commentId,
      threadId: detailThread?.id,
      userId: authUser?.id,
    }));
    toast.error(err.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncDownVoteComment = (commentId) => async (dispatch, getState) => {
  const { authUser, detailThread } = getState();
  try {
    dispatch(showLoading());
    dispatch(downVoteCommentActionCreator({
      commentId,
      threadId: detailThread?.id,
      userId: authUser?.id,
    }));
    await api.downVoteComment({ commentId, threadId: detailThread?.id });
  } catch (err) {
    dispatch(downVoteCommentActionCreator({
      commentId,
      threadId: detailThread?.id,
      userId: authUser?.id,
    }));
    toast.error(err.message);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncNeutralizeVoteComment = (commentId) => async (dispatch, getState) => {
  const { authUser, detailThread } = getState();
  try {
    dispatch(showLoading());
    dispatch(neutralVoteCommentActionCreator({
      commentId,
      threadId: detailThread?.id,
      userId: authUser?.id,
    }));
    await api.neutralVoteComment({ commentId, threadId: detailThread?.id });
  } catch (err) {
    dispatch(neutralVoteCommentActionCreator({
      commentId,
      threadId: detailThread?.id,
      userId: authUser?.id,
    }));
  } finally {
    dispatch(hideLoading());
  }
};

export {
  createCommentActionCreator,
  receiveCommentActionCreator,
  clearCommentActionCreator,
  asyncCreateComment,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};
