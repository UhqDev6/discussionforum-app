import React from 'react';
import {
  MdThumbUpAlt, MdThumbDownOffAlt, MdThumbUpOffAlt, MdThumbDownAlt, MdOutlineForum,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import Card from './Card';
import { postedAt } from '../../utils';

function CommentList(props) {
  const {
    comment,
  } = props;

  const { authUser = {} } = useSelector((states) => states);

  return (
    <div>
      <Card.Body>
        <div className="-mt-10 flex w-full gap-5">
          <div className="max-w-[2rem] max-h-[2rem] rounded-full left-0 mt-[3px]">
            <img
              src={comment?.owner?.avatar}
              alt={comment?.owner?.avatar}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="bg-slate-100 w-full rounded-lg h-auto p-2">
            <span className="text-xs font-semibold">{comment?.owner?.name}</span>
            <p className="text-xs font-light tracking-wider leading-snug opacity-70 overflow-hidden ">
              {
                parse(comment?.content)
              }
            </p>
          </div>
        </div>
        <div className="flex gap-4 ml-14 mt-2">
          <div className="flex gap-2">
            <MdThumbUpOffAlt color="#E47AB3" size="16px" />
            <span className="text-[0.75rem] ">{comment?.upVotesBy?.length || '0'}</span>
          </div>
          <div className="flex gap-2">
            <MdThumbDownOffAlt color="#E47AB3" size="16px" />
            <span className="text-[0.75rem] ">{comment?.downVotesBy?.length || '0'}</span>
          </div>
          <div className="flex items-end">
            <p className="text-[0.75rem] text-pink-500">{postedAt(comment?.createdAt)}</p>
          </div>
        </div>
      </Card.Body>
    </div>
  );
}

const commentShape = {
  content: PropTypes.string,
  createdAt: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
};

CommentList.defaultProps = {
  comment: {
    content: '',
    createdAt: '',
    upVotesBy: [],
    downVotesBy: [],
  },
};

CommentList.propTypes = {
  comment: PropTypes.shape(commentShape),
};
export default CommentList;
