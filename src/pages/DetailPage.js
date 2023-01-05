import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../components/atoms/Card';
import CommentList from '../components/atoms/CommentList';
import ThreadItems from '../components/atoms/ThreadItems';
import WrapperView from '../components/atoms/WrapperView';
import FormComment from '../components/moleculas/FormComment';
import ThreadList from '../components/moleculas/ThreadList';
import { asyncCreateComment, clearCommentActionCreator } from '../states/comment/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage(props) {
  const { filteredId } = props;
  const { id } = useParams();

  const {
    detailThread = [], users = [], comments = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const onAddComment = ({ comment }) => {
    const payload = {
      threadId: id,
      comment,
    };
    dispatch(asyncCreateComment(payload));
    dispatch(asyncReceiveThreadDetail(id));
    return () => {
      dispatch(clearCommentActionCreator);
    };
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch]);

  return (
    <WrapperView>
      <div className="container relative">
        <div className="h-[524px] overflow-scroll scroll-smooth -ml-20 p-8 -mt-8 md:ml-10 md:p-0 md:mt-2">
          <Card>
            <ThreadItems isDetails threadDetail={detailThread} users={users} />
            <FormComment comments={comments} onAddComment={onAddComment} />
            {
              comments?.map((comment) => (
                <div key={`${comment?.id}-filteredId`}>
                  <CommentList key={comment?.id} comment={comment} />
                </div>
              ))
            }
          </Card>
        </div>
      </div>
    </WrapperView>
  );
}

DetailPage.defaultProps = {
  filteredId: 'id-detail',
};

DetailPage.propTypes = {
  filteredId: PropTypes.string,
};

export default DetailPage;
