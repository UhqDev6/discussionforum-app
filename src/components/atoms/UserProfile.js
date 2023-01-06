import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ authUser }) {
  const { name, email, avatar } = authUser;
  return (
    <div>
      <div className="flex gap-5 items-center bg-white rounded-xl p-2">
        <div className="max-w-[3.5rem] max-h-[3.5rem]">
          <img
            src={avatar}
            alt="img-person"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg">{name}</h3>
          <span className="text-[0.75rem] opacity-60">{email}</span>
        </div>
      </div>
    </div>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

UserProfile.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
};

export default UserProfile;
