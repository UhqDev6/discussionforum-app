import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

function ThreadBody(props) {
  const { body, contentFull } = props;
  return (
    <div>
      <p className={`text-xs font-light tracking-wide leading-normal opacity-70 text-justify -mt-10 overflow-hidden  ${contentFull ? '' : 'thread-limit'} `}>
        {
          body && parse(body)
        }
      </p>
    </div>
  );
}

ThreadBody.propTypes = {
  body: PropTypes.string,
  contentFull: PropTypes.bool,
};

ThreadBody.defaultProps = {
  body: '',
  contentFull: false,
};
export default ThreadBody;
