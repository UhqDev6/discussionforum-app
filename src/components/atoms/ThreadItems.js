import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbUpAlt, MdThumbDownOffAlt, MdThumbUpOffAlt, MdThumbDownAlt, MdReply,
} from 'react-icons/md';
import { postedAt } from '../../utils';

function ThreadItems(props) {
  const {
    createdAt,
    upVotesBy,
    downVotesBy,
    totalComments,
  } = props;
  console.log(upVotesBy);
  return (
    <div className="flex -mt-10 gap-4">
      <div className="flex gap-2">
        <MdThumbUpOffAlt color="#E47AB3" size="16px" />
        <span className="text-[0.75rem] ">{upVotesBy?.length || '0'}</span>
      </div>
      <div className="flex gap-2">
        <MdThumbDownOffAlt color="#E47AB3" size="16px" />
        <span className="text-[0.75rem] ">{downVotesBy?.length || '0'}</span>
      </div>
      <div className="flex gap-2">
        <MdReply color="#E47AB3" size="16px" />
        <span className="text-[0.75rem] ">{totalComments?.length || '0'}</span>
      </div>
      <div>
        <p className="text-[0.75rem] text-pink-500">{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

ThreadItems.propTypes = {
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default ThreadItems;
