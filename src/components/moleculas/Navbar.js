import React from 'react';
import NavbarData from '../atoms/NavbarData';
import UserProfile from '../atoms/UserProfile';

// eslint-disable-next-line react/prop-types
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

export default Navbar;
