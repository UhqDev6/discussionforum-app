import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SidebarData from '../atoms/SiderbarData';
import UserProfile from '../atoms/UserProfile';

// eslint-disable-next-line react/prop-types
function Sidebar({ authUser, signOut }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle ? 'w-[5.8rem]' : ''} sidebar-container hidden sm:hidden md:block`}>
      <UserProfile authUser={authUser} />
      <SidebarData signOut={signOut} />
      <div
        type="button"
        className="absolute animate-ping top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-pink-400 opacity-60 rounded-full cursor-pointer"
      />
    </div>
  );
}

export default Sidebar;
