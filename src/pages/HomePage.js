import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForumList from '../components/moleculas/ForumList';
import { asyncPopulateUserAndForum } from '../states/shared/action';

function HomePage() {
  const { forums = [], users = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndForum());
  });

  const forumList = forums.map((forum) => ({
    ...forum,
    user: users.find((user) => user.id === forum.user),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ForumList forum={forumList} />
    </section>
  );
}

export default HomePage;
