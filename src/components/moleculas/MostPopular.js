import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilteredActionCreator } from '../../states/filtered/action';
import Button from '../atoms/Button';

function MostPopular(props) {
  const {
    threads, filtered,
  } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilterThreadByCategory = (key) => {
    dispatch(setFilteredActionCreator(key));
  };

  const handleResetFilter = () => {
    navigate('/');
  };

  return (
    <div className="navbar -ml-4 sm:-ml-0 md:ml-6 lg:ml-12 xl:ml-16">
      <div className="container flex gap-2 items-center p-2 w-[95%] mx-auto mt-0 relative">
        <div className="">
          <h3 className="sm:text-lg font-bold">Most Popular</h3>
        </div>
        <div className="ml-40 flex gap-4 overflow-auto absolute max-sm:w-20 max-w-[50%]">
          {
            threads?.filter((value, index, item) => index === item.findIndex((temp) => (
              temp?.category === value?.category
            )))?.map((thread) => (
              <div
                key={`${thread?.category}-${thread?.createdAt}`}
              >
                <button
                  onClick={() => handleFilterThreadByCategory(thread?.category)}
                  type="button"
                  className={`${filtered === thread?.category ? 'bg-pink-400' : 'bg-white'} rounded-md w-auto sm:text-base text-xs max-h-[20px]`}
                >
                  <span>
                    #
                    {thread?.category}
                  </span>
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

const threadShape = {
  category: PropTypes.string.isRequired,
};

MostPopular.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  filtered: PropTypes.string.isRequired,
};

export default MostPopular;
