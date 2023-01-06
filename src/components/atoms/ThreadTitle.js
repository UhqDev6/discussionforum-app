import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ThreadTitle(props) {
  const {
    id,
    title,
    category,
    isDetails,
  } = props;

  return (
    <div>
      {
        isDetails ? (
          <div>
            <p>
              <span className="text-base font-bold text-pink-400 capitalize">{title}</span>
            </p>

            <span className="text-xs underline decoration-pink-400">
              #
              {`${category}`}
            </span>
          </div>
        ) : (
          <div>
            <Link to={`/thread/${id}`}>
              <span className="text-base font-bold text-pink-400 hover:underline capitalize">{title}</span>
            </Link>
            <br />
            <span className="text-xs underline decoration-pink-400">
              #
              {`${category}`}
            </span>
          </div>
        )
      }
    </div>
  );
}

ThreadTitle.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  isDetails: PropTypes.bool.isRequired,
};

ThreadTitle.defaultProps = {
  id: '',
  title: '',
  category: '',
};

export default ThreadTitle;
