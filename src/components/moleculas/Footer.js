import React from 'react';
import Title from '../atoms/Title';

function Footer() {
  return (
    <div className="w-full flex justify-between items-center h-[3.2rem]  mx-auto px-20 bg-gradient-to-t from-pink-200 ">
      <div>
        <Title className="w-full text-lg uppercase font-bold text-pink-400">
          Become React Developer Expert
        </Title>
      </div>
    </div>
  );
}

export default Footer;
