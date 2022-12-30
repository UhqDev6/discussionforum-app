import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    type, children, className,
  } = props;
  return (
    <button
      className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-4 rounded-full`}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string]),
};

Button.defaultProps = {
  children: '',
  className: '',
};

export default Button;
