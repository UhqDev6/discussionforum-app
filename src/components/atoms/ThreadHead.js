import React from 'react';
import PropTypes from 'prop-types';

function ThreadHead(props) {
  const {
    avatar,
    name,
  } = props;

  return (
    <div className="relative flex">
      <div className="max-w-[2rem] max-h-[2rem] rounded-full flex absolute -top-0">
        <img
          src={avatar}
          alt={avatar}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <span className="text-xs font-light absolute ml-10">{name}</span>
    </div>
  );
}

ThreadHead.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

ThreadHead.defaultProps = {
  avatar: '',
  name: '',
};

export default ThreadHead;
