import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import ThreadHead from './ThreadHead';
import ThreadTitle from './ThreadTitle';
import ThreadBody from './ThreadBody';
import ThreadFooter from './ThreadFooter';

export default function ThreadItems(props) {
  const {
    threadDetail,
    threads,
    isDetails,
    users,
  } = props;

  // const dispatch = useDispatch();
  const handleUserDetails = (id) => users?.filter((user) => user?.id === id)[0];

  return (
    <div>
      {
        isDetails ? (
          <ThreadHead
            avatar={threadDetail?.owner?.avatar}
            name={threadDetail?.owner?.name}
            id={threadDetail?.id}
            isDetails={isDetails}
          />
        ) : (
          <ThreadHead
            avatar={handleUserDetails(threads?.ownerId)?.avatar}
            name={handleUserDetails(threads?.ownerId)?.name}
            id={threads?.id}
            isDetails={isDetails}
          />
        )
      }
      <Card.Title>
        {
          isDetails ? (
            <ThreadTitle
              title={threadDetail?.title}
              category={threadDetail?.category}
              isDetails={isDetails}
            />
          ) : (
            <ThreadTitle
              id={threads?.id}
              title={threads?.title}
              category={threads?.category}
              isDetails={isDetails}
            />
          )
        }
      </Card.Title>
      <Card.Body>
        {
          isDetails ? (
            <ThreadBody body={threadDetail?.body} contentFull={isDetails} />
          ) : (
            <ThreadBody body={threads?.body} />
          )
        }
      </Card.Body>
      <Card.Footer>
        {
          isDetails ? (
            <ThreadFooter
              createdAt={threadDetail?.createdAt}
              upVotesBy={threadDetail?.upVotesBy}
              downVotesBy={threadDetail?.downVotesBy}
              comments={threadDetail?.comments}
              isDetails={isDetails}
            />
          ) : (
            <ThreadFooter
              createdAt={threads?.createdAt}
              upVotesBy={threads?.upVotesBy}
              downVotesBy={threads?.downVotesBy}
              totalComments={threads?.totalComments}
              isDetails={isDetails}
            />
          )
        }
      </Card.Footer>
    </div>
  );
}

const userArray = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
const threadShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  comments: PropTypes.array,
};

const threadsShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  totalComments: PropTypes.number,
};

ThreadItems.propTypes = {
  threadDetail: PropTypes.shape(threadShape),
  threads: PropTypes.shape(threadsShape),
  users: PropTypes.arrayOf(PropTypes.shape(userArray)).isRequired,
  isDetails: PropTypes.bool,
};

ThreadItems.defaultProps = {
  isDetails: false,
  threadDetail: {
    title: '',
    ownerId: '',
    body: '',
    upVotesBy: [],
    downVotesBy: [],
  },
  threads: {
    title: '',
    ownerId: '',
    body: '',
    upVotesBy: [],
    downVotesBy: [],
  },
};
