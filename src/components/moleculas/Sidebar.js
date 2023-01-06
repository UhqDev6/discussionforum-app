import React from 'react';
import PropTypes from 'prop-types';
import SidebarData from '../atoms/SiderbarData';
import UserProfile from '../atoms/UserProfile';

function Sidebar({ authUser, signOut }) {
  return (
    <div className="sidebar-container hidden sm:hidden md:block">
      <UserProfile authUser={authUser} />
      <SidebarData signOut={signOut} />
      <div
        type="button"
        className="absolute animate-ping top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-pink-400 opacity-60 rounded-full cursor-pointer"
      />
    </div>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Sidebar;
