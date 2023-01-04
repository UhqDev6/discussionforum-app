import React from 'react';
import { MdNavigation, MdOutlineSend } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Card from '../atoms/Card';
import ul from '../../assets/ul.jpg';

function FormComment() {
  const { authUser = [] } = useSelector((states) => states);

  // console.log(authUser);
  return (
    <div>
      <Card.Body>
        <div className="flex w-full gap-5">
          <div className="max-w-[2rem] max-h-[2rem] rounded-full left-0 mt-[4px]">
            <img
              src={authUser?.avatar}
              alt={authUser?.avarar}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-full">
            <textarea
              className="w-full bg-slate-100 transition  py-1.3 ease-in-out appearance-none border-slate-100 py-2 px-4 h-10 text-gray-700 text-sm leading-tight rounded-xl border-[1px] focus:outline-none focus:bg-white focus:border-pink-400 resize-y"
              type="text"
              placeholder="Write comment..."
              required
            />
          </div>
          <div>
            <MdNavigation color="#E47AB3" size="28px" className="mt-2 rotate-90" />
          </div>
        </div>

      </Card.Body>
    </div>
  );
}

export default FormComment;
