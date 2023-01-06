import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormThread from '../components/moleculas/FormThread';
import { HOME_PAGE } from '../constants/path';
import { asyncAddThread } from '../states/threads/action';

function AddThread() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddThread = ({ title, body, category }) => {
    const payload = {
      title,
      body,
      category,
    };
    dispatch(asyncAddThread(payload));
    navigate(HOME_PAGE);
  };
  return (
    <div className="container relative">
      <div className="h-[524px] overflow-scroll scroll-smooth -ml-16 sm:-ml-12 md:ml-2 sm:mt-4">
        <FormThread onAddThread={onAddThread} />
      </div>
    </div>
  );
}

export default AddThread;
