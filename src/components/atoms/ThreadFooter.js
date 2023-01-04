import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbUpAlt, MdThumbDownOffAlt, MdThumbUpOffAlt, MdThumbDownAlt, MdOutlineForum,
} from 'react-icons/md';
import { postedAt } from '../../utils';

function ThreadFooter(props) {
  const {
    createdAt,
    upVotesBy,
    downVotesBy,
    totalComments,
    comments,
    isDetails,
  } = props;

  return (
    <div className="flex justify-around -mt-10 gap-4">
      <div className="flex gap-2">
        <MdThumbUpOffAlt color="#E47AB3" size="16px" />
        <span className="text-[0.75rem] ">{upVotesBy?.length || '0'}</span>
      </div>
      <div className="flex gap-2">
        <MdThumbDownOffAlt color="#E47AB3" size="16px" />
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
  createdAt: '',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
  comments: [],
};

ThreadFooter.propTypes = {
  createdAt: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.exact),
  isDetails: PropTypes.bool.isRequired,
};

export default ThreadFooter;
