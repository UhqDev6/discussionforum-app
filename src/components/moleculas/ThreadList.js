import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Card from '../atoms/Card';
import ThreadItems from '../atoms/ThreadItems';

function ThreadList(props) {
  const {
    threads, filtered,
  } = props;

  const { users = [] } = useSelector((states) => states);

  if (!filtered) {
    return (
      <div className="container gap-5 items-center p-10 w-[85%] mx-auto sm:-mt-10 -mt-14 relative">
        <div className="w-full absolute">
          {
            threads?.map((thread) => (
              <Card className="h-auto relative" key={`${thread?.id}-filtered`}>
                <ThreadItems key={thread?.id} threads={thread} users={users} />
              </Card>
            ))
          }
        </div>
      </div>
    );
  }
  return (
    <div className="container gap-5 items-center p-10 w-[85%] mx-auto relative">
      <div className="w-full absolute">
        {
          threads?.filter((threadFilter) => threadFilter?.category === filtered).map((thread) => (
            <Card className="h-auto relative" key={thread?.id}>
              <ThreadItems key={thread?.id} threads={thread} users={users} />
            </Card>
          ))
        }
      </div>
    </div>
  );
}

const threadShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotes: PropTypes.array,
  downVotes: PropTypes.array,
  totalComments: PropTypes.number,
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  filtered: PropTypes.string,
};

ThreadList.defaultProps = {
  filtered: '',
};

export default ThreadList;
