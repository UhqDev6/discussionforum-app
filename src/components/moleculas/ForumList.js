import React from 'react';
import PropTypes from 'prop-types';

function ForumList({ forums }) {
  // console.log(forums);
  return (
    <div className="forums-list">
      {/* {forums.map((forum) => (
        <p>
          {forum}
        </p>
      ))} */}
    </div>
  );
}

ForumList.propTypes = {
  forums: PropTypes.arrayOf().isRequired,
};

export default ForumList;
