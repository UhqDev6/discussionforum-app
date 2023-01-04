import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { children } = props;

  return (
    <div data-cy="activity-item" className="w-full shadow-md rounded-2xl overflow-hidden bg-white mt-8">
      {children}
    </div>
  );
}

function Title(props) {
  const { children } = props;
  return (
    <div className="p-8 mt-2">
      <h1 data-cy="activity-item-title" className="text-[18px] font-bold">
        {children}
      </h1>
    </div>
  );
}

function Body(props) {
  const { children } = props;
  return (
    <div className="p-8">
      {children}
    </div>
  );
}

function Footer(props) {
  const { children } = props;
  return (
    <div className="p-8">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};
Title.propTypes = {
  children: PropTypes.node,
};
Body.propTypes = {
  children: PropTypes.node,
};
Footer.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: '',
};
Title.defaultProps = {
  children: '',
};
Body.defaultProps = {
  children: '',
};
Footer.defaultProps = {
  children: '',
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
