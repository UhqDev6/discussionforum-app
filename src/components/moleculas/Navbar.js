import React from 'react';
import PropTypes from 'prop-types';
import NavbarData from '../atoms/NavbarData';
import UserProfile from '../atoms/UserProfile';

function Navbar({ authUser, signOut }) {
  return (
    <div className="w-full sm:flex sm:flex-grow gap-10 md:hidden mt-10 relative">
      <div className="ml-20">
        <UserProfile authUser={authUser} />
      </div>
      <div className="ml-16 mt-10 sm:mt-0">
        <NavbarData signOut={signOut} />
      </div>
    </div>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navbar;
