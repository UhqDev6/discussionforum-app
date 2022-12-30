import React from 'react';
import PropTypes from 'prop-types';

function ThreadTitle(props) {
  const {
    title,
    category,
  } = props;
  return (
    <div>
      <span className="text-base font-bold text-pink-400 capitalize">{title}</span>
      <br />
      <span className="text-xs underline decoration-pink-400">
        #
        {`${category}`}
      </span>
    </div>
  );
}

ThreadTitle.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};

ThreadTitle.defaultProps = {
  title: '',
  category: '',
};

export default ThreadTitle;
