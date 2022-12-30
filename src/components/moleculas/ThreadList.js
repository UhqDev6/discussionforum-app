import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Card from '../atoms/Card';
import ThreadBody from '../atoms/ThreadBody';
import ThreadTitle from '../atoms/ThreadTitle';
import ThreadHead from '../atoms/ThreadHead';
import ThreadItems from '../atoms/ThreadItems';

function ThreadList(props) {
  const {
    threads, filtered, isDetails,
  } = props;

  const { users = [], authUser = {} } = useSelector((states) => states);

  const handleUserDetail = (id) => users?.filter((user) => user.id === id)[0];

  if (!filtered) {
    return (
      <div className="container gap-5 items-center p-10 w-[85%] mx-auto sm:-mt-10 -mt-14 relative">
        <div className="w-full absolute">
          {
            threads?.map((thread) => (
              <Card className="h-auto relative" key={`${thread?.id}-filtered`}>
                <div>
                  {
                    isDetails ? (
                      <ThreadHead />
                    ) : (
                      <ThreadHead
                        avatar={handleUserDetail(thread.ownerId)?.avatar}
                        name={handleUserDetail(thread.ownerId)?.name}
                        id={thread?.id}
                      />
                    )
                  }
                  <Card.Title>
                    <ThreadTitle title={thread?.title} category={thread?.category} />
                  </Card.Title>
                  <Card.Body>
                    <ThreadBody body={thread?.body} contentFull={isDetails} />
                  </Card.Body>
                  <Card.Footer>
                    <ThreadItems
                      createdAt={thread?.createdAt}
                      upVotesBy={thread?.upVotesBy}
                      downVotesBy={thread?.downVotesBy}
                      totalComments={thread?.totalComments}
                    />
                  </Card.Footer>
                </div>
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
              <div>
                {
                    isDetails ? (
                      <ThreadHead />
                    ) : (
                      <ThreadHead
                        avatar={handleUserDetail(thread.ownerId)?.avatar}
                        name={handleUserDetail(thread.ownerId)?.name}
                        id={thread?.id}
                      />
                    )
                }
                <Card.Title>
                  <ThreadTitle title={thread?.title} category={thread?.category} />
                </Card.Title>
                <Card.Body>
                  <ThreadBody body={thread?.body} contentFull={isDetails} />
                </Card.Body>
                <Card.Footer>
                  <ThreadItems
                    createdAt={thread?.createdAt}
                    upVotesBy={thread?.upVotesBy}
                    downVotesBy={thread?.downVotesBy}
                    totalComments={thread?.totalComments}
                  />
                </Card.Footer>
              </div>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

ThreadList.defaultProps = {
  filtered: '',
  isDetails: false,
};

const threadShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  totalComments: PropTypes.number,
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  filtered: PropTypes.string,
  isDetails: PropTypes.bool,
};

export default ThreadList;
