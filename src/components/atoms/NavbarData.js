import React from 'react';
import PropTypes from 'prop-types';
import { BsGraphUp, BsChatSquareText, BsBoxArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HOME_PAGE, LEADER_BOARDS_PAGE } from '../../constants/path';

function NavbarData({ signOut }) {
  return (
    <div className="mt-4 flex flex-grow gap-10">
      <Link to={HOME_PAGE}>
        <div className="left-4 bottom-4">
          <div className="mr-8 text-[1.7rem]">
            <BsChatSquareText color="#E47AB3" />
          </div>
          <div>Talk</div>
        </div>
      </Link>
      <Link to={LEADER_BOARDS_PAGE}>
        <div className=" left-4 bottom-4">
          <div className="mr-8 text-[1.7rem]">
            <BsGraphUp color="#E47AB3" />
          </div>
          <div>LeaderBoard</div>
        </div>
      </Link>
      <div className="left-4 bottom-4">
        <div className="mr-8 text-[1.7rem]">
          <BsBoxArrowRight color="#E47AB3" />
        </div>
        <div>
          <button
            className="text-black"
            type="button"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

NavbarData.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default NavbarData;
