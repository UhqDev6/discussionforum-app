import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    type, children, className,
  } = props;
  return (
    <button
      className={`${className} [&>svg]:w-7 [&>svg]:h-7 flex items-center gap-x-2 text-white rounded-full`}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  children: '',
  className: '',
};

export default Button;
