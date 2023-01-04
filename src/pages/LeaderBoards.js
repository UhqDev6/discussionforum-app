import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ul from '../assets/ul.jpg';
import { asyncReceiveLeaderboard } from '../states/leaderBoards/action';

function LeaderBoards() {
  const dispatch = useDispatch();
  const { leaderBoards } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  return (
    <div className="container relative">
      <div className="navbar -ml-2 sm:-ml-0 md:ml-10">
        <div className="container flex gap-2 items-center p-2 w-[95%] mx-auto relative">
          <div className="flex mx-auto">
            <h3 className="sm:text-lg font-bold">Active Standings</h3>
          </div>
        </div>
      </div>
      <div className="-ml-32 sm:ml-0 p-8 sm:p-0">
        <div className="container flex gap-5 items-center bg-white p-2 w-[95%] mx-auto mt-2 sm:-ml-12 md:ml-0">
          <div className="w-[88%] ml-14">
            <h3 className="text-lg">User</h3>
          </div>
          <div className="-ml-20">
            <h3 className="text-lg">Score</h3>
          </div>
        </div>
        <div className="h-[500px] overflow-auto scroll-smooth">
          {
            leaderBoards?.map((user) => (
              <div className="container flex gap-5 items-center bg-white p-2 w-[95%] mx-auto mt-2 border-b-[0.5px] border-opacity-25" key={user?.user?.id}>
                <div className="max-w-[3rem] max-h-[3rem] ml-14 sm:-ml-4 md:ml-8">
                  <img
                    src={user?.user?.avatar}
                    alt="img-person"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="w-[78%]">
                  <h3 className="text-md opacity-60">{user?.user?.name}</h3>
                </div>
                <div className="-ml-[4rem] w-[10%]">
                  <h3 className="text-md opacity-60">{user?.score}</h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default LeaderBoards;
