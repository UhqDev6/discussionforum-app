import React from 'react';
import PropTypes from 'prop-types';

function ThreadHead(props) {
  const {
    avatar,
    name,
    isDetails,
  } = props;

  return (
    <div className="relative w-full">
      {
        isDetails ? (
          <div className="max-w-[3rem] max-h-[3rem] rounded-full mx-auto">
            <img
              src={avatar}
              alt={avatar}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="max-w-[2rem] max-h-[2rem] rounded-full mx-auto">
            <img
              src={avatar}
              alt={avatar}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        )
      }
      <div className="justify-center flex w-full mt-[4px]">
        <span className="text-xs font-light">
          {name}
        </span>
      </div>
    </div>
  );
}

ThreadHead.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isDetails: PropTypes.bool.isRequired,
};

ThreadHead.defaultProps = {
  avatar: '',
  name: '',
};

export default ThreadHead;
