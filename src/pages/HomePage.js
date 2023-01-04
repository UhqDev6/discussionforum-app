import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MostPopular from '../components/moleculas/MostPopular';
import Sidebar from '../components/moleculas/Sidebar';
import Card from '../components/atoms/Card';
import ThreadList from '../components/moleculas/ThreadList';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import {
  ADD_PAGE,
} from '../constants/path';
import WrapperView from '../components/atoms/WrapperView';

function HomePage() {
  const {
    threads = [], filtered = '',
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  return (
    <WrapperView>
      <div className="container relative">
        <MostPopular threads={threads} filtered={filtered} />
        <div className="h-[524px] overflow-scroll scroll-smooth -ml-16 sm:-ml-12 md:ml-2 sm:mt-4 mt-8">
          <ThreadList threads={threads} filtered={filtered} />
        </div>
        <Link to={ADD_PAGE}>
          <div
            type="button"
            className="absolute animate-bounce hover:animate-none hover:duration-75 top-[50%] sm:top-[85%] flex justify-center items-center sm:left-[92%] left-64 w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-300 opacity-60 rounded-full cursor-pointer"
          >
            <BsFillPlusCircleFill color="#ffffff" size="25px" />
          </div>
        </Link>
      </div>
    </WrapperView>
  );
}

export default HomePage;
