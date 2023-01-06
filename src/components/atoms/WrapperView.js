import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WrapperView(props) {
  const { children } = props;
  return (
    <div>
      {
        children
      }
      <ToastContainer
        position="top-right"
        autoClose={1500}
        theme="light"
      />
    </div>
  );
}

WrapperView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperView;
