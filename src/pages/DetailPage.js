import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/atoms/Card';
import CommentList from '../components/atoms/CommentList';
import ThreadItems from '../components/atoms/ThreadItems';
import FormComment from '../components/moleculas/FormComment';
import ThreadList from '../components/moleculas/ThreadList';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();

  const {
    detailThread = [], users = [], comments = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch]);

  return (
    <div className="container relative">
      <div className="h-[524px] overflow-scroll scroll-smooth -ml-20 p-8 -mt-8 md:ml-10 md:p-0 md:mt-2">
        <Card>
          <ThreadItems isDetails threadDetail={detailThread} users={users} />
          <FormComment />
          {
            comments?.map((comment) => (
              <CommentList key={comment.id} comment={comment} />
            ))
          }
        </Card>
      </div>
    </div>
  );
}

export default DetailPage;
