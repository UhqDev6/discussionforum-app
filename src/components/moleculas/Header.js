import React from 'react';
import Title from '../atoms/Title';

function Header() {
  return (
    <div className="w-full flex justify-between items-center h-24 mx-auto px-20 bg-pink-400 fixed">
      <div>
        <Title className="w-full">
          <span className="text-2xl uppercase font-bold text-white">Forum App</span>
        </Title>
      </div>
    </div>
  );
}

export default Header;
