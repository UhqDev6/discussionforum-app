import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../atoms/Title';

function Header() {
  const { authUser } = useSelector((states) => states);
  return (
    <div className="w-full flex justify-between items-center h-24 mx-auto px-20 bg-gradient-to-b from-pink-200 ">
      <div>
        <Title className="w-full text-4xl uppercase font-bold text-pink-400">
          {
            authUser ? (
              <p>Welcome To Forum Apps</p>
            ) : (
              <p>Forum Apps</p>
            )
          }
        </Title>
      </div>
    </div>
  );
}

export default Header;
