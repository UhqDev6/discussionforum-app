import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/atoms/Card';
import CommentList from '../components/atoms/CommentList';
import ThreadItems from '../components/atoms/ThreadItems';
import WrapperView from '../components/atoms/WrapperView';
import FormComment from '../components/moleculas/FormComment';
import { asyncCreateComment } from '../states/comment/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();

  const {
    detailThread = [], users = [], comments = [], authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const onAddComment = ({ comment }) => {
    const payload = {
      threadId: id,
      comment,
    };
    dispatch(asyncCreateComment(payload));
    dispatch(asyncReceiveThreadDetail(id));
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  return (
    <WrapperView>
      <div className="container relative">
        <div className="h-[524px] overflow-scroll scroll-smooth -ml-20 p-8 -mt-8 md:ml-10 md:p-0 md:mt-2">
          <Card>
            <ThreadItems isDetails threadDetail={detailThread} users={users} />
            <FormComment comments={comments} onAddComment={onAddComment} authUser={authUser} />
            {
              comments?.map((comment) => (
                <div key={`${comment?.id}`}>
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

export default DetailPage;
