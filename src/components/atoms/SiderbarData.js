import React from 'react';
import PropTypes from 'prop-types';
import { BsGraphUp, BsChatSquareText, BsBoxArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HOME_PAGE, LEADER_BOARDS_PAGE } from '../../constants/path';

function SidebarData({ signOut }) {
  return (
    <div className="mt-8">
      <Link to={HOME_PAGE}>
        <div className="sidebar left-4 bottom-4">
          <div className="mr-8 text-[1.7rem]">
            <BsChatSquareText />
          </div>
          <div>Talk</div>
        </div>
      </Link>
      <Link to={LEADER_BOARDS_PAGE}>
        <div className="sidebar left-4 bottom-4">
          <div className="mr-8 text-[1.7rem]">
            <BsGraphUp />
          </div>
          <div>LeaderBoard</div>
        </div>
      </Link>
      <div className="sidebar left-4 bottom-4 mt-64">
        <div className="mr-8 text-[1.7rem]">
          <BsBoxArrowRight />
        </div>
        <div>
          <button
            className="text-black"
            type="button"
            onClick={signOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

SidebarData.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default SidebarData;
