import React from 'react';
import PropTypes from 'prop-types';

function Title({ className = '', children, ...props }) {
  return (
    <h1 className={`${className}`} {...props}>
      {children }
    </h1>
  );
}

Title.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Title;
