import React, { useState } from 'react';
import { MdNavigation } from 'react-icons/md';
import PropTypes from 'prop-types';
import Card from '../atoms/Card';
import useInput from '../../hooks/useInput';
import Button from '../atoms/Button';

function FormComment(props) {
  const { onAddComment, authUser } = props;
  const [comment, onCommentChange, handleResetComment] = useInput('');
  const [isLoading, setIsLoading] = useState(false);

  const onHandleComment = (event) => {
    setIsLoading(true);
    event.preventDefault();
    onAddComment({ comment });
    setIsLoading(false);
    handleResetComment();
  };

  return (
    <div>
      <Card.Body>
        <form className="flex w-full gap-5" onSubmit={onHandleComment}>
          <div className="max-w-[2rem] max-h-[2rem] rounded-full left-0 mt-[4px]">
            <img
              src={authUser?.avatar}
              alt={authUser?.avatar}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-full">
            <textarea
              className="w-full bg-slate-100 transition  py-1.3 ease-in-out appearance-none border-slate-100 py-2 px-4 h-10 text-gray-700 text-sm leading-tight rounded-xl border-[1px] focus:outline-none focus:bg-white focus:border-pink-400 resize-y"
              type="text"
              value={!comment ? '' : comment}
              onChange={onCommentChange}
              placeholder="Write comment..."
              data-testid="threadComment"
              required
            />
          </div>
          <Button type="submit" loading={isLoading}>
            <MdNavigation color="#E47AB3" size="28px" className="rotate-90 -mt-2" />
          </Button>
        </form>
      </Card.Body>
    </div>
  );
}

FormComment.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  authUser: PropTypes.string,
};

FormComment.defaultProps = {
  authUser: '',
};

export default FormComment;
