import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbUpAlt, MdThumbDownOffAlt, MdThumbUpOffAlt, MdThumbDownAlt, MdOutlineForum,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { postedAt } from '../../utils';

function ThreadFooter(props) {
  const {
    id,
    createdAt,
    upVotesBy,
    downVotesBy,
    totalComments,
    comments,
    isDetails,
    onHandleUpVoteThread,
    onHandleNeutralizeVote,
    onHandleDownVoteThread,
  } = props;

  const { authUser } = useSelector((states) => states);

  return (
    <div className="flex justify-around -mt-10 gap-4">
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (upVotesBy?.includes(authUser?.id)) {
              onHandleNeutralizeVote(id);
              return;
            }
            onHandleUpVoteThread(id);
          }}
          type="button"
        >
          {
            upVotesBy?.includes(authUser?.id) ? (
              <MdThumbUpAlt color="#E47AB3" size="16px" />
            ) : (
              <MdThumbUpOffAlt color="#E47AB3" size="16px" />
            )
          }
        </button>
        <span className="text-[0.75rem] ">{upVotesBy?.length || '0'}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (downVotesBy?.includes(authUser?.id)) {
              onHandleNeutralizeVote(id);
              return;
            }
            onHandleDownVoteThread(id);
          }}
          type="button"
        >
          {
            downVotesBy?.includes(authUser?.id) ? (
              <MdThumbDownAlt color="#E47AB3" size="16px" />
            ) : (
              <MdThumbDownOffAlt color="#E47AB3" size="16px" />
            )
          }
        </button>
        <span className="text-[0.75rem] ">{downVotesBy?.length || '0'}</span>
      </div>
      <div className="flex gap-2">
        <MdOutlineForum color="#E47AB3" size="16px" />
        <span className="text-[0.75rem] ">
          {
            isDetails ? (
              comments?.length || '0'
            ) : (
              totalComments || '0'
            )
          }
        </span>
      </div>
      <div className="flex items-end">
        <p className="text-[0.75rem] text-pink-500">{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

ThreadFooter.defaultProps = {
  id: '',
  createdAt: '',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
  comments: [],
};

ThreadFooter.propTypes = {
  id: PropTypes.string,
  createdAt: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.exact),
  isDetails: PropTypes.bool.isRequired,
  onHandleUpVoteThread: PropTypes.func.isRequired,
  onHandleNeutralizeVote: PropTypes.func.isRequired,
  onHandleDownVoteThread: PropTypes.func.isRequired,
};

export default ThreadFooter;
